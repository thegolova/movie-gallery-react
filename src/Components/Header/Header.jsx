import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import homeIcon from '../../assets/images/home-icon2.svg';

function Header(props) {
  return (
    <div className={styles.header} id="header">
      <NavLink to='/'>
        <img src={homeIcon} className={styles.home} alt="home-icon"/>
      </NavLink>

      <div>
        {(props.isAuth && props.login) && <span className={styles.loginName}>
          {props.login}
        </span>}
        
        { (props.isAuth)
        ? <button className={styles.btnLogin} onClick={props.logout}> Log Out </button>
        : <NavLink to='/login'> 
            <button className={styles.btnLogin}> Log In </button>
          </NavLink>}

      </div>
    </div>
  )
}

export default Header;