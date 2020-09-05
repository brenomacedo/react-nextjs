import { NextApiRequest, NextApiResponse } from 'next'
import '../../../utils/database'
import User from '../../../models/User'

export default async function createPerson(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'POST') {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }) as unknown as any

        user.password = undefined

        return res.status(201).json(user)
    } else {
        return res.status(500).json({ message: 'we only accept post methods in this route!' })
    }
}