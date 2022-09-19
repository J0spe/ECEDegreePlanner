
const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', routesHandler);

var cors = require("cors");
// ALLOWING ACCESS from frontend
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions)); // Use this after the variable declaration



const PORT = 4000; // backend routing port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

