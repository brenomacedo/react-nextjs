export default function config(props) {
    return (
        <html>
            <head>
                <title>{props.title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0" />
            </head>
            <body>
                {props.children}
            </body>
        </html>
    )
}