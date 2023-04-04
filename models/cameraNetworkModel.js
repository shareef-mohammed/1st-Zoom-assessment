const mongoose = require('mongoose');

const cameraNetworkSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    cameras: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Camera'
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model('cameraNetwork', cameraNetworkSchema);