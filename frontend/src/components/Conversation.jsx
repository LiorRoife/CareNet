import React, { useState } from 'react';
import { Card, Button,Typography,Paper } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

export default function Conversation({value}){

    const[index,setIndex]=useState(0);
    const[conversationStatus,setConversationStatus]=useState("בטיפול");
    const [cardBackgroundColor, setCardBackgroundColor] = useState('white'); // Initial background color


    function handleOnClick(){
        setConversationStatus("טופלה");
        setCardBackgroundColor('lightblue'); // Change the background color

    }
    return(
        <Card className='conver-card' style={{marginRight:'280px',marginLeft:'280px',marginTop:'100px',backgroundColor:cardBackgroundColor}}>
       {value.map((member, index) => (
       <CardContent> <Typography key={index}>{member}</Typography></CardContent>))}
        <CardActions> <Button className="checked-btn" style={{backgroundColor:'lightgrey' ,marginRight:'8px'}}
        onClick={handleOnClick}>
        {conversationStatus}
        </Button></CardActions>      
        </Card>
    )
}