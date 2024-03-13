const Information = ({ sub, title, paragraph, href }) => {
    return <hgroup>
        <h3>{sub}</h3>
        <h2>{title}</h2>
        <p>{paragraph}</p>
        <a href={href}>Enlace aquí
            <svg viewBox="0 0 512 512"><path color="#ffe3fe" fill="currentcolor" d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>
        </a>
        <style jsx>{`
            hgroup {
                height: 15em;
                width: 80%;
                display: grid;
                justify-items: start;
                align-items: center;
            }
            h3{
                color: var(--normal-purple);
                font-size: 1.6em;
                align-self: end;
            }
            h2{
                align-self: start;
                font-size: 2.3em;
                color: var(--light-purple);
            }
            p{
                align-self: start;
                color: var(--light-purple);
                font-size: 1.3em;
            }
            a{
                align-self: start;
                text-decoration: none;
                color: var(--light-purple);
                font-weight: 900;
                font-size: 1.25em;

            }
            svg{
                position: relative;
                left: .3em;
                top: .15em;
                width: 0.8em;
            }

            @media screen and (max-width: 870px){
                hgroup{
                    height: 40em;
                    width: 90%;
                }

                h3{
                    grid-row: 1/2;
                    grid-column: 1/2;
                    font-size: 2em;
                }

                h2{
                    grid-row: 2/3;
                    grid-column: 1/2;
                    font-size: 3em;
                }
                p{
                    grid-row: 2/3;
                    grid-column: 1/2;
                    align-self: center;
                    font-size: 1.45em;
                }
                a{
                    font-size: 1.8em;
                }
            }
    `}</style>
    </hgroup>
}
export default Information
