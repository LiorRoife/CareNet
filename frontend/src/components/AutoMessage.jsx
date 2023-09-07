


/*export default function (props){

    return(
        <div className="autoMessage">
        <p className="message">{props.message}<br></br></p>
        </div>
        
    )
}*/import React from 'react';

function MessageDisplay (props) {

    return (
       <div className='automaticMessage'>
        <p ><strong>{props.message}</strong></p>  
        </div>
    );
  };
  
  export default MessageDisplay;

  