import React, { useEffect } from 'react';
import img1 from '../../assets/images/logo2.png';
import { Link, useNavigate } from 'react-router-dom';

function UserNavbar() {
  const navigate = useNavigate();



  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
    window.location.reload(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark pe-5">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/user_home">
          <img
            src={img1}
            alt="Logo"
            width="50"
            height="50"
            className="d-inline-block align-top me-2"
          />
          LEGAL LIAISON
        </Link>

        {/* ✅ Correct Bootstrap 5 attributes */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link onClick={handleLogout} className="nav-link" to="#">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default UserNavbar;
