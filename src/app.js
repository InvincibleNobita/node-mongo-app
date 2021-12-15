const express= require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static(__dirname + '/views'));
// app.set('view engine', 'ejs');

const connect = mongoose.connect(
    process.env.MONGO_URI,
    {},
    (err) => {
        if (err) console.log(err);
        else console.log("DB connection successful");
    }
);

app.use("/", require("./routes/main"));

app.listen(PORT, (err) => {
    connect
    if(err) console.log(err);
    else console.log("server running")
})