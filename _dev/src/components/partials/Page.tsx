import { Home } from "../containers/Home.tsx"
import { Works } from "../containers/Works.tsx"
import { About } from "../containers/About.tsx"

export const Page = () => {

    return <main>
        {/* Section home */}
        <Home />
        {/* Section works */}
        <Works />
        {/* Section about */}
        <About />
    </main>
}