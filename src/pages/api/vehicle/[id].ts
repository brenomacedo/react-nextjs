import { NextApiRequest, NextApiResponse } from 'next'
import Vehicle from '../../../models/Vehicle'
import '../../../utils/database'
export default async function getVehicleById(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "GET") {
        try {
            const vehicle = await Vehicle.findById(req.query.id)
            return res.status(200).json(vehicle)
        } catch {
            return res.status(401).json({ message: "user not found" })
        }

    } else {
        return res.status(500).json({ message: "we only accept GET methods in this routes!" })
    }
}