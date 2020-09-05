import mongoose from 'mongoose'

const Vehicle = new mongoose.Schema({
    name: String,
    brand: String,
    model: String,
    userId: Number
})

export default mongoose.model('Vehicle', Vehicle)