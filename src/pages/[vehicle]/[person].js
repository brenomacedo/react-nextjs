import { useRouter } from 'next/router'
import Link from 'next/link'

export default function People({ list }) {
    const router = useRouter()

    return (<div>
        <h2>{router.query.person} = {router.query.vehicle}</h2>
        {list.map(p => (
            <div key={p.name}>
                <Link as={`/${p.v}/${p.name}`} href="/[vehicle]/[person]">
                    <a>navigate to {p.name}'s {p.v}</a>
                </Link>
            </div>
        ))}
    </div>)
}

People.getInitialProps = async (ctx) => {
    console.log(ctx.req)
    return {
        list: [
            { v: 'airplane', name: 'Breno' },
            { v: 'bike', name: 'John' },
            { v: 'car', name: 'Mike' },
            { v: ctx.query.vehicle, name: ctx.query.person }
        ]
    }
}