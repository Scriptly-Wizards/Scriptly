import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <div className={styles.logo}>SCRIPTLY</div>
      </Link>
      <ul>
        <li className={styles.li}>
          <a
            href="https://github.com/Scriptly-Wizards/Scriptly.git"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.a}>
            <img
              src={`${process.env.PUBLIC_URL}/img/github-mark-white.svg`}
              alt="Github Repo"
            />
            Github Repo
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
