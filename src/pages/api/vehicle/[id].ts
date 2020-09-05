import { NextApiRequest, NextApiResponse } from 'next'
export default function getVehicleById(req: NextApiRequest, res: NextApiResponse) {
    return res.json({ hello: req.query.id, method: req.method })
}