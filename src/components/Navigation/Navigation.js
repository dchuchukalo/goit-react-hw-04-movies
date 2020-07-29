import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav className={styles.Navigation}>
    <NavLink
      className={styles.Link}
      activeClassName={styles.ActiveLink}
      exact
      to={routes.home}
    >
      Home
    </NavLink>
    <NavLink
      className={styles.Link}
      activeClassName={styles.ActiveLink}
      to={routes.movies}
    >
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
