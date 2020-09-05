import { NextApiRequest, NextApiResponse } from 'next'
import Vehicle from '../../models/Vehicle'
import '../../utils/database'
export default async function getAllVehicles(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'GET') {
        try {
            const vehicles = await Vehicle.find()
            return res.status(200).json(vehicles)
        } catch {
            return res.status(500).json({ message: "ocurred an error" })
        }
    } else {
        return res.status(500).json({ message: "Sorry, we only accept get requests!" })
    }
}