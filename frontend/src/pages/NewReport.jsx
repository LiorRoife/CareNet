import React, { useState, useEffect } from 'react'
import { Card, TextField, Button, List, ListItem, ListItemText, Divider } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import autoMessages from '../guidingMessages'
import MessageDisplay from '../components/AutoMessage'  
    
    export default function Chat () {
        // Your other state and logic here
        const [messages, setMessages] = useState([]);
        const [currentMessage, setCurrentMessage] = useState('');
        const [autoMessageNumber, setAutoMessageNumber]=useState(0);

        function setNextAutoMessage(){
            setAutoMessageNumber(autoMessageNumber+1);
        }
       
        function handleSendClick() {
            if (currentMessage.trim() !== '') {
                // Only add non-empty messages to the chat
                setMessages([...messages, currentMessage]);
                setCurrentMessage(''); // Clear the input field after sending
                setNextAutoMessage();
            }
        }
            
        return (
            <Card style={{ margin:'0px 15px', width: '25vw', height: '90vh', borderRadius: '8px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, overflowY: 'auto', marginBottom: '20px' }}>    

                <List style={{ overflowY: 'auto', flexGrow: 1, marginBottom: '20px' }}>
                {messages.map((message, index) => (
                    <React.Fragment key={index}>
                    {index <4 && (
                     <ListItem>
                       <ListItemText primary={autoMessages[autoMessageNumber-1].message} />
                    </ListItem>
                     )}
                    <ListItem>
                      <ListItemText primary={message} />
                    </ListItem>
                    </React.Fragment>
                ))}
            </List>
            <p><strong>{autoMessageNumber<4 && autoMessages[autoMessageNumber].message}</strong></p>

            <div style={{ display: 'flex', alignItems: 'center', padding: '10px' , marginTop:'auto'}}>
                <TextField
                    fullWidth
                    variant="outlined"
                    value={currentMessage}
                    onChange={e => setCurrentMessage(e.target.value)}   
                    onKeyDown={e => {
                        if (e.key === 'Enter') handleSendClick();
                    }}             
                    placeholder="Type your message..."
                    style={{ flex: 1, paddingRight: '10px' }} // Adjust paddingRight to account for the button width
                />

                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSendClick}
                    style={{
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        minWidth: '50px',
                        padding: 0
                    }}
                    >

                    <SendIcon />
                   
                </Button>
            </div>
           
            </div>
            </Card>
        );
    }
    
 
    

   /*return (
        
        <Card style={{ margin:'0px 15px', width: '25vw', height: '90vh', borderRadius: '8px', display: 'flex', flexDirection: 'column' }}>
         <div className="Auto_Message">
      <MessageDisplay autoMessages={autoMessages} />
    </div>
            <List style={{ overflowY: 'auto', flexGrow: 1, marginBottom: '20px' }}>
                {messages.map((message, index) => (
                    <React.Fragment key={index}>
                        <ListItem>
                            <ListItemText primary={message} />
                        </ListItem>
                        {index !== messages.length - 1 && <Divider />}
                    </React.Fragment>
                ))}
            </List>

            <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    value={currentMessage}
                    onChange={e => setCurrentMessage(e.target.value)}
                    
                    placeholder="Type your message..."
                    style={{ flex: 1, paddingRight: '10px' }} // Adjust paddingRight to account for the button width
                />
                <Button
                    variant="contained"
                    color="primary"
                    
                    style={{
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        minWidth: '50px',
                        padding: 0
                    }}
                >
                    <SendIcon />
                </Button>
            </div>
        </Card>
        

    );
}*/

    
