const Super = () => {
    return <main>
        <div className="title">
            <span>Bienvenida a</span>
            <h1>BELLADONNA</h1>
        </div>
        <p>Excelencia y profesionalismo en depilación con cera: Tu piel, nuestro compromiso.</p>

        <style jsx>{`
            main {
                height: 34.3em;
                background-image: url(/img/front-page/super1.png);
                background-repeat: no-repeat;
                background-position: right;
                background-size: contain;
                background-attachment: local;
                display: grid;
                grid-template-rows: 1fr auto;
                justify-items: center;
                align-items: center;
                box-sizing: border-box;
                max-width: 1590px;
                min-width: 400px;
                margin: auto;
                position: relative;
            }

            .title {
                width: 80%;
            }

            h1 {
                color: var(--normal-purple);
                font-weight: 700;
                font-size: 6em;
                text-align: center;
                user-select: none;
            }

            span {
                font-weight: 700;
                color: var(--light-purple);
                font-size: 2.5em;
                padding-left: 5em;
                user-select: none;
            }

            p {
                position: absolute;
                bottom: 0;
                box-sizing: border-box;
                color: var(--light-purple);
                background-color: var(--tone-purple);
                text-align: center;
                opacity: 0.8;
                width: 100%;
                border-radius: 15px 15px 0 0;
                font-size: 1.5em;
                padding: 2rem;
            }

            @media screen and (max-width: 1030px) {
                span{
                    padding-left: 3em;
                }
            }

            @media screen and (max-width: 890px) {
                span{
                    padding-left: 2em;
                }
            }

            @media screen and (max-width: 540px) {
                span{
                    padding-left: 1em;
                }
            }

            @media screen and (max-width: 480px) {
                p {
                  padding: 1rem;
              }
            }


    `}</style>
    </main>
}
export default Super
