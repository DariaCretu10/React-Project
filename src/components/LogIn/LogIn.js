import React, { useState } from "react";
import { useHistory } from "react-router-dom";


import { useAuth } from "../../context/AuthContext";


const LogIn = () => {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const auth = useAuth();
    let history = useHistory();


    return (
        <div className="container" margin-top="20px">

            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    auth.signin({
                        email: emailValue,
                        password: passwordValue,
                        callback: () => history.push("/web"),
                    });
                }}
            >
                <h2>Log  In</h2>
                <label>What is your email?</label><br/>
                <input
                    type="email"
                    placeholder="Email"
                    value={emailValue}
                    onChange={(event) => setEmailValue(event.target.value)}
                /><br/>
                <label>What is your password?</label><br/>
                <input
                    type="password"
                    placeholder="Password"
                    value={passwordValue}
                    onChange={(event) => setPasswordValue(event.target.value)}
                /><br/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};


export default LogIn;