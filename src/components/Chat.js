import React, { useEffect, useState, useRef } from "react";
import { auth, db } from "../firebase";
import SignOut from "./SignOut";
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
  limit,
} from "firebase/firestore";
import SendMessage from "./SendMessage";

function Chat() {
  const scroll = useRef()
  
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) =>
      setMessages(
        querySnapshot.docs.map((doc) => {
          return doc.data();
        })
      )
    );
  });

  return (
    <div>
      <SignOut />
      <div className="msgs">
        {messages.map(({ id, text, photoURL, uid }) => {
          return (
            <div>
              <div
                key={id}
                className={`msg ${
                  uid == auth.currentUser.uid ? "sent" : "received"
                }`}
              >
                <img src={photoURL} alt="" />
                <p>{text}</p>
              </div>
            </div>
          );
        })}
      </div>
      <SendMessage scroll={scroll} />
      <div ref={scroll}></div>
    </div>
  );
}

export default Chat;
