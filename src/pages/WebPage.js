import React, {useState, useEffect} from "react";
import"./WebPage.css"
import {db} from "../firebase/config";
import {useHistory} from "react-router-dom";
import "../components/LogIn/LogIn"

const WebPage = () => {

    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const getPostsFromFirebase = [];
        const subscriber = db
            .collection("todos")
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    getPostsFromFirebase.push({
                        ...doc.data(), //spread operator
                        key: doc.id, // `id` given to us by Firebase
                    });
                });
                setPosts(getPostsFromFirebase);
                setLoading(false);
            });

        // return cleanup function
        return () => subscriber();
    }, [loading]);

    const saveAnswer = (event) => {
        event.preventDefault();

        const formData = event.target.elements.answer.value;
        console.log(formData);

        db.collection("todos").add({name : formData});

        event.target.elements.answer.value = null;
    };

    return (
        <div>
            <div className="container2">
                <h1>My todos:</h1>
                {posts.length > 0 ? (
                    posts.map((post) => <div key={post.key}>{post.name}</div>)
                ) : (
                    <h1>no answers yet :(</h1>
                )}
            </div>
            <div className="container1">
                <form onSubmit={saveAnswer} className="form1">
                    <label>Add todo</label><br/>
                    <input  className="input1" id="answer" type="text"/><br/>
                    <button  className="button1">Add to list</button>
                </form>
            </div>
        </div>

    );
};

export default WebPage;