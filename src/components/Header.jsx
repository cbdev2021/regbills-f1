import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../slices/authSlice';
import { useLogoutMutation } from '../slices/usersApiSlice';
import styles from './Header.module.css';


const Header = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth.userInfo);
  const [logoutApi, { isLoading: isLoggingOut }] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logoutApi();
      dispatch(logout());
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>RegBills</div>
      <div className={styles.buttons}>
        {userInfo ? (
          <button onClick={handleLogout} disabled={isLoggingOut}>
            {isLoggingOut ? 'Cerrando sesión...' : 'Cerrar sesión'}
          </button>
        ) : (
          <Link to="/iniciosesion">
            <button>Iniciar sesión</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
