// ./src/components/navbar.js

"use client"

import { useEffect, useState } from 'react';


const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(window.localStorage.token !== undefined);
  }, []);

  const handleLogout = () => {
    
    // Remove the token from localStorage
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }

    // Navigate to the login page
    window.location.href = "/login";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand text-light" style={{ marginLeft: '20%' }} href="/">MEDIAR</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto" style={{ width: '100%' }}>
          <li className="nav-item">
              <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2" type="search" placeholder="Ara" aria-label="Search" />
              </form>
          </li>

          <li className="nav-item active">
              <a className="nav-link text-light" style={{ marginLeft: '100px'}} href="/"><i className="fas fa-home"></i> Anasayfa</a>
          </li>
          <li className="nav-item">
              <a className="nav-link text-light" href="/network"><i className="fas fa-users"></i> Ağım</a>
          </li>
          <li className="nav-item">
              <a className="nav-link text-light" href="/notifications"><i className="fas fa-bell"></i> Bildirimler</a>
          </li>
          <li className="nav-item">
              <a className="nav-link text-light" href="/messages"><i className="fas fa-envelope"></i> Mesajlar</a>
          </li>

          {
            isLoggedIn ?  
            (<li className="nav-item active" style={{ marginLeft: 'auto' , marginRight: '25%'}}>
              <a className="nav-link text-light" onClick={handleLogout} style={{ marginLeft: 'auto' }} href="/login">Logout</a>
            </li>) : 
            (<li className="nav-item active" style={{ marginLeft: 'auto', marginRight: '20px' }}>
              <a className="nav-link text-light" href="/login">Login</a>
            </li>)
          }
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
