import { Magnetic } from "../Magnetic.tsx"
import { root_url, sitename } from "../../assets/ts/config.ts"

export const Footer = () => {

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

        <div className="wrapper wrapper--small">
            <article>
                <img src={ root_url + "images/svg/logo-black.svg" } alt={ sitename } />

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
        </div>

        <div className="carouselText">

        </div>
    </footer>
}