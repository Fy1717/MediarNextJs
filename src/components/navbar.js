"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link'; // Düzeltme yapıldı
import { useHydrateStore } from '../store/store';

const Navbar = () => {
  useHydrateStore();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    const user = window.localStorage.getItem('user');
    const pathname = window.location.pathname;
    
    setIsAuthenticated((token !== null || user !== null) && pathname !== "/login");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = "/login";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <Link className="navbar-brand text-light" href="/" style={{ marginLeft: '20%' }}>
        MEDIAR
      </Link>
  
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto" style={{ width: '100%' }}>
          <li className="nav-item">
              <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search.." aria-label="Search" />
              </form>
          </li>

          <li className="nav-item active">
              <Link className="nav-link text-light" href="/" style={{ marginLeft: '100px'}}><i className="fas fa-home"></i> Main Page</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link text-light" href="/network"><i className="fas fa-users"></i> Network </Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link text-light" href="/notifications"><i className="fas fa-bell"></i> Notification </Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link text-light" href="/messages"><i className="fas fa-envelope"></i> Messages </Link>
          </li>

          {
            isAuthenticated ?  
            (
              <li className="nav-item active">
                <Link className="nav-link text-light" href="/profile">Profile</Link>
              </li>
            ) : 
            (
              <li>
              </li>
            )
          }

          {
            isAuthenticated ?  
            (
              <li className="nav-item active">
                <a className="nav-link text-light" onClick={handleLogout} style={{ marginLeft: 'auto' }}>Logout</a>
              </li>
            ) : 
            (
              <li className="nav-item active">
                <Link className="nav-link text-light" href="/login">Login</Link>
              </li>
            )
          }  
        </ul>
      </div>
      {/* Diğer navbar içerikleri */}
    </nav>
  );
};

export default Navbar;
