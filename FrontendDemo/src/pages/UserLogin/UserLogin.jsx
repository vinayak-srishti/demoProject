import React, { useState } from 'react';
import img from "../../assets/images/image23.png";
import './UserLogin.css';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
function UserLogin() {
    
     const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/demo/login', formData);
      console.log('Login successful:', response.data);

      localStorage.setItem('user', JSON.stringify(response.data));

      alert('Login successful!');
      navigate('/user_home'); 

    } catch (err) {
      console.error('Login error:', err);
      if (err.response && err.response.data) {
        setError(err.response.data.message || 'Invalid email or password');
      } else {
        setError('Server not reachable');
      }
    } finally {
      setLoading(false);
    }
  };
  

return (
    <div className="user_registration">
      <div className="user_registration_container">
        <div className="user_registration_box1">
          <div className="user_registration_input_group">
            <form onSubmit={handleSubmit}>
              <div className="user_registration_input mt-5">
                <label>Email Id</label>
                <input
                  type="text"
                  className="form-control border border-dark"
                  placeholder="Email Id"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="user_registration_input mt-4">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control border border-dark"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {error && (
                <p className="text-danger text-center mt-3">{error}</p>
              )}

              <div className="user_registration_button text-center mt-5 d-flex justify-content-evenly">
                <button type="submit" disabled={loading}>
                  {loading ? 'Logging in...' : 'Submit'}
                </button>
              </div>
            </form>

            <div className="mt-4 d-flex justify-content-center">
              <p>
                Don't have an account?{' '}
                <Link to="/user_reg" className="text-decoration-none text-gold">
                  Register here.
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="user_registration_box2 justify-content-center">
          <img src={img} className="img-fluid w-100" alt="user_reg_img" />
        </div>
      </div>
    </div>
  );}

export default UserLogin;
