import mongoose from 'mongoose'

const User = new mongoose.Schema({
    name: String
})

export default mongoose.model('User', User)