import { NextApiRequest, NextApiResponse } from 'next'
export default function getAllVehicles(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'GET') {
        res.status(500).json({ message: "Sorry, we only accept get requests!" })
    }
    return res.json({ hello: 'world', method: req.method })
}