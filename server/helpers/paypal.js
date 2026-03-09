require("dotenv").config();
const paypal = require("paypal-rest-sdk");

paypal.configure({
  // default to sandbox if variable is missing or invalid
  mode: process.env.PAYPAL_MODE === "live" ? "live" : "sandbox",
  client_id: process.env.PAYPAL_CLIENT_ID || "",
  client_secret: process.env.PAYPAL_CLIENT_SECRET || "",
});

module.exports = paypal;
