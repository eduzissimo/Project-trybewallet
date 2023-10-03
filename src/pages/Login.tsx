// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { emailSent, passwordSent } from '../redux/actions';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const validateRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//   const validateEmail = validateRegex.test(email);
//   const validatePassword = password.length >= 6;

//   const saveLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//     dispatch(emailSent(email));
//     dispatch(passwordSent(password));
//     navigate('/carteira');
//   };

//   const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newPassword = event.target.value;
//     setPassword(newPassword);
//   };

//   const handleLogin = () => {
//     if (isSubmitDisabled) {
//       return;
//     }
//     dispatch(setEmail(email));
//     history.push('/carteira');
//   };

//   return (
//     <form>
//       <label htmlFor="email">Email:</label>
//       <input
//         type="email"
//         placeholder="alguem@alguem.com"
//         id="email"
//         data-testid="email-input"
//         onChange={ (e) => setEmail(e.target.value) }
//       />
//       <label htmlFor="password">Senha:</label>
//       <input
//         type="password"
//         placeholder="******"
//         id="password"
//         data-testid="password-input"
//         onChange={ handlePasswordChange }
//       />
//       <button
//         type="button"
//         disabled={ !(validateEmail && validatePassword) }
//         onClick={ (e) => saveLogin(e) }
//       >
//         Entrar
//       </button>
//     </form>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { emailSent } from '../redux/actions';

function Login() {
  const [email, setEmailValue] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const isPasswordValid = password.length >= 6;
  const isSubmitDisabled = !(isEmailValid && isPasswordValid);

  const handleLogin = () => {
    if (isSubmitDisabled) {
      return;
    }
    dispatch(emailSent(email));
  };

  return (
    <div>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        data-testid="email-input"
        value={ email }
        onChange={ (e) => setEmailValue(e.target.value) }
      />

      <label htmlFor="password">Senha:</label>
      <input
        type="password"
        id="password"
        data-testid="password-input"
        value={ password }
        onChange={ (e) => setPassword(e.target.value) }
      />

      <Link to="/carteira">
        <button
          type="button"
          onClick={ handleLogin }
          disabled={ isSubmitDisabled }
        >
          Entrar
        </button>
      </Link>
    </div>
  );
}

export default Login;
