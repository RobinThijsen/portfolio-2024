import { MutableRefObject, useRef, useEffect } from "react"
import { Link } from "react-router-dom"

import { Header } from "./components/partials/Header.tsx"
import { Footer } from "./components/partials/Footer.tsx"
import { FixedBlock } from "./components/partials/FixedBlock.tsx"
import { TypingContainer } from "./components/partials/TypingContainer.tsx"
import { WorkItem } from "./components/partials/WorkItem.tsx"
import { Magnetic } from "./components/Magnetic.tsx"
import { FormContainer } from "./components/partials/FormContainer.tsx"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionValue, motion, useInView, useScroll, useTransform } from "framer-motion"

import { root_url } from "./assets/ts/config.ts"
import data from "./assets/json/works.json"
import { workAnimation } from "./assets/ts/WorkAnimation.ts"

export const App = () => {
    gsap.registerPlugin(ScrollTrigger)
    const workContainerRef: MutableRefObject<null> = useRef(null)
    const workWrapperRef: MutableRefObject<null> = useRef(null)
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

    useEffect(() => {

        setTimeout(() => {
            workAnimation(workContainerRef.current, workWrapperRef.current)
        }, 200)
    }, [])

    return <body>
        <Header />
        <main>
            <section className="home">
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
                        <use xlinkHref={ root_url + "images/sprite.svg#arrow-down"}></use>
                    </svg>
                </div>
            </section>

            <section className="works">
                <a id="works" className="encrage"></a>
                <div className="container" ref={ workContainerRef }>
                    <div className="wrapper wrapper--small" ref={ workWrapperRef }>
                        <section className="internship">
                            <div className="fixedContainer">
                                <FixedBlock
                                    subtitle="internship projects"
                                    content="First and foremost, your site must look like you" />
                            </div>

                            <ul>
                                { data.internship.map((
                                    work: {
                                        name: string,
                                        description: string,
                                        src: string,
                                        url: string,
                                        techno: string[]
                                    }, index: number) => <WorkItem work={ work } index={ index } isOA={ true } />) }
                            </ul>
                        </section>

                        <section className="personal">
                            <ul>
                                { data.personal.map((
                                    work: {
                                        name: string,
                                        description: string,
                                        src: string,
                                        url: string,
                                        techno: string[]
                                    }, index: number) => <WorkItem work={ work } index={ index } isOA={ true } />) }
                            </ul>

                            <div className="fixedContainer">
                                <FixedBlock
                                    subtitle="personnal projects"
                                    content="Creativity must always be a priority" />
                            </div>
                        </section>
                    </div>
                </div>
            </section>

            <section className="about">
                <a id="about" className="encrage"></a>
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

                    </section>

                    <FormContainer />
                </div>
            </section>
        </main>
        <Footer />
    </body>
}

const Word = ({ children, range, progress }: { children: React.ReactNode, range: number[], progress: MotionValue<number> }) => {
    const opacity: MotionValue<number> = useTransform(progress, range, [0, 1])

    return <span>
        <span className="shadow">
            { children }
        </span>

        <motion.span style={{ opacity }}>
            { children }
        </motion.span>
    </span>
}