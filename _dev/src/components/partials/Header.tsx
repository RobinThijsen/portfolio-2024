import { root_url, sitename } from "../../assets/ts/config.ts"

import { NavContainer } from "./NavContainer.tsx"

export const Header = () => {

    return <header className="header">
        <div>
            <img src={ root_url + "images/svg/logo-white.svg" } alt={ sitename } className="logo" />
        </div>

        <NavContainer />
    </header>
}