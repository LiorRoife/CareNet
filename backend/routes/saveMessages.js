
const express = require("express");
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Define a route to save messages

router.post('/start/report/newreport', (req, res) => {
    console.log("making post request");
  const dataToSave = JSON.stringify(req.body.messages);


  // Define the file path where you want to save the messages
  const filePath = path.join('C:','Users', 'maorize1','Desktop','CareNet', 'backend','messages', 'newReoprt.txt');

  fs.writeFile(filePath, dataToSave, (err) => {
    if (err) {
      console.error('Error saving messages:', err);
      res.status(500).send('Error saving messages'+ err.message);
    } else {
      console.log('Messages saved successfully.');
      res.status(200).send('Messages saved successfully.');
    }
  });
});
module.exports = router;
