import { useRef } from "react"

import data from "../../assets/json/skills.json"
import { img_url } from "../../assets/ts/config.ts"

import { motion, MotionValue, useScroll, useTransform } from "framer-motion"

// @ts-ignore
export const Canvas = ({ aboutRef }) => {
    const { scrollYProgress } = useScroll({
        target: aboutRef,
        offset: [ "start .45", "end .85" ]
    })
    const skillsRef = useRef(null)

    const languagesRef = useRef(null)
    const frameworksRef = useRef(null)
    const cmsRef = useRef(null)
    const toolsRef = useRef(null)

    const yTop: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [200, -200])
    const yBottom: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [-200, 200])

    return <div ref={ skillsRef } className="skillsContainer">
        <div>
            <motion.ul transition={{ ease: "easeOut", duration: 2000 }} style={{ y: yTop }} ref={ languagesRef } className="languages">
                { data.languages.map((language,index: number) => (
                    <li key={ index } style={{
                        backgroundColor: language.backgroundColor,
                        fill: language.fillColor
                    }}>
                        <svg>
                            <use xlinkHref={ img_url + "sprite.svg#" + language.path }></use>
                        </svg>
                    </li>
                )) }
            </motion.ul>
            <motion.ul transition={{ ease: "easeOut", duration: 0 }} style={{ y: yBottom }} ref={ frameworksRef } className="frameworks">
                { data.frameworks.map((framework,index: number) => (
                    <li key={ index } style={{
                        backgroundColor: framework.backgroundColor,
                        fill: framework.fillColor
                    }}>
                        <svg>
                            <use xlinkHref={ img_url + "sprite.svg#" + framework.path }></use>
                        </svg>
                    </li>
                )) }
            </motion.ul>
            <motion.ul transition={{ ease: "easeOut", duration: 2000 }} style={{ y: yTop }} ref={ cmsRef } className="cms">
                { data.others.map((cms,index: number) => (
                    <li key={ index } style={{
                        backgroundColor: cms.backgroundColor,
                        fill: cms.fillColor
                    }}>
                        <svg>
                            <use xlinkHref={ img_url + "sprite.svg#" + cms.path }></use>
                        </svg>
                    </li>
                )) }
            </motion.ul>
            <motion.ul transition={{ ease: "easeOut", duration: 2000 }} style={{ y: yBottom }} ref={ toolsRef } className="tools">
                { data.tools.map((tool,index: number) => (
                    <li key={ index } style={{
                        backgroundColor: tool.backgroundColor,
                        fill: tool.fillColor
                    }}>
                        <svg>
                            <use xlinkHref={ img_url + "sprite.svg#" + tool.path }></use>
                        </svg>
                    </li>
                )) }
            </motion.ul>
        </div>
    </div>
}