import { img_url } from "../../assets/ts/config.ts"

export const WorkItem = ({ work, isOA }: {
    work: {
        name: string,
        url: string,
        src: string,
        techno: string[],
        description: string
    }, isOA?: boolean }) => {

    return <li>
        <a href={ work.url } title={ "See website " + work.name } className="card-works">
            <div className="widget">
                <img src={ img_url + work.src } alt={ "Work's image of " + work.name } width={ 1000 } height={ 600 } />
            </div>

            <ul className="tools">
                { work.techno.map((techno: string, index: number) => <li key={ index }>{ techno }</li>)}
            </ul>

            { isOA
                ? <a href="https://oanna.be/" target="_blank" title="See OANNA's website" className="link">
                    <img src={ img_url + "svg/logo-oa.svg" } alt="OANNA's logo" width={ 25 } height={ 25 } />
                </a>
                : null
            }

            <div className="content">
                <p>
                    { work.description.split(" ").map((word: string, index: number) => <span className="mask" key={ index }>
                        <span style={{ transitionDelay: index * 10 + "ms" }}>{ word }</span>
                    </span>) }
                </p>
            </div>
        </a>
    </li>
}