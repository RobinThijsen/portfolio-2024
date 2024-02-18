import { HashLink as Link } from "react-router-hash-link"

import { MutableRefObject, useEffect, useRef, useState } from "react"

import $ from "jquery"
import { motion } from "framer-motion"

export const NavContainer = () => {
    const [top, setTop ] = useState(0)
    const [left, setLeft ] = useState(0)
    const [width, setWidth ] = useState(0)

    // REF
    const navContainerRef: MutableRefObject<null> = useRef(null)
    const homeRef: MutableRefObject<null> = useRef(null)
    const projectsRef: MutableRefObject<null> = useRef(null)
    const aboutRef: MutableRefObject<null> = useRef(null)
    const contactRef: MutableRefObject<null> = useRef(null)
    const cursorRef: MutableRefObject<null> = useRef(null)

    const toggleNavContainer = () => {
        toggleClass('.navContainer', 'js-active')

        if ($('.navContainer').hasClass('js-active')) {
            setTimeout(() => {
                const activeElement: Element | null = document.querySelector("li.active")
                if (activeElement) {
                    const activeRect: DOMRect = activeElement.getBoundingClientRect()
                    // @ts-ignore
                    const parentRect: DOMRect = activeElement.parentElement.parentElement.getBoundingClientRect()

                    setTop((activeRect.top - parentRect.top) - 7)
                    setLeft((activeRect.left - parentRect.left) - 5)
                    setWidth((activeRect.width + 10))
                }
            }, 400)
        }
    }

    const addClassAndMoveCursor = (currentRef: { classList: { add: (arg0: any) => void }; getBoundingClientRect: () => any; parentElement: { parentElement: { getBoundingClientRect: () => any } } } | null, className: string) => {
        if (currentRef != null) {
            currentRef.classList.add(className)
            const currentRect = currentRef.getBoundingClientRect()
            const parentRect = currentRef.parentElement.parentElement.getBoundingClientRect()

            setTop((currentRect.top - parentRect.top) - 7)
            setLeft((currentRect.left - parentRect.left) - 5)
            setWidth((currentRect.width + 10))
        }
    }

    useEffect(() => {

        setTimeout(() => {
            $(window).on('scroll', () => {
                const x: number|undefined =  $(window).scrollTop()
                // console.log(x)

                if (x != undefined) {

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
                            addClassAndMoveCursor(homeRef.current, 'active')
                        }
                    } else if (x >= 772 && x < 2925.5) {
                        removeClass([homeRef.current, aboutRef.current, contactRef.current], 'active')
                        // @ts-ignore
                        if (!projectsRef.current.classList.contains('active')) {
                            addClassAndMoveCursor(projectsRef.current, 'active')
                        }
                    } else if (x >= 2925.5 && x < 4095.5) {
                        removeClass([homeRef.current, projectsRef.current, contactRef.current], 'active')
                        // @ts-ignore
                        if (!aboutRef.current.classList.contains('active')) {
                            addClassAndMoveCursor(aboutRef.current, 'active')
                        }
                    } else {
                        removeClass([homeRef.current, projectsRef.current, aboutRef.current], 'active')
                        // @ts-ignore
                        if (!contactRef.current.classList.contains('active')) {
                            addClassAndMoveCursor(contactRef.current, 'active')
                        }
                    }
                }
            })
        }, 200)

        $('.navContainer nav li a').on('mouseover', (e) => {
            const targetRect: DOMRect = e.target.getBoundingClientRect()
            // @ts-ignore
            const parentRect: DOMRect = e.target.parentElement.parentElement.parentElement.getBoundingClientRect()

            setTop((targetRect.top - parentRect.top) - 7)
            setLeft((targetRect.left - parentRect.left) - 5)
            setWidth(targetRect.width + 10)
        })

        $('.navContainer nav li a').on('mouseleave', () => {
            const activeElement: Element | null = document.querySelector("li.active")
            if (activeElement) {
                const activeRect: DOMRect = activeElement.getBoundingClientRect()
                // @ts-ignore
                const parentRect: DOMRect = activeElement.parentElement.parentElement.getBoundingClientRect()

                setTop((activeRect.top - parentRect.top) - 7)
                setLeft((activeRect.left - parentRect.left) - 5)
                setWidth((activeRect.width + 10))
            }
        })

    }, []);

    return <div className="navContainer">
        <nav ref={ navContainerRef }>
            <li ref={ homeRef } className="active">
                <Link to={ "#home" } className="link">
                    Home
                </Link>
            </li>

            <li ref={ projectsRef }>
                <Link to={ "/#works" } className="link">
                    My works
                </Link>
            </li>

            <li ref={ aboutRef }>
                <Link to={ "/#about" } className="link">
                    About me
                </Link>
            </li>

            <li ref={ contactRef }>
                <Link to={ "/#contact" } className="link">
                    Contact
                </Link>
            </li>
        </nav>

        <motion.div style={{ top, left, width }} ref={ cursorRef } className="cursor"></motion.div>
        <div onClick={ toggleNavContainer } className="burger"></div>
    </div>
}

const removeClass = (arrRef: string | any[], className: string) => {
    for (let i = 0; i < arrRef.length; i++) {
        arrRef[i].classList.remove(className)
    }
}

const toggleClass = (target: string, className: string) => {
    if ($(target).hasClass(className)) {
        $(target).removeClass(className)
    } else {
        $(target).addClass(className)
    }
}