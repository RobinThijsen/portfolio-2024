export const WorkItem = ({ work, index, isOA }: {
    work: {
        name: string,
        url: string,
        src: string,
        techno: string[],
        description: string
    }, index: number, isOA?: boolean }) => {

    return <li key={ index }>
        <a href={ work.url } title={ "See website " + work.name } className="card-works">
            <img src={ work.src } alt={ "" + work.name } width={ 1000 } height={ 600 } />

            <ul>
                { work.techno.map((techno: string) => <li>{ techno }</li>)}
            </ul>

            <div>
                <p>
                    { work.description.split(" ").map((word: string, index: number) => <span className="mask" key={ index }>
                        <span style={{ transitionDelay: index * 10 + "ms" }}>{ word }</span>
                    </span>) }
                </p>
            </div>

            { isOA
                ? <a href="https://oanna.be/" target="_blank" title="See OANNA's website">
                    <img src={"/images/svg/logo-oa.svg"} alt="OANNA's logo" width={ 25 } height={ 25 } />
                </a>
                : null
            }
        </a>
    </li>
}