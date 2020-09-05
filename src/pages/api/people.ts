import { NextApiRequest, NextApiResponse } from 'next'

export default function getAllPeople(req: NextApiRequest, res: NextApiResponse) {
    return res.json([
        { name: 'Breno' },
        { name: 'John' }
    ])
}