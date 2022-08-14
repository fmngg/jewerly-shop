import React from 'react';
import { Link } from 'react-router-dom';

import img from '../../assets/img/login.png';

import styles from './Auth.module.scss';

function Login() {
  const [isHidden, setIsHidden] = React.useState(true);

  return (
    <>
      <div className={styles.body}>
        <div className={styles.img}>
          <img src={img} alt="background" />
        </div>
        <div className={styles.right}>
          <div className={styles.button}>
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.5 7L7.5 0.999999M14 7L1.5 7L14 7ZM1.5 7L7.5 13L1.5 7Z"
                stroke="#163f2c"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <Link to={'/'}>
              <p>BACK TO MAIN PAGE</p>
            </Link>
          </div>
          <div className={styles.content}>
            <h1>Login</h1>
            <input placeholder="Username" />
            <div className={styles.password}>
              <input type={isHidden ? 'password' : 'text'} placeholder="Password" />
              <svg
                onClick={() => setIsHidden(!isHidden)}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.5 12.5C7.5 6 16.5 6 19.5 12.5"
                  stroke="#738C80"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 16C10.8954 16 10 15.1046 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 15.1046 13.1046 16 12 16Z"
                  stroke="#738C80"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <button onClick={() => alert('There is no backend yet')}>LOG IN</button>
            <h5>Don’t have an account?</h5>
            <Link to="/register">
              <p>Sign Up</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
