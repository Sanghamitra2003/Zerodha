import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
        username: "",
    });
    const { email, password, username } = inputValue;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "https://zerodha-ci10.onrender.com/signup",
                { ...inputValue },
                { withCredentials: true },
            );

            const { success, message, token } = data;
            if (success) {
                localStorage.setItem("token", token);
                toast.success(message);
                setTimeout(() => navigate("/"), 1000);
            } else {
                toast.error(message);
            }
        } catch (error) {
            toast.error("Something went wrong!");
        }
    };

    return (
        <div className="form_container">
            <h2>Signup Account</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
                <span>
                    Already have an account? <Link to="/login">Login</Link>
                </span>
            </form>
        </div>
    );
};

export default Signup;
