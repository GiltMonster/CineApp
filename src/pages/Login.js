

import React, { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Login/index.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setError('E-mail ou senha inválidos.');
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError('');
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (err) {
      setError('Erro ao fazer login com Google.');
    }
    setLoading(false);
  };


  return (
    <div className="login-container">
      <h2>Entrar</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="login-input"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          className="login-input"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button className="login-btn" type="submit" disabled={loading}>
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
      <button className="login-btn login-btn-google" onClick={handleGoogleLogin} disabled={loading}>
        <img src="/utils/svgs/google-original.svg" alt="Google" style={{ width: 20, height: 20, marginRight: 10, verticalAlign: 'middle' }} />
        Entrar com Google
      </button>
      {error && <div className="login-error">{error}</div>}
      <div className="login-register-link">
        Não tem conta? <Link to="/register">Cadastre-se</Link>
      </div>
    </div>
  );
};


export default Login;
