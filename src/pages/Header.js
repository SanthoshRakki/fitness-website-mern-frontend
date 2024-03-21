import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
   
    const authToken = localStorage.getItem('auth');
    setIsLoggedIn(!!authToken);
  }, []);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
   
    localStorage.removeItem('auth');
    localStorage.removeItem('email');
    setIsLoggedIn(false); 
  };

  return (
    <div className='header'>
      <p> Fitness Website</p>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default Header;
