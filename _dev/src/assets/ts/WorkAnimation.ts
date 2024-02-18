import VanillaTilt from "vanilla-tilt"
import { gsap } from "gsap"

export const workAnimation = (workContainerRef: gsap.TweenTarget, workWrapperRef: gsap.TweenTarget) => {
    // @ts-ignore
    VanillaTilt.init(document.querySelectorAll(".card-works"), {
        speed: 400,
        glare: false,
        max: 5
    })
    gsap.set(workContainerRef, {
        y: 200,
    })
    gsap.set(workWrapperRef, {
        opacity: 0,
    })

    gsap.to(workContainerRef, {
        y: 0,
        scrollTrigger: {
            trigger: "section.works",
            scrub: true,
            start: "top 80%",
            end: "40% bottom"
        }
    })

    gsap.to(workWrapperRef, {
        opacity: 1,
        scrollTrigger: {
            trigger: "section.works",
            scrub: true,
            start: "top 80%",
            end: "45% bottom"
        }
    })
}