const axios = require("axios");
// const kk = document.getElementById("registerMobile").value;
// console.log(kk)
const apiKey = "Xz3IefYDUcy1Jm84NwK5s6SEGTVqhguW0i9oAb72LRZPkpCjOFQrs0uq9DMSCy7R25ctzVJbHjpI1hZf";
const phoneNumber ='8767532485'; 
const message = "Welcome to LifeShield.com! Your registration was successful, and you're ready to explore our vaccination services.";

// Create the SMS data
const smsData = {
  sender_id: "LIFESHIELD",
  language: "english",
  route: "q",
  numbers: phoneNumber,
  message: message
};

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
