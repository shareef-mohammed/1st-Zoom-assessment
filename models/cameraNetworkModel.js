const mongoose = require('mongoose');

const cameraNetworkSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
    },
    description: {
        name: {
            type: String,
            required: true,
        },
        cameras: [
            {
                type: mongoose.Schema.Types.ObjectId
            }
        ]
    }
}, { timestamps: true });

module.exports = mongoose.model('cameraNetwork', cameraNetworkSchema);