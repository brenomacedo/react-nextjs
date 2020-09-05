import { useRouter } from 'next/router'
import { AppContext } from 'next/app'
import Link from 'next/link'
import { NextPageContext } from 'next'

interface IList {
    list: {
        v: string
        name: string
    }[]
}

interface MyNextPage extends NextPageContext {
    query: {
        person: string
        vehicle: string
    }
}

export default function People({ list }: IList) {
    const router = useRouter()

    return (<div>
        <h2>{router.query.person} = {router.query.vehicle}</h2>
        {list.map((p, index) => (
            <div key={index}>
                <Link as={`/${p.v}/${p.name}`} href="/[vehicle]/[person]">
                    <a>navigate to {p.name}'s {p.v}</a>
                </Link>
            </div>
        ))}
    </div>)
}

People.getInitialProps = async (ctx: MyNextPage) => {
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