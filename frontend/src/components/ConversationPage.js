
import * as React from 'react'
import { useParams } from 'react-router-dom'
import {useEffect, useState} from 'react';

const ConversationPage =() =>{
  const [conversation, setConversation] = useState([]);
  const  params = useParams()

  useEffect(() => {
   getConversations();
  })
  const getConversations =  () => {
    fetch(`http://localhost:5000/conversations/${params.id}`)
    .then(res => res.json())
    .then(data => setConversation(data))
  }

  return (
    <p>{conversation.author}</p>
  )
}
export default ConversationPage


