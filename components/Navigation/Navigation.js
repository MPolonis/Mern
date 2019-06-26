import React from 'react';
import { Link } from 'react-router';
import styles from './Navigation.css';

const Navigation = props => (
  <div>
    <ul>
      <li className={styles.navPosition}><Link to="/home" className={styles.nav} activeStyle={{ color: '#48abee' }} onlyActiveOnIndex>Home</Link></li>
      <li className={styles.navPosition}><Link to="/about" className={styles.nav} activeStyle={{ color: '#48abee' }} onlyActiveOnIndex>Contact</Link></li>
      <li className={styles.navPosition}><Link to="/" className={styles.nav} activeStyle={{ color: '#48abee' }} onlyActiveOnIndex>Posts</Link></li>
    </ul>
    {props.children}
  </div>
);

export default Navigation;
