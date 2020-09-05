import { NextApiRequest, NextApiResponse } from 'next'
import Vehicle from '../../../models/Vehicle'
import '../../../utils/database'

export default async function createVehicle(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "POST") {
        try {
            const vehicle = await Vehicle.create({
                name: req.body.name,
                brand: req.body.brand,
                model: req.body.model
            })

            return res.status(201).json(vehicle)
        } catch {
            return res.status(401).json({ message: "invalid arguments" })
        }
    } else {
        res.status(500).json({ message: "we only accept POST methods in this route!" })
    }
}