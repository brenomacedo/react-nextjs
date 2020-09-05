import Link from 'next/link'
import { AppContext } from 'next/app'
import { useEffect, useState, FC } from 'react'
import { NextPageContext } from 'next'

interface Owner {
    ownerName: string
    vehicle: string
}

interface IList {
    ownerlist: Owner[]
}

export default function List ({ ownerlist }: IList) {

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

List.getInitialProps = async (ctx: NextPageContext) => {
    // const response = await fetch('http://localhost:4001/vehicles')
    // const ownerlist = response.json()
    return { ownerlist: [{ vehicle: 'car', ownerName: 'breno' }] }
}