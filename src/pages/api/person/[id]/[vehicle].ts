import { NextApiRequest, NextApiResponse } from 'next'
import Vehicle from '../../../../models/Vehicle'
import '../../../../utils/database'
export default async function getAllVehiclesByPersonId(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "GET") {
        try {
            const vehicles = await Vehicle.find({
                userId: req.body.id
            })

            return res.status(200).json(vehicles)
        } catch {
            return res.status(500).json({ message: "Invalid arguments" })
        }
    } else {
        return res.status(500).json({ message: "we only accept GET methods in this route" })
    }
}