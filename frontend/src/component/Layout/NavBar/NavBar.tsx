import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <div className={styles.logo}>SCRIPTLY</div>
      </Link>
      <ul>
        <li className={styles.li}><Link to="/" className={styles.a}>Home</Link></li>
        <li className={styles.li}><Link to="/contact" className={styles.a}>Contact Us</Link></li>
        <li className={styles.li}><a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className={styles.a}>Git Repo</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;