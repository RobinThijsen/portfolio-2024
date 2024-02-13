import { sitename } from "../../assets/ts/config.ts"

import { Magnetic } from "../Magnetic.tsx"

export const FixedBlock = ({ subtitle, content }: { subtitle: string, content: string }) => {

    return <article>
        <div>
            <img src={ "/images/svg/picto-black.svg" } alt={ sitename } width={ 100 } height={ 100 } />
            <p>
                { subtitle }
            </p>
        </div>

        <p>
            { content }
        </p>

        <div>
            <hr />
            <Magnetic>
                <a href="https://github.com/RobinThijsen" title="See more projects on my GitHub" target="_blank" className="button button--black">
                    <span>
                        See more projects
                    </span>
                </a>
            </Magnetic>
        </div>
    </article>
}