const express = require('express');
const { getCameras } = require('../controllers/cameraContoller');
const router = express();

router.get('/cameras', getCameras);
