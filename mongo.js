const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3001;
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/loginsyt.html');
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Aseap', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => { 
  console.error('Error connecting to MongoDB', err);
});
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  MobileNumber: Number,
  Age: Number
});

const User = mongoose.model('User', userSchema);

app.post('/submit', (req, res) => {
  const user = new User({ 
    username: req.body.username, 
    password: req.body.password,
    MobileNumber: req.body.MobileNumber,
    Age: req.body.Age
  });
  
  user.save().then(() => {
    console.log('User saved to database');
    console.log(user)
    const num = user.MobileNumber;
    const age = user.Age;
    console.log(num);
    console.log(age);
   const axios = require("axios");
   
   const apiKey = "SqTcMgA3BGuF4dJZ97ra6E1CUL8YwXRtkzQKN2lo0ivhxDWnVHvbc7wRVgnU6AtEXH9s2lNQkp4ZLmWI";
   function getAgeMessage(age) {
       let message = `Your registration was successful.`;
     
       // Custom messages based on age groups
       if (age >= 1 && age <= 5) {
         message += ` Since you're ${age} years old, you're in the early childhood stage. Make sure to follow the vaccination schedule.`;
       } else if (age >= 6 && age <= 10) {
         message += ` Since you're ${age} years old, you're a child. It's important to get your childhood vaccines like MMR and DTP.`;
       } else if (age >= 11 && age <= 16) {
         message += ` Since you're ${age} years old, you're a teenager. Don't forget to get your HPV and flu vaccines.`;
       } else {
         message += ` Since you're ${age} years old, please consult your doctor for any age-specific vaccine recommendations.`;
       }
     
       return message;
     }
     
   // Create the SMS data
   const smsData = {
     sender_id: "FSTSMS",
     language: "english",
     route: "q",
     numbers: num,
     message: getAgeMessage(age)
   };
   
   // Send the SMS
   axios
     .post("https://www.fast2sms.com/dev/bulkV2", smsData, {
       headers: {
         Authorization: apiKey,
       },
     })
     .then(response => {
       console.log("SMS sent successfully:", response.data);
     })
     .catch((error) => {
       console.error("Error sending SMS:", error);
     });
   
    res.redirect('/');
  }).catch((err) => {
    console.error(err);
  });
});

app.listen(port, async() => {
  console.log(`Server is running on port ${port}`);
});

