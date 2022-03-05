import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import perfil from "../../assets/perfil.jpg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo}>
          <img src={perfil} alt="Luan Santos"></img>
          Luan Santos
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/lab">Lab</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Portfólio</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
