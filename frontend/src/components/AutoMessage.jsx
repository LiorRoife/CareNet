


/*export default function (props){

    return(
        <div className="autoMessage">
        <p className="message">{props.message}<br></br></p>
        </div>
        
    )
}*/import React, { useState } from 'react';
import autoMessage from '../guidingMessages';

const MessageDisplay = ({ messages }) => {

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  //const [userMessages, setUserMessages] = useState();

  function handleNextMessage  ()  {
      
      if (currentMessageIndex < autoMessage.length + messages.length - 1) {
          setCurrentMessageIndex(currentMessageIndex + 1)};      
      }
     
   
  
   const currentMessage = messages[currentMessageIndex];
  
    return (
       <div>
       {autoMessage.map((messages)=>(
        <p key={messages.id}>{currentMessage.message}</p>
       ))}
          {handleNextMessage}
        </div>
    );
  };
  
  export default MessageDisplay;

  