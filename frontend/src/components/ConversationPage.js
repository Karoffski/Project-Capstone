import React, {useState, useEffect} from 'react';
import {useParams } from 'react-router-dom';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

const ConversationPage = () => {

    const [conversation, setConversation] = useState({messages: []});
    const [content, setContent] = useState({ content: ""});
    const [author, setAuthor] = useState({ content: ""});
    const {id} = useParams();

    useEffect(() => {
        getConversations();
    }, [])

    async function handleSubmit(e) {
        e.preventDefault();
    
        const newUser = { ...content,...author};
    
        await fetch(`http://localhost:5000/conversations/${id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        })
          .catch(error => window.alert(error))
          .then(setContent({
            author: "",
            content: ""
          }))
          window.location.reload(false)
      }

    const getConversations =  () => {
        fetch(`http://localhost:5000/conversations/${id}`)
        .then(res => res.json())
        .then(data => setConversation(data))
      }

    return(
        <div>
         {conversation.messages.map((message) => {
            return(
                <div key={message._id} className='conversation'>
                    <p>{message.author}</p>
                    <p >{message.content}</p>
                    <p>{message.date.slice(11, 19)}</p>
                </div>
            )
         })}
        <div className='uploadmessage'><br></br>
        <p style={{color: 'white'}}>Please indicate the author</p>
         <TextField
         id="author"
         label="Author"
         type=""
         sx={{mb: "3vh", width: "70%", backgroundColor: "white"}}
         onChange={(e) => setAuthor({ author: e.target.value })}
         ></TextField>
         <p style={{color: 'white'}}>Please state your message</p>
         <TextField
         id="message"
         label="Message"
         type=""
         sx={{mb: "3vh", width: "70%", backgroundColor: "white"}}
         onChange={(e) => setContent({ content: e.target.value })}
         ></TextField><br></br>
        <Button
        variant="contained"
        sx={{ height: "7vh", mb: "10vh", backgroundColor: "#A891C1", "&:hover": { backgroundColor: "#383B7E" } }}
        onClick={handleSubmit}
        >Upload</Button>
        </div>
        </div>
    )
    
}

export default ConversationPage;