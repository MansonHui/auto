const TradingView = require("../main");

// /**
//  * This example tests the user login function
//  */

// if (!process.argv[2]) throw Error('Please specify your username/email');
// if (!process.argv[3]) throw Error('Please specify your password');

// TradingView.loginUser(process.argv[2], process.argv[3], false).then((user) => {
//   console.log('User:', user);
//   console.log('Sessionid:', user.session);
//   console.log('Signature:', user.signature);
// }).catch((err) => {
//   console.error('Login error:', err.message);
// });

// const express = require('express')
// const app = express()

const userLogin = async function (req, res) {
  try {
    let inputUserName = req.body.username;
    let inputPassword = req.body.password;

    if (!inputUserName) throw Error("Please specify your username/email");
    if (!inputPassword) throw Error("Please specify your password");

    await TradingView.loginUser(inputUserName, inputPassword, false)
      .then((user) => {
        console.log("User:", user);
        console.log("Sessionid:", user.session);
        console.log("Signature:", user.signature);
      })
      .catch((err) => {
        console.error("Login error:", err.message);
      });

    console.log("Access to user login API");
  } catch (e) {
    console.log("Error:", e);
  }
};

module.exports = userLogin;
