import { NextApiRequest, NextApiResponse } from "next"
import bcrypt from 'bcrypt'
import User from '../../models/User'
import jwt from 'jsonwebtoken'
import { key } from '../../../key.json'
import '../../utils/database'
export default async function login (req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'POST') {
        const user = await User.findOne({
            email: req.body.email
        }) as any

        if(!user) {
            return res.status(401).json({ message: "user not found" })
        }

        if(!await bcrypt.compare(req.body.password, user.email)) {
            return res.status(401).json({ message: "incorrect password" })
        }

        const token = jwt.sign({ id: user._id }, key, { expiresIn: 86400 })

        return res.status(200).json({ user, token })
    } else {
        return res.status(500).json({ message: "ony get method please!" })
    }
}