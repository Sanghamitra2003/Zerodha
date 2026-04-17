import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
    });

    const { email, password } = inputValue;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "https://zerodha-ci10.onrender.com/login",
                { ...inputValue },
                { withCredentials: true },
            );

            const { success, message, token } = data;

            if (success) {
                localStorage.setItem("token", token);
                toast.success(message, { position: "bottom-left" });
                setTimeout(() => {
                    window.location.href = "/";
                }, 1000);
            } else {
                toast.error(message, { position: "bottom-left" });
            }
        } catch (error) {
            toast.error("Login failed", { position: "bottom-left" });
        }
    };

    return (
        <div className="form_container">
            <h2>Login to SwiftTrade</h2>
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
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
                <span>
                    Don't have an account? <Link to="/signup">Signup</Link>
                </span>
            </form>
        </div>
    );
};

export default Login;
