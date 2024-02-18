import { Header } from "./components/partials/Header.tsx"
import { Footer } from "./components/partials/Footer.tsx"
import { Page } from "./components/partials/Page.tsx"

import { AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

import { Preloader } from "./components/Preloader.tsx"

export const App = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        (
            async () => {
                setTimeout(() => {
                    setIsLoading(false)
                }, 2000)
            }
        )()
    }, []);

    return <>
        <AnimatePresence>
            { isLoading && <Preloader /> }
        </AnimatePresence>
        <Header />
        <Page />
        <Footer />
    </>
}