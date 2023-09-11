import React, {useState,useEffect} from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import axios from 'axios';
import { List, Card, Button,Grid,Box } from '@mui/material';
import Conversation from '../components/Conversation';


export default function HistoryReport(props){
    
const{name}=useParams();

//const decodedName = decodeURIComponent(name);
//const {institute} = useParams();
const [data,setData]=useState([]);
const [wasclicked,setWasClicked]=useState(false);


useEffect(()=>{
    axios
    .get(`/start/history-report/${name}`)
    .then((response)=>{
        setData(response.data);
    })
    .catch((error)=>{
        console.error('Error fetching data: ', error);
        console.log({name});
    });
},[name]);

console.log('data: ',{data});
return(
    <div>
    <div>
    <label style={{fontSize:'60px',fontFamily:'sans-serif'}}><strong>פניות</strong></label>
    <h3>בסיום טיפול בפנייה ניתן ללחוץ על הכפתור "בטיפול" כדי לסמן שהפנייה טופלה</h3>
    </div>
    <List>
    {data.map((item,index)=>(      
        <Conversation key={index} value={item}/>))}     
    </List>   
    </div>   
    
)}
