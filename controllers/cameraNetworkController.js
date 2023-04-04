const CameraNetworkData = require('../models/cameraNetworkModel');
const cameraData = require('../models/cameraModel');

module.exports.getNetworks = async (req, res) => {
    try {
        const cameraNetworks = await CameraNetworkData.find().populate('cameras');
        res.status(200).json(cameraNetworks);
    } catch (err) {
        res.status(500).send('Internal Server Error.');
    }
}

module.exports.setCameraNetwork = async (req, res) => {
    try {
        const { name, description, cameras } = req.body;
        if(!name || !description || !cameras) {
            return res.status(400).send('Invalid input');
        }
        let cameraNetwork;
        const exist = await CameraNetworkData.findOne({name});
        if(exist) {            
            if(exist.cameras.includes(cameras)) {
                return res.status(409).send('Camera already exist.')
            }
            exist.description = description;
            exist.cameras = exist.cameras.concat(cameras);
            cameraNetwork = await exist.save(); 
        } else {
            cameraNetwork = new CameraNetworkData ({
                name, description, cameras
            });
            await cameraNetwork.save();
        }        
        res.status(200).json(cameraNetwork);
    } catch (err) {
        res.status(500).send('Internal Server Error.');
    }
}

module.exports.updateCameraNetwork = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, cameras } = req.body;
        if(!name || !description || !cameras) {
            return res.status(403).send('Invalid input');
        }
        const cameraNetwork = await CameraNetworkData.findByIdAndUpdate(id, {
            name, description, cameras
        });
        res.status(200).send(cameraNetwork);
    } catch (err) {
        res.status(500).send('Internal Server Error.');
    }
}

module.exports.deleteCameraNetwork = async (req, res) => {
    try {
        const { id } = req.params;
        await CameraNetworkData.findByIdAndDelete(id);
        res.status(200).send('Camera Network Deleted Successfully.')
    } catch (err) {
        res.status(500).send('Internal Server Error.');
    }
}