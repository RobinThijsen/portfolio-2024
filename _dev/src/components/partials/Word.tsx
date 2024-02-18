import { motion, MotionValue, useTransform } from "framer-motion"

export const Word = ({ children, range, progress }: { children: React.ReactNode, range: number[], progress: MotionValue<number> }) => {
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