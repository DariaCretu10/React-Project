import React, {useContext, useState} from "react";
import "./SignUp.css";
import {db} from "../../firebase/config";
import {FirebaseContext} from "../../context/FirebaseContext";
import {useAuth} from "../../context/AuthContext";
import {useHistory} from "react-router-dom";

const SignUp = () => {



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const auth = useAuth();

    return (
        <div className="container">
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    auth.signup({email, password, callback: () => history.push("/web") });

                    setEmail("");
                    setPassword("");
                }}
            >
                <h2>Sign up</h2>
                <label>Email</label><br/>
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}/><br/>

                <label>Password</label><br/>
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}/><br/>
                <button type="submit" >Sign up</button>
            </form>
        </div>
    );
}

export default SignUp;