import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { emailSent } from '../redux/actions';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const saveLogin = () => {
    dispatch(emailSent(email));
    navigate('/carteira');
  };

  const validateRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const validateEmail = validateRegex.test(email);
  const validatePassword = password.length >= 6;

  return (
    <form action="">
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        placeholder="alguem@alguem.com"
        id="email"
        data-testid="email-input"
        onChange={ (e) => setEmail(e.target.value) }
      />
      <label htmlFor="password">Senha:</label>
      <input
        type="password"
        placeholder="******"
        id="password"
        data-testid="password-input"
        onChange={ (e) => setPassword(e.target.value) }
      />
      <button
        type="button"
        disabled={ !(validateEmail && validatePassword) }
        onClick={ () => saveLogin() }
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
