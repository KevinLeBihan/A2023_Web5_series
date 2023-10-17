import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Login.css";

const LogIn = ({ onLoginFn,updateUser}) => {

    const [auth, setAuth] = useState({
        username: "",
        password: "",
    });
    const navigate = useNavigate();

    const updateState = (e) => {
        setAuth({ ...auth, [e.target.name]: e.target.value });
    };

    const isValid = () => {
        return auth.username.trim() !== "" && auth.password.trim() !== "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid()) {
            // updateUser(auth.username);
            onLoginFn(auth.username);
            navigate("/series-tendances");
        }
    };

    return (
        <>
            <div className="InputUser">
                <input
                    data-cy="username-input"
                    onChange={updateState}
                    value={auth.username}
                    name="username"
                    type="text"
                    className="InputUser"
                    placeholder="Username"
                />
                <input
                    data-cy="password"
                    onChange={updateState}
                    value={auth.password}
                    name="password"
                    type="password"
                    className="InputMDP"
                    placeholder="Password"
                />
            </div>
            <button data-cy="login" disabled={!isValid()} onClick={handleSubmit} className="Verifier">Se connecter</button>
        </>
    );
}

export default LogIn;
