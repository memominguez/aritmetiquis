import { NavLink } from "react-router-dom";
import styles from "./navigation.module.css";
import logo from "../../assets/aritmetiquis.png";

function Navigation() {
  return (
    <header className={styles.header}>
      <div className={styles.logocontainer}>
        <NavLink to="/" className={styles.logosection}>
          <img src={logo} alt="" className={styles.logo} />
          <span className={styles.logospan}>aritmetiquis</span>
        </NavLink>
      </div>

      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? styles.active : undefined}
              end
            >
              Inicio
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/sumar"
              className={({ isActive }) => isActive ? styles.active : undefined}
            >
              Sumar
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/restar"
              className={({ isActive }) => isActive ? styles.active : undefined}
            >
              Restar
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/multiplicar"
              className={({ isActive }) => isActive ? styles.active : undefined}
            >
              Multiplicar
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dividir"
              className={({ isActive }) => isActive ? styles.active : undefined}
            >
              Dividir
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
