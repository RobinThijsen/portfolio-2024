import { sitename } from "../assets/ts/config.ts"

export const Head = () => {

    return <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>{ sitename }</title>
    </head>
}