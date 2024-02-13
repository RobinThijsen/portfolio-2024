import { motion } from "framer-motion"
import { slideUp ,slideUpText } from "../assets/ts/PreloaderAnimation.ts"
import { useEffect, useState } from "react"

export const Preloader = () => {
    const [dimension, setDimension] = useState({ width: 0, height: 0 })
    const phrase: string = "Welcome to my portfolio !"

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight })
    }, []);

    const initialPath = `M0 0 L${ dimension.width } 0  L${ dimension.width } ${ dimension.height } Q${ dimension.width/2 } ${ dimension.height + 300 } 0 ${ dimension.height } L0 0`
    const targetPath = `M0 0 L${ dimension.width } 0  L${ dimension.width } ${ dimension.height } Q${ dimension.width/2 } ${ dimension.height } 0 ${ dimension.height } L0 0`

    const curve = {
        initial: {
            d: initialPath
        },
        exit: {
            d: targetPath,
            transition: { duration: .8, ease: [.76, 0, .24, 1 ], delay: .2 }
        }
    }

    return <motion.div variants={ slideUp } className="preloader" initial="intial" exit="exit">
        {dimension.height > 0 && <>
            <p className="title">
                {phrase.split(" ").map((word: string, index: number) => <span key={ index } className="mask">
                    <motion.span custom={ index } variants={ slideUpText } initial="initial" animate="enter">
                        { word }
                    </motion.span>
                </span>)}
            </p>
            <svg>
                <motion.path variants={ curve } initial="initial" exit="exit"></motion.path>
            </svg>
        </>}
    </motion.div>
}