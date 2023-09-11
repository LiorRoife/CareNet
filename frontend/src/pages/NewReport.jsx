import React, { useState, useEffect } from 'react';
import { Card, TextField, Button, List, ListItem, ListItemText,  Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import autoMessages from '../guidingMessages';
import MessageDisplay from '../components/AutoMessage';
import './styles.css';
import saveMessages from '../saveMessagesToServer';

export default function Chat() {
  // Your other state and logic here
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [autoMessageNumber, setAutoMessageNumber] = useState(0);
  const[wasClicked,setWasClicked]=useState(false);


  function setNextAutoMessage() {
    setAutoMessageNumber(autoMessageNumber + 1);
  }

  function handleSendClick() {
    if (currentMessage.trim() !== '') {
      // Only add non-empty messages to the chat
      setMessages([...messages, currentMessage]);
      setCurrentMessage(''); // Clear the input field after sending
      setNextAutoMessage();
    }
  }

  function handleEndOfChat(){
    var chatMessages=[];
    messages.map((message,i) => {
        chatMessages.push(autoMessages[i].message);
        chatMessages.push(message);
     })
     saveMessages(chatMessages);
     return(<div><h1>אל תתן לאף אחד לכבות את הניצוץ שלך!! </h1><br></br><h2 style={{color:'rgb(33, 131, 131)'}}>שים לב שב"מידע נוסף" קיימים כלים נוספים שאולי יוכלו לעזור לך</h2></div>
      
      
     )
  }


  function handleChat(index) {
    return (
      <div className="sendreports" dir="rtl">
        <Typography variant="body2" style={secondaryTextStyle}>
          {autoMessages[2].message}
        </Typography>
        <br></br>
        <p>
          <strong>אם את/ה רוצה לערוך את הדיווח נא תקליד/י בתיבת הטקסט למטה ושלח/י שנית</strong>
        </p>
        <div>
          <Button
            id='sendrepButton'
            className="sendrep"
            variant="contained"
            color="primary"
            style={{
              blockSize: '50px',
              fontSize: '20px',
              backgroundColor: '#218383',
              marginLeft: '20px',
              marginTop: '30px',
            }}
            onClick={() => {    
            setWasClicked(true);
           // handleEndOfChat();
            
            }} >
            שליחת דיווח
          </Button>
        </div>
      </div>
    );
  }

  const primaryTextStyle = {
    color: 'blue',
    fontWeight: 'italic',
    fontSize: '16px', // Adjust the font size as needed
    direction: 'rtl', // Set the text direction to RTL
    textAlign: 'right', // Align text to the right
    wordWrap: 'break-word',
  };

  const secondaryTextStyle = {
    color: '#218383',
    fontStyle: 'bolder',
    fontSize: '18px', // Adjust the font size as needed
    direction: 'rtl', // Set the text direction to RTL
    textAlign: 'right', // Align text to the right
  };

  return (
    <Card
      style={{
        margin: '0px 15px',
        width: '40vw',
        height: '90vh',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ flex: 1, overflowY: 'auto', marginBottom: '20px' }}>
       <label style={{fontSize:'18px'}}><strong>היי, תודה שאזרת את האומץ לפנות. זה לא מובן מאליו!</strong><br></br>
       <strong>אנחנו כאן כדי לשמוע</strong></label>
      <p style={{marginRight:'13px'}} ><Typography style={secondaryTextStyle}>{autoMessages[0].message}</Typography></p>
        <List style={{  flexGrow: 1, marginBottom: '20px' }}>
          {messages.map((message, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography variant="body1" style={primaryTextStyle}>
                      {message} 
                    </Typography>
                    
                  }
                 
                  secondary={
                    index + 1 === 2 ? (
                      handleChat()
                    ) : (
                      <Typography variant="body2" style={secondaryTextStyle}>
                        {autoMessages[index + 1].message}
                      </Typography>
                    )
                  }
                  style={{ fontWeight: 'bolder', color: 'red' }}
                />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
        <div>
          {autoMessageNumber > 2 || wasClicked  ? (
            handleEndOfChat()
          ) :
           <div style={{ position: 'relative', display: 'flex',justifyContent:'space-between', alignItems: 'center', marginLeft:'10px',marginRight:'10px' }}>         
              <Button
                variant="contained"
                color="primary"
                onClick={handleSendClick}
                style={{
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  minWidth: '50px',
                  backgroundColor: '#31b7b7',
                 
                }}
              >
                <SendIcon />
              </Button>
              <TextField
                fullWidth
                variant="outlined"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSendClick();
                }}
                placeholder="Type your message..."
                style={{ flex: '1', paddingRight: '10px', wordWrap: 'break-word', width: '100%', flexDirection: 'column' }}
              />
            </div>}
        </div>
      </div>
    </Card> 
  );
}
