require('dotenv').config();
const express = require('express');
const connectdb = require('./config/dbConfig');

const app = express();
app.use(express.json());

connectdb();

app.listen(process.env.PORT, () => {
    console.log('Server Started.')
})