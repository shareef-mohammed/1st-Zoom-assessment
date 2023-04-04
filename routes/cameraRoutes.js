const express = require('express');
const { getCameras, setCamera, updateCamera, deleteCamera } = require('../controllers/cameraContoller');
const router = express.Router();

router.route('/cameras')
    .get(getCameras)
    .post(setCamera)
router.route('/cameras/:id')
    .put(updateCamera)
    .delete(deleteCamera)

module.exports = router