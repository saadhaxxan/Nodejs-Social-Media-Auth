require("dotenv").config();
module.exports = {
  google: {
    clientID: process.env.YOUR_CLIENTID,
    clientSecret: process.env.YOUR_CLIENT_SECRET,
  },
  session: {
            cookieKey: 'saadhassanisawesomeandcool'
        }
};
