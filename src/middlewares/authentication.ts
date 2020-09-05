import { NextApiHandler, NextApiResponse, NextApiRequest } from 'next'
import jwt from 'jsonwebtoken'
import { key } from '../../key.json'
export const authentication = (fn: NextApiHandler) => async (
    req: NextApiRequest, res: NextApiResponse
) => {
    jwt.verify(String(req.headers.authorization), key, (err, decoded) => {
        if(err) {
            return res.status(401).json({ message: "unauthorized" })
        }

        return res.status(401).json({ decoded })
    })
}