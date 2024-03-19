const express = require("express");
const app = express();
require("dotenv").config();
const { SERVER_PORT } = require("./config/index");
const router = require('./routes/v1/index');




app.use('/v1', router);


app.listen(SERVER_PORT, () => {
    console.log(`Server is running on: ${SERVER_PORT}`)
})
