import React, { useState } from 'react';
import img from "../../assets/images/image23.png";
import './UserLogin.css';
import { Link } from 'react-router-dom';
function UserLogin() {
    

  

    return (
        <div>
            <div className="user_registration">
                <div className="user_registration_container">
                    <div className="user_registration_box1">
                        <div className="user_registration_input_group">
                            <form >
                                <div className="user_registration_input mt-5">
                                    <label>Email Id</label>
                                    <input
                                        type="text"
                                        className="form-control border border-dark"
                                        placeholder="Email Id"
                                        name="email"
                                       
                                    />
                                </div>
                                <div className="user_registration_input mt-4">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control border border-dark"
                                        placeholder="Password"
                                        name="password"
                                       
                                    />
                                </div>
                                <div className="user_registration_forgot_pass text-end mt-3 fs-6">
                                    {/* <Link
                                        to="/AdvocateForgot"
                                        className="text-decoration-none text-dark"
                                    >
                                        <p>Forgot Password?</p>
                                    </Link> */}
                                </div>
                                <div className="user_registration_button text-center mt-5 d-flex justify-content-evenly">
                                    <button type="submit">Submit</button>
                                    {/* <button type="button" onClick={handleReset}>Reset</button> */}
                                </div>
                            </form>
                            <div className="mt-4 d-flex justify-content-center">
                                <p>
                                    Don't have an account?{" "}
                                    <Link
                                        to="/user_reg"
                                        className="text-decoration-none text-gold"
                                    >
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
        </div>
    );
}

export default UserLogin;
