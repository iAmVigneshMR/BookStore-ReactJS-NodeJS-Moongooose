const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routesUrls = require('./routes/routes');
const cors = require('cors');

//to connect mongoDB
const localhost = "mongodb://localhost:27017/books";
mongoose.connect(
    localhost,
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
    },
      () => {
        console.log("Database Connected");
    }
)

//middelware
app.use(express.json()); //bodyparser to parse incoming and outgoing requests
app.use(cors())
app.use('/book-api', routesUrls); //appending routes url to /app path

//hosting server
app.listen(5000 ,() => {
    console.log("Server is running");
})