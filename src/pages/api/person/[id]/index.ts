import { NextApiRequest, NextApiResponse } from 'next'
export default function getPersonById(req: NextApiRequest, res: NextApiResponse) {
    return res.json({ hello: req.query.id, method: req.method })
}