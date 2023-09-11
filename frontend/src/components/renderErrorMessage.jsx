import React from 'react';

// Function to generate JSX code for error message
function RenderErrorMessage({name, errorMessages}) {
  return name === errorMessages.name && <div className="error">{errorMessages.message}</div>;
}

export default RenderErrorMessage;
