const express = require('express');
const { getNetworks, setCameraNetwork, updateCameraNetwork, deleteCameraNetwork } = require('../controllers/cameraNetworkController');
const router = express.Router();

router.route('/cameraNetworks')
    .get(getNetworks)
    .post(setCameraNetwork)

router.route('/cameraNetworks/:id')
    .put(updateCameraNetwork)
    .delete(deleteCameraNetwork)

module.exports = router