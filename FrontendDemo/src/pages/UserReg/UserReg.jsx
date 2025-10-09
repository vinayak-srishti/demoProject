import React, { useState } from "react";
import "./UserReg.css";
import img from "../../assets/images/clientReg.png";
import { Link } from "react-router-dom";
import { registerUser } from "../../services/UserService"; // 👈 import service

function UserReg() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form validation
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Contact number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit number.";
    }
    if (!formData.password.trim()) newErrors.password = "Password is required.";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (formData.confirmPassword !== formData.password)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setErrors({});
    setSuccessMessage("");

    try {
      const res = await registerUser({
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
        password: formData.password,
      });

      setSuccessMessage(res.message || "Registration successful!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      setErrors({ apiError: err.message });
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
              <div className="user_registration_input">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control border border-dark"
                  placeholder="Enter your name"
                />
                {errors.name && <p className="text-danger">{errors.name}</p>}
              </div>

              <div className="user_registration_input mt-3">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control border border-dark"
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-danger">{errors.email}</p>}
              </div>

              <div className="user_registration_input mt-3">
                <label>Contact</label>
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control border border-dark"
                  placeholder="Enter your contact"
                />
                {errors.phone && <p className="text-danger">{errors.phone}</p>}
              </div>

              <div className="user_registration_input mt-3">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control border border-dark"
                  placeholder="Password"
                />
                {errors.password && (
                  <p className="text-danger">{errors.password}</p>
                )}
              </div>

              <div className="user_registration_input mt-3">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="form-control border border-dark"
                  placeholder="Confirm Password"
                />
                {errors.confirmPassword && (
                  <p className="text-danger">{errors.confirmPassword}</p>
                )}
              </div>

              <div className="user_registration_button text-center mt-3">
                <button type="submit" disabled={loading}>
                  {loading ? "Registering..." : "Register"}
                </button>
              </div>

              {errors.apiError && (
                <p className="text-danger text-center mt-3">
                  {errors.apiError}
                </p>
              )}
              {successMessage && (
                <p className="text-success text-center mt-3">
                  {successMessage}
                </p>
              )}
            </form>

            <div className="mt-4 d-flex justify-content-center">
              <p>
                Already have an account?{" "}
                <Link to="/" className="text-decoration-none text-gold">
                  Login here.
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="user_registration_box2">
          <img src={img} className="img-fluid" alt="user_reg_img" />
        </div>
      </div>
    </div>
  );
}

export default UserReg;
