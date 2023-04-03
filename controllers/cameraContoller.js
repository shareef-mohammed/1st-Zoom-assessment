const CameraData = require('../models/cameraModel');
const CameraNetworkData = require('../models/cameraNetworkModel')

module.exports.getCameras = async(req, res) => {
    try {
        const cameras = await CameraData.find();
        res.status(200).json(cameras);
    } catch (err) {
        res.status(500).send('Internal Server Error.');
    }
}

module.exports.setCamera = async (req, res) => {
    try {
        const { name, description, url } = req.body;
        if(!name || !description || !url) {
            return res.status(401).send('Invalid input');
        }
        const camera = new CameraData ({
            name, description, url
        });
        await camera.save();
        res.status(200).json(camera);
    } catch (err) {
        res.status(500).send('Internal Server Error.')
    }
}

module.exports.updateCamera = async(req, res) => {
    try {
        const { id } = req.params;
        const { name, description, url } = req.body;
        if(!name || !description || !url) {
            return res.status(401).send('Invalid input');
        }
        const camera = await CameraData.findByIdAndUpdate(id, {
            name, description, url
        })
        res.status(200).json(camera);
    } catch (err) {
        res.status(500).send('Internal Server Error.')
    }
}

module.exports.deleteCamera = async (req, res) => {
    try {
        const { id } = req.params;
        await CameraData.findByIdAndDelete(id);
        await CameraNetworkData.updateMany({}, {$pull: {cameras: id}})
        res.status(200).send('Camera Deleted Successfully.')
    } catch (err) {
        res.status(500).send('Internal Server Error.')
    }
}