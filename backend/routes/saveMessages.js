
const express = require("express");
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Define a route to save messages

router.post('/start/login',(req,res) => {

  var loginData ={
    userName:req.body.uname,
    userPassword: req.body.pass,
  };
  const usersFilePath = path.join('C:','Users', 'maorize1','Desktop','CareNet', 'backend', 'users.json');
  let users=[];
  try{
    const userInfo=fs.readFileSync(usersFilePath,'utf-8');
    users=JSON.parse(userInfo);
  }catch(error){
    console.log("couldnt read previoous users file");
  }
  const isUserExists = users.some((user) => user.userName === loginData.userName && user.userPassword ===loginData.userPassword);
  if(isUserExists){
    res.status(200).json({success:'ההתחברות הצליחה'});
  }else{
    res.status(400).json({ problem :'שם משתמש או סיסמא שגויים' });
  }
})



router.post('/start/sign-up',(req,res)=>{
  var userData={
    userName:req.body.userName,
    userEmail:req.body.userEmail,
    userPassword:req.body.userPassword,
  };
  const usersFilePath = path.join('C:','Users', 'maorize1','Desktop','CareNet', 'backend', 'users.json');
  let users=[];
  try{
    const userInfo=fs.readFileSync(usersFilePath,'utf-8');
    users=JSON.parse(userInfo);
  }catch(error){
    console.log("couldnt read previous users file");
  }
  const isUserExists = users.some((user) => user.userName === userData.userName);
  if(isUserExists){
    res.status(400).json({ problem : 'בית ספר עם שם זהה קיים במערכת ' });
  }else{
    users.push(userData);
    fs.writeFileSync(usersFilePath,JSON.stringify(users,null,2),'utf-8');
     console.log(users);
    res.status(200).json({success:'ההרשמה הצליחה'})
  }
})

router.post('/start/report/newreport', (req, res) => {
    console.log("making post request");
  
  const dataToSave = JSON.parse(JSON.stringify(req.body.messages));
  const fileName=dataToSave[1];
  console.log(fileName);
  const fileNameString=dataToSave[1];
  console.log(fileNameString);

  // Define the file path where you want to save the messages
  const filePath = path.join('C:','Users', 'maorize1','Desktop','CareNet', 'backend','messages',`${fileNameString}.json`);
  let existingConversations=[];

  if(fs.existsSync(filePath)){
    try{
      const fileData = fs.readFileSync(filePath,'utf8');
      existingConversations=JSON.parse(fileData);
      existingConversations.push(dataToSave);
      
      fs.writeFileSync(filePath,JSON.stringify(existingConversations, null, 2), 'utf-8');
      console.log('Data appended and saved successfully.');
      res.status(200).send('Messages saved successfully.');
    }catch(err){
      console.error('Error reading or appending data:', err);
      res.status(500).send('Error reading or appending data: ' + err.message);
    }
  }else{
    existingConversations.push(dataToSave)
    fs.writeFile(filePath,JSON.stringify(existingConversations,null,2),(error)=>{
      if (error) {
        console.error('Error saving messages:', error);
        res.status(500).send('Error saving messages: ' + error.message);
      } else {
        console.log('Messages saved successfully: ' + fileName);
        res.status(200).send('Messages saved successfully.');
      }
    });
  }
})

router.get('/start/history-report/:name',(req,res)=>{
  const name = decodeURIComponent(req.params.name);
  console.log('the name in the path: ',name);
  const filePath =path.join('C:','Users', 'maorize1','Desktop','CareNet', 'backend','messages',`${name}.json`);
  console.log("the file path: ",filePath);
  
  if(fs.existsSync(filePath)){
      try{
          const instituteDataFile = fs.readFileSync(filePath,'utf-8');
          const instituteData = JSON.parse(instituteDataFile);
          console.log('Parsed JSON Data:', instituteData);
          res.send(instituteData);
      }catch(err){
          console.error('Error reading conversations from file:', err);
          res.status(500).send('Error reading conversations from file: ' + err.message);
      }
  }
  else{
    const error = 'File not found'; // Define a new variable for the error message
    console.error('Error opening institute file:', error);
    res.status(500).send('Error opening institute file: ' + error);
  }
})
  /*fs.stat(filePath,(err,stats)=>{
    if(err){
      if(err.code ==='ENOENT'){
        fs.writeFile(filePath,dataToSave, (error) => {
          if (error) {
            console.error('Error saving messages:', error);
            res.status(500).send('Error saving messages'+ err.message);
          } else {
            console.log('Messages saved successfully:'+ dataToSave[1]);
            res.status(200).send('Messages saved successfully.');
          }
        });
      }
      else{
        console.error('Error reading file:', err);
      }
    }
    else{
      let existingConversations=[];
      try{
        const fileData=fs.readFileSync(filePath,'utf-8');
        existingConversations = JSON.parse(fileData);
      }catch(err){
        console.error('Error reading existing data:', err);
      }

      existingConversations.push(dataToSave);
      fs.writeFileSync(filePath,JSON.stringify(existingConversations,null,2),'utf-8',err =>{
        if (err) {
          console.error('Error writing data to file:', err);
        } else {
          console.log('Data appended and saved successfully.');
        }
      });
    }

  });*/
 /* fs.appendFile(filePath,JSON.stringify(dataToSave,null,2), (err) => {
    if (err) {
      console.error('Error saving messages:', err);
      res.status(500).send('Error saving messages'+ err.message);
    } else {
      console.log('Messages saved successfully:'+ dataToSave[1]);
      res.status(200).send('Messages saved successfully.');
    }
  });*/
module.exports = router;
