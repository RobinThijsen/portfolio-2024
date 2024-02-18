import { Magnetic } from "../Magnetic.tsx"

import { img_url, sitename } from "../../assets/ts/config.ts"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export const Footer = () => {
    const firstTextRef: React.MutableRefObject<null> = useRef(null)
    const secondTextRef: React.MutableRefObject<null> = useRef(null)
    let xPercent: number = 0
    let direction: number = -1

    const animation = () => {
        if (xPercent <= -107) {
            xPercent = 0
        }
        gsap.set(firstTextRef.current, { xPercent: xPercent, duration: 2000 })
        gsap.set(secondTextRef.current, { xPercent: xPercent, duration: 2000 })
        xPercent += .1 * direction
        requestAnimationFrame(animation)
    }

    useEffect(() => {
        requestAnimationFrame(animation);
    }, []);

    return <footer className="footer">
        <div className="linkContainer">
            <Magnetic>
                <a href="tel:+32491596096" className="button button--black">
                    <span>
                        BY PHONE
                    </span>
                </a>
            </Magnetic>

            <span className="line"></span>

            <Magnetic>
                <a href="mailto:robinthijsen.pro@gmail.com" className="button button--black">
                    <span>
                        BY EMAIL
                    </span>
                </a>
            </Magnetic>
        </div>

        <article>
                <img src={ img_url + "svg/logo-black.svg" } alt={ sitename } />

                <h3>
                    Robin Thijsen
                </h3>

                <div>
                    <span>
                        Full-stack web developer
                    </span>

                    <div>
                        <a href="https://github.com/RobinThijsen" title="See my github" target="_blank" className="content-animation content-animation--black">
                            <div>
                                <span>
                                    gh
                                </span>
                                <span>
                                    gh
                                </span>
                            </div>
                        </a>

                        <a href="https://linkedin.com/in/robin-thijsen/" title="See my linkedin" target="_blank" className="content-animation content-animation--black">
                            <div>
                                <span>
                                in
                            </span>
                                <span>
                                in
                            </span>
                            </div>
                        </a>
                    </div>
                </div>
            </article>

        <div className="sliderContainer">
            <div>
                <p ref={ firstTextRef }>
                    Full-stack web developer

                    <img src={ img_url + "svg/picto-black.svg" } alt={ sitename } />
                </p>

                <p ref={ secondTextRef }>
                    Full-stack web developer

                    <img src={ img_url + "svg/picto-black.svg" } alt={ sitename } />
                </p>
            </div>
        </div>
    </footer>
}