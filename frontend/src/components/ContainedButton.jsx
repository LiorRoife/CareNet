import React from 'react';
import Button from '@mui/material/Button';


const ContainedButton = (props) => {
  
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      //onClick={handleButtonClick}
    >
      {props.data}
    </Button>
  );
};

export default ContainedButton;
