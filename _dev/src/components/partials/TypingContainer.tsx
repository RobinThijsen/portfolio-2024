import { animate, motion, MotionValue, useMotionValue, useTransform } from "framer-motion"
import { useEffect } from "react"

import { blinking } from "../../assets/ts/AboutAnimation.ts"

export const TypingContainer = () => {
    const textIndex = useMotionValue(0)
    const texts = [
        "React",
        "Scss",
        "Nextjs",
        "Laravel",
        "CMS"
    ]

    const baseText: MotionValue<string> = useTransform(textIndex,(latest: number) => texts[latest] || "")
    const count: MotionValue<number> = useMotionValue(0)
    const rounded: MotionValue<number> = useTransform(count, (latest: number) => Math.round(latest))
    const displayText: MotionValue<string> = useTransform(rounded, (latest: number) =>
        baseText.get().slice(0, latest)
    )
    const updatedThisRound: MotionValue<boolean> = useMotionValue(true)

    useEffect(() => {
        animate(count, 60, {
            type: "tween",
            duration: 3,
            ease: "easeIn",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: .5,
            onUpdate(latest) {
                if (updatedThisRound.get() === true && latest > 0) {
                    updatedThisRound.set(false);
                } else if (updatedThisRound.get() === false && latest === 0) {
                    if (textIndex.get() === texts.length - 1) {
                        textIndex.set(0);
                    } else {
                        textIndex.set(textIndex.get() + 1);
                    }
                    updatedThisRound.set(true);
                }
            }
        })
    }, []);

    return <div className="typingContainer">
        <motion.span>
            { displayText }
        </motion.span>

        <motion.div variants={ blinking } animate="blinking"></motion.div>
    </div>
}