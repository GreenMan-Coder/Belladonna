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
                background-position: min(41vw) min(3vw);
                background-size: min(100%, 1300px) min(100%, 1085px);
                background-attachment: fixed;
                display: grid;
                grid-template-rows: 1fr auto;
                justify-items: center;
                align-items: center;
                box-sizing: border-box;
                max-width: 1590px;
                min-width: 400px;
                max-height: 1080px;
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
                user-select: none;
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
                font-size: 1.3em;
                padding: 2rem;
            }

            @media screen and (max-width: 3000px) {
                main{
                    font-size: 28px;
                }
            }
            @media screen and (min-width: 3000px) {
                main{
                    font-size: 28px;
                }
            }

            @media screen and (max-width: 2580px) {
                main{
                    font-size: 28px;
                    background-position: min(38vw) min(5vw);
                }
            }

            @media screen and (max-width: 2045px) {
                main{
                  background-position: min(35vw) min(5vw);
                }
            }

            @media screen and (max-width: 1725px) {
                main{
                  background-position: min(32vw) min(5vw);
                }
            }

            @media screen and (max-width: 1540px) {
                main{
                  background-position: min(29vw) min(6vw);
                }
            }

            @media screen and (max-width: 1475px){
                main{
                    font-size: 22px;
                    background-size: min(100%, 1300px) min(100%, 1085px);
                    background-position: min(28vw) min(6vw);
                }
            }

            @media screen and (max-width: 1450px){
                main{
                    font-size: 22px;
                    background-position: min(25vw) min(6vw);
                }
            }

            @media screen and (max-width: 1450px){
                main{
                    font-size: 22px;
                    background-position: min(20vw) min(6vw);
                }
            }



            @media screen and (max-width: 1270px){
                main{
                    font-size: 22px;
                    background-position: min(18vw) min(9vw);
                }
            }

            @media screen and (max-width: 1170px){
                main{
                    font-size: 20px;
                }
            }

            @media screen and (max-width: 1090px){
                main{
                    font-size: 19px;

                }
            }

            @media screen and (max-width: 1045px){
                main{
                    font-size: 19px;
                    background-position: min(15vw) min(10vw);
                    background-size: min(100%, 1000px) min(100%, 800px);
                    max-height: 770px;
                }
            }

            @media screen and (max-width: 1010px){
                main{
                    font-size: 19px;
                    background-position: min(15vw) min(12vw);
                }
            }

            @media screen and (max-width: 995px){
                main{
                    background-position: min(10vw) min(11vw);
                }
            }

            @media screen and (max-width: 945px){
                main{
                    font-size: 16px;
                }
            }

            @media screen and (max-width: 870px){
                main{
                    font-size: 15px;
                }
            }

            @media screen and (max-width: 790px){
                main{
                    font-size: 13px;
                }
            }

            @media screen and (max-width: 700px){
                main{
                    font-size: 11px;
                    background-position: min(10vw) min(15vw);
                    background-size: min(100%, 900px) min(100%, 530px);
                    max-height: 530px;
                }
            }

            @media screen and (max-width: 560px){
                main{
                    font-size: 9px;
                    background-position: min(10vw) min(20vw);
                }
            }

            @media screen and (max-width: 475px){
                main{
                    font-size: 8px;
                    min-height: 400px;
                    max-height: 400px;
                    background-size: min(100%, 900px) min(100%, 430px);
                    background-position: min(19vw) min(20vw);
                }
            }

            @media screen and (max-width: 430px){
                main{
                    font-size: 7.5px;
                }

                span{
                    position: relative;
                    top: 1.3em;
                }
                h1 {
                    position: relative;
                    top: .5em;
                }
            }

            @media screen and (max-width: 390px){
                main{
                    background-position: min(19vw) min(23vw);
                }
            }

            @media screen and (max-height: 650px){
                main{
                    background-size: min(100%, 1000px) min(530px, 1000px);
                }
            }


    `}</style>
    </main>
}
export default Super
