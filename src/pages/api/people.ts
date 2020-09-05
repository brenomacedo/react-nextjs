import { NextApiRequest, NextApiResponse } from 'next'
import '../../utils/database'
import User from '../../models/User'
export default async function getAllPeople(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "GET") {
        const users = await User.find()
        return res.status(200).json(users)
    } else {
        return res.status(401).json({ message: "we only accept GET methods in this route" })
    }
}