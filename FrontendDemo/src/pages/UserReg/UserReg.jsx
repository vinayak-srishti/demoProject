import React, { useState } from "react";
import "./UserReg.css";
import img from '../../assets/images/clientReg.png';
import 'remixicon/fonts/remixicon.css';
import { Link } from "react-router-dom";

function UserReg() {

    const [isToastVisible, setToastVisible] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    
    return (
        <div className="user_registration">
            <div className="user_registration_container">
                <div className="user_registration_box1">
                    <div className="user_registration_input_group">
                        <form>
                            <div className="user_registration_input">
                                <label>Name</label>
                                <input
                                    type="text"
                                    className="form-control border border-dark"
                                    placeholder="Enter your name"
                                    name="name"
                                   
                                />
                            </div>
                            <div className="user_registration_input mt-3">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="form-control border border-dark"
                                    placeholder="Enter your email"
                                    name="email"
                                   
                                />
                              
                            </div>
                           
                            <div className="user_registration_input mt-3">
                                <label>Password</label>
                                <div className="password-field">
                                    <input
                                        type="password"
                                        className="form-control border border-dark"
                                        placeholder="Password"
                                        name="password"
                                      
                                    />
                                   
                                </div>
                               
                            </div>
                            <div className="user_registration_input mt-3">
                                <label>Confirm Password</label>
                                <div className="password-field">
                                    <input
                                        type="password"
                                        className="form-control border border-dark"
                                        placeholder="Confirm Password"
                                        name="confirmPassword"
                                      
                                    />
                                   
                                </div>
                               
                            </div>
                            <div className="user_registration_button text-center mt-3">
                                <button type="submit">Register</button>
                            </div>
                        </form>
                         <div className="mt-4 d-flex justify-content-center">
                                <p>
                                    Already have an account?{" "}
                                    <Link
                                        to="/"
                                        className="text-decoration-none text-gold"
                                    >
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
