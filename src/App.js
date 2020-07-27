import React, { useState, useEffect } from "react";
import firebase from "firebase";
import "./App.css";
import { db } from "./firebase";
import { button } from "@material-ui/core";
import InstagramEmbed from "react-instagram-embed";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  // const [messages, setMessage] = useState([""]);  without firebase

  useEffect(() => {
    setUsername(prompt("Please enter your name!"));
  }, []);

  //line 11-16 firebase
  useEffect(() => {
    //run it once. //useEffect take an array and run once... Snapshot go get data.
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot(
        (snapshot) => setMessages(snapshot.docs.map((doc) => doc.data())) //line 14 telling it to grab the data.
      );
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("messages").add({
      user: username,
      content: input,
      timestamp: firebase.firestore.Timestamp.now(),
    });
    setInput("");
  };

  return (
    <div className="info">
      <h1>Whats Popping</h1>

      <h2> Welcome to the chat {username}</h2>

      <iframe src="http://localhost:3000/" frameborder="0"></iframe>

      <InstagramEmbed
        url="https://www.instagram.com/p/CC2AdX8B57V333yflFrwuTh0SOfdSMKBX923cM0/"
        maxWidth={320}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />

      <form>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button
          variant="contained"
          color="primary"
          type="submit"
          onClick={sendMessage}
        >
          send message
        </button>
      </form>

      {messages.map((message) => (
        <p>
          {message.user ? message.user : "unknown user"} said: {message.content}
        </p>
      ))}
    </div>
  );
}

export default App;
