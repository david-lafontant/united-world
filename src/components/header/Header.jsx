import React from 'react';
import styles from './Header.module.css';

const Header = () => (
  <header className="container-fluid">
    <div className={`row ${styles.login_social}`}>
      <div className="col">
        <ul className={`${styles.login_social_list}`}>
          <li>Twitter</li>
          <li>Facebook</li>
          <li>English</li>
          <li>My Page</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  </header>
);

export default Header;
