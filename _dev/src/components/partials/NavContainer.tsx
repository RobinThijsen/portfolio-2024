import { Link } from "react-router-dom"

import { MutableRefObject, useEffect, useRef } from "react"

import $ from "jquery"

export const NavContainer = () => {
    const navContainerRef: MutableRefObject<null> = useRef(null)

    const cursorRef: MutableRefObject<null> = useRef(null)
    const homeRef: MutableRefObject<null> = useRef(null)
    const projectsRef: MutableRefObject<null> = useRef(null)
    const aboutRef: MutableRefObject<null> = useRef(null)
    const contactRef: MutableRefObject<null> = useRef(null)

    useEffect(() => {

        setTimeout(() => {
            $(window).on('scroll', () => {
                const x: number|undefined =  $(window).scrollTop()
                // console.log(x)

                if (x != undefined) {

                    if (x >= 0 && x < 726) {
                        // @ts-ignore
                        if (navContainerRef.current.classList.contains('white')) {
                            // @ts-ignore
                            navContainerRef.current.classList.remove('white')
                        }
                    } else if (x >= 726 && x < 1200) {
                        // @ts-ignore
                        if (!navContainerRef.current.classList.contains('white')) {
                            // @ts-ignore
                            navContainerRef.current.classList.add('white')
                        }
                    }

                    if (x >= 100) {
                        // @ts-ignore
                        if (!navContainerRef.current.classList.contains('active')) {
                            // @ts-ignore
                            navContainerRef.current.classList.add('active')
                        }
                    } else {
                        // @ts-ignore
                        if (navContainerRef.current.classList.contains('active')) {
                            // @ts-ignore
                            navContainerRef.current.classList.remove('active')
                        }
                    }
                }

                if (x != undefined) {

                    if (x >= 0 && x < 772) {
                        removeClass([projectsRef.current, aboutRef.current, contactRef.current], 'active')
                        // @ts-ignore
                        if (!homeRef.current.classList.contains('active')) {
                            // @ts-ignore
                            homeRef.current.classList.add('active')
                        }
                    } else if (x >= 772 && x < 2925.5) {
                        removeClass([homeRef.current, aboutRef.current, contactRef.current], 'active')
                        // @ts-ignore
                        if (!projectsRef.current.classList.contains('active')) {
                            // @ts-ignore
                            projectsRef.current.classList.add('active')
                        }
                    } else if (x >= 2925.5 && x < 3375.5) {
                        removeClass([homeRef.current, projectsRef.current, contactRef.current], 'active')
                        // @ts-ignore
                        if (!aboutRef.current.classList.contains('active')) {
                            // @ts-ignore
                            aboutRef.current.classList.add('active')
                        }
                    } else {
                        removeClass([homeRef.current, projectsRef.current, aboutRef.current], 'active')
                        // @ts-ignore
                        if (!contactRef.current.classList.contains('active')) {
                            // @ts-ignore
                            contactRef.current.classList.add('active')
                        }
                    }
                }
            })

            $('.link').on('mouseover', e => {
                const { left , top } = e.target.getBoundingClientRect()
            })
        }, 200)

    }, []);

    return <nav ref={ navContainerRef } className="navContainer">
        <li ref={ homeRef } className="active">
            <Link to={ "#home" } className="link">
                Home
            </Link>
        </li>
        {/*<img src={ root_url + "images/svg/picto-white.svg" } alt={ sitename } />*/}
        <li ref={ projectsRef }>
            <Link to={ "#works" } className="link">
                My works
            </Link>
        </li>
        {/*<img src={ root_url + "images/svg/picto-white.svg" } alt={ sitename } />*/}
        <li ref={ aboutRef }>
            <Link to={ "#about" } className="link">
                About me
            </Link>
        </li>
        {/*<img src={ root_url + "images/svg/picto-white.svg" } alt={ sitename } />*/}
        <li ref={ contactRef }>
            <Link to={ "#contact" } className="link">
                Contact
            </Link>
        </li>

        <div ref={ cursorRef } className="cursor"></div>
    </nav>
}

const removeClass = (arrRef: string | any[], className: string) => {
    for (let i = 0; i < arrRef.length; i++) {
        arrRef[i].classList.remove(className)
    }
}