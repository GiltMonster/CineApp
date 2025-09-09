import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useNavigate } from 'react-router-dom';
import '../styles/Header/index.css';

const Header = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <header className="header-container">
      <div className="header-title" onClick={() => navigate('/')}>CineApp</div>
      {user && (
        <button className="header-logout-btn" onClick={handleLogout}>
          Sair
        </button>
      )}
    </header>
  );
};

export default Header;
