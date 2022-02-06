import React, { useState, useRef, useEffect } from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

import './App.css';
import {db} from "./firebase/config";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import WebPage from "./pages/WebPage";
import LogIn from "./components/LogIn/LogIn";


function App() {

    // const clothColorRef = useRef();
    //
    // function handleClickButton() {
    //     const fabric = clothColorRef.current.value;
    //     db.collection("users").add({firstName : fabric})
    // }

  return (

    <BrowserRouter>
        {/*<input id="color" ref={clothColorRef} type="text" />&nbsp;&nbsp;<br/>*/}
        {/*<button onClick={handleClickButton}>Click</button>*/}
        <NavigationBar/>
        <Switch>
            <Route path="/signup" component={SignUp}/>
            <Route path="/login" component={LogIn}/>
            <PrivateRoute path="/web">
                <WebPage/>
            </PrivateRoute>
            <Route path="/" component={Home}/>
        </Switch>

    </BrowserRouter>
  );
}

export default App;
