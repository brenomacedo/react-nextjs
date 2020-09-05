import mongoose, { Document } from 'mongoose'
import bcrypt from 'bcrypt'

const User = new mongoose.Schema({
    name: String,
    email: String,
    password: { type: String, select: false }
})

User.pre('save', async function(next) {
    const self = this as any
    self.password = await bcrypt.hash(self.password, 10)

    next()
})

export default mongoose.model('User', User)