import { FixedBlock } from "../partials/FixedBlock.tsx"
import data from "../../assets/json/works.json"
import { WorkItem } from "../partials/WorkItem.tsx"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MutableRefObject, useEffect, useRef } from "react"

import { workAnimation } from "../../assets/ts/WorkAnimation.ts"

export const Works = () => {
    gsap.registerPlugin(ScrollTrigger)
    const workContainerRef: MutableRefObject<null> = useRef(null)
    const workWrapperRef: MutableRefObject<null> = useRef(null)

    useEffect(() => {

        setTimeout(() => {
            workAnimation(workContainerRef.current, workWrapperRef.current)
        }, 200)
    }, [])

    return <section className="works" id="works">
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
                            }, index: number) => <WorkItem work={ work } key={ index } isOA={ true } />) }
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
                            }, index: number) => <WorkItem work={ work } key={ index } isOA={ true } />) }
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
}