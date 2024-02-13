export const opacity = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        transition: { duration: .2, delay: .2 }
    }
}

export const blinking = {
    blinking: {
        opacity: [0, 0, 1, 1],
        transition: {
            duration: 1,
            repeat: Infinity,
            repeatDelay: 0,
            ease: "linear",
            times: [0, 0.5, 0.5, 1]
        }
    }
}
