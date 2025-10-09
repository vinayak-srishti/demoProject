import React, { useEffect } from 'react'
import img1 from '../../assets/images/logo2.png';
import { Link, useNavigate } from 'react-router-dom';

function UserNavbar() {

    const navigate=useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('userId'==null)){
            navigate('/')
        }
    })

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
        window.location.reload(false);  
      };

  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark landing_custom_navbar pe-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#home">
          <img
            alt="Logo"
            src={img1}
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{' '}
          LEGAL LIAISON
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav"> 
          <ul className="navbar-nav ml-auto float-end">
            <li className="nav-item">
              <Link onClick={handleLogout} className="nav-link" to="/user_add_complaint">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default UserNavbar
