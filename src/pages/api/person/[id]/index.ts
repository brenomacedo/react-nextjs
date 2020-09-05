import { NextApiRequest, NextApiResponse } from 'next'
import '../../../../utils/database'
import User from '../../../../models/User'
export default async function getPersonById(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "GET") {
        try {
            const user = await User.findById(req.query.id)
            return res.status(200).json(user)
        } catch {
            return res.status(401).json({ message: "user not found" })
        }
    } else {
        return res.status(500).json({ message: "we only accept GET methods in this route!" })
    }
}