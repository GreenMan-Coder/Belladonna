const Super = () => {
    return <main>
        <div className="title">
            <span>Bienvenida a</span>
            <h1>BELLADONNA</h1>
        </div>
        <p>Excelencia y profesionalismo en depilación con cera: Tu piel, nuestro compromiso.</p>

        <style jsx>{`
            main {
                height: calc(100vh - 10rem);
                background-image: url(/img/front-page/super.jpeg);
                background-repeat: no-repeat;
                background-position: right;
                background-size: auto 100%;
                display: grid;
                grid-template-rows: 1fr auto;
                justify-items: center;
                align-items: center;
                box-sizing: border-box;
                margin-bottom: 5rem;
                font-size: 16px;
            }

            .title {
                box-sizing: border-box;
                width: 100%;
                background-color: #3f0c3a66;
                padding: 2em 8em;
            }

            h1 {
                color: var(--normal-purple);
                font-weight: 700;
                font-size: 10em;
                align-self: end;
            }
            
            span {
                font-weight: 700;
                color: var(--tone-purple);
                font-size: 3em;
                padding-left: 2rem;
                transform: translateY(-100%);
            }
            
            p {
                align-self: end;
                box-sizing: border-box;
                color: var(--light-purple);
                background-color: var(--tone-purple);
                text-align: center;
                opacity: 0.8;
                width: 90%;
                font-size: 1.5rem;
                padding: 2rem;
                margin-bottom: 4rem;
                
            }

            @media screen and (max-width: 1400px) {
                main {
                    font-size: 12px;
                }
            }

            @media screen and (max-width: 1150px) {
                main {
                    font-size: 10px;
                }
            }

            @media screen and (max-width: 870px) {
                main {
                    font-size: 8px;
                }
            }

            @media screen and (max-width: 700px) {
                main {
                    font-size: 6px;
                }
            }

            @media screen and (max-width: 520px) {
                main {
                    font-size: 5px;
                }
            }

            @media screen and (max-width: 430px) {
                main {
                    font-size: 4px;
                }
            }

            @media screen and (max-width: 350px) {
                main {
                    font-size: 3px;
                }
            }
    `}</style>
    </main>
}
export default Super
