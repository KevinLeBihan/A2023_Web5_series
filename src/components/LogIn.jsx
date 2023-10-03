import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Login.css";

const LogIn = ({ onLogin, estConnecte, updateUser }) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    console.log(estConnecte);

    const onChangeHandlerUser = (e) => {
        setUser(e.target.value);
        // console.log(e.target.value);
    };
    const onChangeHandlerMDP = (e) => {
        setPassword(e.target.value);
        // console.log(e.target.value);
    };

    const Verifier = () => {
        // Vérifiez le nom d'utilisateur et le mot de passe ici
        if (user.trim() !== '' && password.trim() !== '') {
            onLogin();
            updateUser(user);
            if (estConnecte === true) {
                navigate("/Profil");
            }
        }
    }
    return (
        <>
            <div className="InputUser">
                <input data-cy={`username-input`} onChange={onChangeHandlerUser} value={user} type="text" className="InputUser" placeholder="Username" />
                <input data-cy={`password`} onChange={onChangeHandlerMDP} value={password} type="text" className="InputMDP" placeholder="Password" />
            </div>
            <button data-cy={`login`}disabled={user.trim() === "" && password.trim() === ""} onClick={Verifier} className="Verifier">Se connecter</button>
        </>
    )
}

export default LogIn;