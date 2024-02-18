const Super = () => {
    return <main>
        <div className="title">
            <span>Bienvenida a</span>
            <h1>BELLADONNA</h1>
        </div>
        <p>Excelencia y profesionalismo en depilación con cera: Tu piel, nuestro compromiso.</p>

        <style jsx>{`
            main {
                overflow: hidden;
                height: calc(100vh - 5rem);
                background-image: url(/img/front-page/super1.png);
                background-repeat: no-repeat;
                background-position: 140% 80px;
                background-size: 100% 100%;
                background-attachment: fixed;
                display: grid;
                grid-template-rows: 1fr auto;
                justify-items: center;
                align-items: center;
                box-sizing: border-box;
                max-width: 1590px;
                min-width: 400px;
                max-height: 1000px;
                min-height: 530px;
                margin: auto;
                position: relative;
            }

            .title {
                box-sizing: border-box;
                width: 80%;
                padding: 0;
            }

            h1 {
                color: var(--normal-purple);
                font-weight: 700;
                font-size: 6em;
                text-align: center;
            }

            span {
                font-weight: 700;
                color: var(--light-purple);
                font-size: 2.5em;
                padding-left: 0em;
                transform: translateY(-100%);
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

            @media screen and (max-width: 3000px) {
                main{
                    background-position: 500px 80px;
                    font-size: 28px;
                    background-size: 80% 60%;
                }
            }
            @media screen and (max-width: 3000px) and (max-height: 1675px) {
                main{
                    background-size: 80% 75%;
                }
            }
            @media screen and (max-width: 3000px) and (max-height: 1340px) {
                main{
                    background-size: 80% 85%;
                    background-position: 430px 80px;
                }
            }
            @media screen and (max-width: 3000px) and (max-height: 1185px) {
                main{
                    background-size: 85% 95%;
                }
            }

            @media screen and (max-width: 1450px){
                main{
                    font-size: 25px;
                }
            }

            @media screen and (max-width: 1260px){
                main{
                    background-position: 400px 80px;
                    font-size: 22px;
                }
            }

            @media screen and (max-width: 1170px){
                main{
                    background-position: 350px 80px;
                    font-size: 20px;
                }
            }

            @media screen and (max-width: 1090px){
                main{
                    font-size: 19px;
                }
            }

            @media screen and (max-width: 1050px){
                main{
                    background-position: 280px 80px;
                    font-size: 18px;
                }
            }

            @media screen and (max-width: 945px){
                main{
                    font-size: 16px;
                }
            }

            @media screen and (max-width: 870px){
                main{
                    background-position: 100px 80px;
                    font-size: 15px;
                }
            }

            @media screen and (max-width: 790px){
                main{
                    font-size: 13px;
                }
            }

            @media screen and (max-width: 680px){
                main{
                    font-size: 11px;
                }
            }

            @media screen and (max-width: 560px){
                main{
                    background-position: 100px 80px;
                    background-size: 100% 100%;
                    font-size: 9px;
                }
            }

            @media screen and (max-width: 475px){
                main{
                    font-size: 8px;
                }
            }

            @media screen and (max-width: 415px){
                main{
                    font-size: 7.5px;
                }
            }

    `}</style>
    </main>
}
export default Super
