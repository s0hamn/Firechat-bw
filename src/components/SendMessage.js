import { Button, Input } from '@mui/material'
import React, {useState} from 'react'
import {db, auth} from '../firebase.js'
import firebase from "firebase/compat/app";


function SendMessage({scroll}) {
    const [msg, setMessage] = useState('')
    async function sendMessage(e){
        e.preventDefault();
         let uid = auth.currentUser.uid;
         let photoURL = auth.currentUser.photoURL


        await db.collection('messages').add({
            text:msg,
            photoURL:photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMessage('')
        scroll.current.scrollIntoView({
          behaviour:'smooth'
        })
    }
  return (
    <div>
      <form onSubmit={sendMessage}>
      <div className="sendMsg">
                    <Input style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} placeholder='Message...' type="text" value={msg} onChange={e => setMessage(e.target.value)} />
                    <Button style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px'}} type="submit">Send</Button>
                </div>
      </form>
    </div>
  )
}

export default SendMessage
