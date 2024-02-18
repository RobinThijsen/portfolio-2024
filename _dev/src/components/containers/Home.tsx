import { TypingContainer } from "../partials/TypingContainer.tsx"
import { img_url } from "../../assets/ts/config.ts"

export const Home = () => {

    return <section className="home" id="home">
        <div className="wrapper wrapper--small">
            <h1>
                    <span>
                        Hey 👋!<br />
                        I'm Robin Thijsen, Full-stack web developer with experience in
                    </span>

                <TypingContainer />
            </h1>
        </div>

        <div className="scroll">
                    <span>
                        scroll down
                    </span>

            <svg>
                <use xlinkHref={ img_url + "sprite.svg#arrow-down"}></use>
            </svg>
        </div>
    </section>
}