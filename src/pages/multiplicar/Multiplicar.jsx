import { useState, useRef, useEffect } from "react";
import Progressbar from "../../components/progressbar/Progressbar";
import drum from "../../assets/failure-drum.mp3";
import ringbell from "../../assets/reception-bell.mp3";

function Multiplicar() {
  const [respuesta, setRespuesta] = useState("");
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [counter, setCounter] = useState(0); // submissions counter
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(false);
  const [halftime, setHalftime] = useState(false); // check when 2500 ellapsed
  const [enableButton, setEnableButton] = useState(false); // enable or disable

  // SET CONSTANTS
  let trialsNumber = 10; // how many questions per test
  let questionTimeout = 10000; // waiting time for response

  let deltaProgressbar = (0.2 / questionTimeout) * 1000 * 100;
  // 0.2 = progress bar interval, sec (constant)

  const inputRef = useRef(null);

  const generateNums = () => {
    setNum1(Math.floor(Math.random() * 8) + 2);
    setNum2(Math.floor(Math.random() * 8) + 2);
    setRespuesta("");
  };

  useEffect(() => {
    let timerId;
    generateNums();
    setEnableButton(true);
    setTimer(true);
    timerId = setTimeout(() => {
      setTimer(false);
      setCounter((prev) => prev + 1);
    }, questionTimeout);

    return () => clearTimeout(timerId);
  }, [counter, questionTimeout]);

  useEffect(() => {
    setHalftime(false);
    let halftimeId;
    halftimeId = setTimeout(() => {
      setHalftime(true);
    }, questionTimeout * 0.6);

    return () => clearTimeout(halftimeId);
  }, [counter, questionTimeout]);

  // *************************************************************

  const handleChange = (event) => {
    setRespuesta(event.target.value);
  };

  // **************************************************************

  const handleSubmit = (event) => {
    event.preventDefault();

    setTimer(false);
    setEnableButton(false);

    setCounter((prev) => prev + 1);
    let appRes = num1 * num2;

    if (appRes === parseInt(respuesta)) {
      if (!halftime) {
        setScore((prev) => prev + 10);
      } else {
        setScore((prev) => prev + 5);
      }
    } else {
      playdrum();
    }
  };

  // **************************************************************

  function playdrum() {
    new Audio(drum).play();
  }

  function playRingbell() {
    new Audio(ringbell).play();
  }

  // **************************************************************

  if (counter === trialsNumber) {
    playRingbell();
  }

  // ***************************************************************

  const handleStartover = () => {
    location.reload();
  };

  return (
    <>
      {counter >= trialsNumber ? (
        <div className="container" style={{ backgroundColor: "#ffff00" }}>
          <h1>Prueba finalizada</h1>
          <h1>Puntaje: {score}</h1>
          <button className="start" onClick={handleStartover}>
            Intentar otro ejercicio
          </button>
        </div>
      ) : (
        <div className="container" style={{ backgroundColor: "#ffff00" }}>
          <Progressbar pleaseGo={timer} increment={deltaProgressbar} />

          <form className="form" onSubmit={handleSubmit}>
            <h2>
              {num1} X {num2} = ?
            </h2>

            <input
              type="text"
              className="input"
              placeholder="Resultado?"
              autoFocus
              autoComplete="off"
              ref={inputRef}
              value={respuesta}
              onChange={handleChange}
            />
            <button type="submit" className="btn" disabled={!enableButton}>
              Someter respuesta
            </button>

            <div className="notas">
              <span>Intentos: {counter}</span>
              <span>Puntaje: {score}</span>
            </div>
          </form>
          <div>
            <button className="start" onClick={handleStartover}>
              Re-iniciar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Multiplicar;
