require('dotenv').config();
const express = require('express');
const connectdb = require('./config/dbConfig');
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(morgan('dev'));
connectdb();

const cameraRouter = require('./routes/cameraRoutes');
const cameraNetworkRouter = require('./routes/cameraNetworkRoutes');

app.use('/', cameraRouter);
app.use('/', cameraNetworkRouter);

app.listen(process.env.PORT, () => {
    console.log('Server Started.')
})