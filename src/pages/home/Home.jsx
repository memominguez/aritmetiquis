import styles from "./home.module.css";

const Home = () => {
  return (
    <main className={styles.container}>
      <div className={styles.heading}>
        <h1>Bienvenido a nuestro gimnasio de Aritmética</h1>
        <h2>
          Se te invita a convertirte en un as de las operaciones aritméticas
          <br />
          ...sin calculadora, por favor.
        </h2>
      </div>

      <div className={styles.content}>     
      <article>
        <ul>
          <li>
            Te presentamos ejercicios con las cuatro operaciones fundamentales de
            la aritmética, a los cuales puedes ingresar seleccionando en la
            barra de navegación.
          </li>
          <li>
            Un ejercicio consta de 10 preguntas. Ingresa tu respuesta y das
            click al botón. ó ENTER si usas computadora.
          </li>
          <li>
            Los ejercicios son contra reloj. Tienes 10 segundos para responder
            cada pregunta.
          </li>
          <li>
            Si contestas rápido y correctamente, se te otorgan 10 puntos. Si te
            tardas un poco, pero tu respuesta es correcta, se te otorgan 5
            puntos. Si no respondes, pasas a la siguienate pregunta.
          </li>
          <li>
            Si la respuesta es incorrecta, suena un tambor desafinado, y cero
            puntos.
          </li>
          <li>Puntaje máximo = 100.</li>
        </ul>
      </article>

      <section className={styles.foot}>
        <div className={styles.footcontent}>
          <p>Adelante, disfrutemos</p>
          <p>El autor te agradecerá comentarios</p>
          <a
            href="https://contact-gdominguez.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Guillermo Domínguez
          </a>
          <p>Haz click para enviar mensaje</p>
        </div>
      </section>
      </div>
    </main>
  );
};

export default Home;
