const Information = ({sub, title, paragraph, href}) => {
    return <article className="container">

        <hgroup>
            <h3>{sub}</h3>
            <h2>{title}</h2>
            <p>{paragraph}</p>
            <div className="link">
                <a href="#">Lee más
                    <svg viewBox="0 0 512 512"><path color="#ffe3fe" fill="currentcolor" d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>
                </a>
            </div>
        </hgroup>

        <style jsx>{`
            .container {
                height: 100%;
                width: 100%;
                box-sizing: border-box;
                padding: 0 2.5em;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                justify-content: center;
                overflow: hidden;
            }
            hgroup{
                position: relative;
                height: 90%;
                display: grid;
                grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr;
            }
            h3{
                grid-row: 1/2;
                position: absolute;
                margin: 0;
                bottom: 0;
                color: var(--normal-purple);
                box-sizing: border-box;
                overflow: hidden;
            }
            h2{
                grid-row: 2/3;
                flex-grow: 2;
                margin: 0;
                color: var(--light-purple);
                font-size: 2.5em;
            }
            p{
                position: absolute;
                grid-row: 3/4;
                flex-grow: 1;
                margin: 0;
                box-sizing: border-box;
                color: var(--light-purple);
            }
            .link{
                grid-row: 4/5;
                display: grid;
                grid-template-columns: 0.5fr 1fr;
            }
            a{
                position: absolute;
                grid-column: 1/2;
                text-decoration: none;
                box-sizing: border-box;
                color: var(--light-purple);
                font-weight: 900;
            }
            svg{
                position: relative;
                top: 4px;
                width: 17px;
                grid-column: 2/3;
                margin-left: 5px;
            }
        `}</style>
    </article>
}
export default Information