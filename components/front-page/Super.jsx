const Super = () => {
    return <main>
        <div className="title">
            <span>Bienvenida a</span>
            <h1>BELLADONNA</h1>
        </div>
        <p>Excelencia y profesionalismo en depilación con cera: Tu piel, nuestro compromiso.</p>

        <style jsx>{`
            main {
                height: 34.3rem;
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
                min-width: 350px;
                margin: auto;
                position: relative;
            }

            .title {
                width: 90%;
                min-width: 250px;
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
                font-size: 1.6em;
                padding: 2rem;
            }

            @media screen and (max-width: 1030px) {
                span{
                    padding-left: 3em;
                }
            }

            @media screen and (max-width: 965px) {
              main {
                height: 500px;
                background-position: right;
                background-size: contain;
            }
            }

            @media screen and (max-width: 890px) {
                span{
                    padding-left: 2em;
                }
            }

            @media screen and (max-width: 870px) {
                main{
                    height: calc(100vh - 6em);
                    background-position: center;
                    background-size: cover;
                    max-height: 1080px;
                    min-height: 510px;
                    font-size: 16px;
                }
                span{
                    padding: 0;
                    position: relative;
                    left: -1em;
                }

                p{
                    font-size: 1.4em;
                }
            }

            @media screen and (max-width: 785px) {
                main{
                    font-size: 15px;
                }
            }

            @media screen and (max-width: 760px) {
                main{
                    font-size: 14px;
                }
            }

            @media screen and (max-width: 700px) {

            }

            @media screen and (max-width: 675px) {
                main{
                    font-size: 13px;
                }
                .title h1{
                    font-size: 6em;
                }
            }

            @media screen and (max-width: 630px) {
                .title{
                    font-size: 12px;
                }
            }

            @media screen and (max-width: 585px) {
                .title{
                    font-size: 11px;
                }
                main{
                    height: calc(100vh - 4em);
                }
            }



            @media screen and (max-width: 530px) {
                .title{
                    font-size: 10px;
                }
                p{
                    padding: 2rem 1rem;
                }
            }

            @media screen and (max-width: 455px) {
                .title{
                    font-size: 9px;
                }
                p{
                    padding: 2rem .8rem;
                }
            }

            @media screen and (max-width: 440px){
              .title{
                    font-size: 8px;
              }
            }

            @media screen and (max-width: 425px){
                p{
                    font-size: 1.2em;
                }
            }

            @media screen and (max-width: 390px){
                .title h1{
                    font-size: 6em;
                }
            }

            @media screen and (max-width: 360px){
              .title{
                    font-size: 7.2px;
              }
            }
    `}</style>
    </main>
}
export default Super
