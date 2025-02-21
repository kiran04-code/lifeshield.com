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
  numbers: phoneNumber,
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
