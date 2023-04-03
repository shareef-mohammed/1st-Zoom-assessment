const mongoose = require('mongoose')

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONG_URI)
        .then(() => {
            console.log('Database Connected.')
        })
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectdb