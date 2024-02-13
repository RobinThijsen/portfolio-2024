export const slideUp = {
    initial: {
        y: "0"
    },
    exit: {
        y: "-100vh",
        transition: { duration: .8, ease: [.76, 0, .24, 1], delay: .2 }
    }
}

export const slideUpText= {
    initial: {
        y: "100%"
    },
    open: (index: number) => ({
        y: 0,
        transition: { duration: 1, delay: .05 * index, ease: [.76, 0, .24, 1] }
    })
}