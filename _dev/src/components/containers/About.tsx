import { Word } from "../partials/Word.tsx"
import { FormContainer } from "../partials/FormContainer.tsx"
import { Canvas } from "../partials/Canvas.tsx"

import { Magnetic } from "../Magnetic.tsx"

import { HashLink as Link } from "react-router-hash-link"
import { MutableRefObject, useRef } from "react"
import { useInView, useScroll } from "framer-motion"
import { sitename, img_url } from "../../assets/ts/config.ts"

export const About = () => {
    const aboutContainerRef: MutableRefObject<null> = useRef(null)
    const AboutContainerRef: MutableRefObject<null> = useRef(null)
    const aboutTextRef: MutableRefObject<null> = useRef(null)
    const lineRef: MutableRefObject<null> = useRef(null)

    const isLineInView: boolean = useInView(lineRef)

    const phrasesAbout: string = "I'm very curious and passionate. I'm always up for a challenge, no matter how complex it is ! If you have an idea, a project or would like to represent yourself on the internet, please don't hesitate to contact me."
    const aboutWords: string[] = phrasesAbout.split(" ")

    // const phrasesSkill: string = "I'm experienced in javascript, using several frameworks and libraries such as Nextjs, three.js, Vuejs, gsap, etc. I also develop in PHP, creating REST APIs, working with Laravel..."

    const { scrollYProgress } = useScroll({
        target: AboutContainerRef,
        offset: [ "start .3", "end .3" ]
    })

    return <section ref={ aboutContainerRef } className="about" id="about">
        <div className="wrapper wrapper--small">
            <section ref={ AboutContainerRef } className="info">
                <p ref={ aboutTextRef }>
                    { aboutWords.map((word: string, index: number) => {
                            const start: number = index / aboutWords.length
                            const end: number = start + (1 / aboutWords.length)

                            return <Word key={ index } range={ [start, end] } progress={ scrollYProgress }>
                                { word }
                            </Word>
                        }
                    )}
                </p>

                <div>
                    <span ref={ lineRef } className={ isLineInView ? "line open" : "line" }></span>

                    <Magnetic>
                        <Link className="button button--white" to={"#contact"}>
                            <span>
                                Contact me
                            </span>
                        </Link>
                    </Magnetic>
                </div>
            </section>

            <section className="skills">
                <p>
                    <img src={ img_url + "svg/picto-white.svg" } alt={ sitename } />
                    <span>My skills</span>
                </p>

                <Canvas aboutRef={ aboutContainerRef } />

                <h3>
                    I'm experienced in javascript, using several frameworks and libraries such as Nextjs, three.js, Vuejs, gsap, etc. I also develop in PHP, creating REST APIs, working with Laravel...
                </h3>
            </section>

            <FormContainer />
        </div>
    </section>
}