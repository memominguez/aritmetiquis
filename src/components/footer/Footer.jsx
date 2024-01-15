import { NavLink } from "react-router-dom";
import logo from "../../assets/aritmetiquis.png";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer>
      <NavLink to="/" className={styles.logosection}>
        <img src={logo} alt="" className={styles.logo} />
        <span className={styles.logospan}>aritmetiquis</span>
      </NavLink>
    </footer>
  );
}

export default Footer;
