import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Breno() {
    const router = useRouter()

    const people = [
        { v: 'airplane', name: 'Breno' },
        { v: 'bike', name: 'John' },
        { v: 'car', name: 'Mike' }
    ]

    return (<div>
        <h2>{router.query.person} = {router.query.vehicle}</h2>
        {people.map(p => (
            <div key={p.name}>
                <Link as={`/${p.v}/${p.name}`} href="/[vehicle]/[person]">
                    <a>navigate to {p.name}'s {p.v}</a>
                </Link>
            </div>
        ))}
    </div>)
}