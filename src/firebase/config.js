import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAUD2NZJ-uRGe2HxiNlA5Lco0tylmt1lMk",
    authDomain: "react-project-f4341.firebaseapp.com",
    projectId: "react-project-f4341",
    storageBucket: "react-project-f4341.appspot.com",
    messagingSenderId: "953820976374",
    appId: "1:953820976374:web:c514508f7585d85e0d08d7",
    measurementId: "G-NSY2FLHTN9"
};

const firebase = Firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { firebase, db};

