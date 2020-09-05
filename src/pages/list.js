import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function List({ ownerlist }) {

    return (
        <div>
            {ownerlist.map(owner => (
                <div key={owner.ownerName}>
                    <Link as={`/${owner.vehicle}/${owner.ownerName}`} href="/[vehicle]/[person]">
                        <a>Navigate to {owner.ownerName}'s {owner.vehicle}</a>
                    </Link>
                </div>
            ))}
        </div>
    )
}

List.getInitialProps = async (ctx) => {
    // const response = await fetch('http://localhost:4001/vehicles')
    // const ownerlist = response.json()
    return { ownerlist: [{ vehicle: 'car', ownerName: 'breno' }] }
}