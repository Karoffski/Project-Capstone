import React, {useState, useEffect} from 'react';
import {useParams } from 'react-router-dom';

const ConversationPage = () => {

    const [conversation, setConversation] = useState({messages: []});
    const {id} = useParams()

    useEffect(() => {
        getConversations();
    }, [])

    useEffect(() => {
        console.log(conversation.messages);
    }, [conversation])

    const getConversations =  () => {
        fetch(`http://localhost:5000/conversations/${id}`)
        .then(res => res.json())
        .then(data => setConversation(data))
      }

    return(
        <div>
         {conversation.messages.map((message) => {
            return(<p key={message._id}>{message.content}</p>)
         })}
        </div>
    )
    
}

export default ConversationPage;