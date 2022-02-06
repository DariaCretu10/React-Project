import React from 'react';
import { Link} from "react-router-dom";
import "./NavigationBar.css";
import {useAuth} from "../../context/AuthContext";

const NavigationBar = () => {
    const auth = useAuth();
    return (
        <header className={"NavigationBar"}>
            <nav>
                <ul className="navLinks">
                    <Link to="/"> <li>Home</li></Link>
                    {auth.user ? (
                        <>
                            <Link to="/web"> <li>Todos</li></Link>
                            <li className="out" onClick={() => auth.signout()}>Sign Out</li>
                        </>
                    ) : (
                        <>
                            <Link to="/signup"> <li>Sign Up</li></Link>
                            <Link to="/login"> <li>Log In</li></Link>
                        </>
                    )}

                </ul>
            </nav>

        </header>
    )

};

export default NavigationBar;