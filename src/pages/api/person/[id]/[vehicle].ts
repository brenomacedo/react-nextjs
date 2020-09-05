import { NextApiRequest, NextApiResponse } from 'next'

export default function getAllVehiclesByPersonId(req: NextApiRequest, res: NextApiResponse) {
    return res.json({ hello: req.query.id, vehicle: req.query.vehicle, method: req.method })
}