const Tittle = ({row, col}) => {

    return <hgroup className="container">


        <header>
            <div className="overlay">
                <h1>Depilación con cera</h1>
                <h3>Servicio exclusivo para mujeres</h3>
                <p>Obtén un <span>resultado duradero</span> con nuestra depilación con cera, ofrecida tanto en el comodidad de tu hogar como en nuestro punto de atención. Deja que tu piel descanse y luzca suave y radiante con nuestro servicio profesional.</p>
            </div>
        </header>

        <style jsx>{`
            *{padding: 0; margin: 0; box-sizing: border-box;}
            .container {
                grid-row: ${row};
                grid-column: ${col};
                height: 100%;
                width: 100%;
                display: flex;
                align-items: flex-start;
                justify-content: center;
            }

            header {
                text-align: center;
                width: 100%;
                height: 20rem;
                overflow: hidden;
                border-radius: 0 0 85% 85% / 30%;
            }
            header .overlay{
                width: 100%;
                height: auto;
                padding: 50px;
                color: #FFF;
                text-shadow: 1px 1px 1px #333;
                background-image: linear-gradient( 135deg, #9f05ff69 10%, #fd5e086b 100%);
                display: grid;
            }

            h1 {
                font-size: 4rem;
                margin-bottom: 30px;
                font-family: 'Karla', sans-serif; 
            }

            h3, p {
                margin-bottom: 30px;
            }
            h3{
                font-size: 25px;
                text-transform: uppercase;
            }
            p{
                font-size: 20px;
                letter-spacing: 1px;
            }

            span{
                color: #feac5e;
            }

            @media (max-width: 1029px){
                p{
                    font-size: 19px;
                }
            }
            @media (max-width: 932px){
                p{
                    font-size: 18px;
                }
            }
            @media (max-width: 704px){
                h1{
                    font-size: 3.5rem;
                }
            }
            @media (max-width: 629px){
                h1{
                    font-size: 3.2rem;
                }

                h3{
                    font-size: 20px;
                }
            }
            @media (max-width: 583px){
                h1{
                    font-size: 3.1rem;
                }

                h3{
                    font-size: 18px;
                }

                p{
                    font-size: 16px;
                }
            }
            @media (max-width: 568px){
                header .overlay{
                    height: 95%;
                }
                h1{
                    font-size: 2.9rem;
                }

                h3{
                    font-size: 16px;
                }

                p{
                    font-size: 14px;
                }
            }
            @media (max-width: 538px){
                .container{
                    height: 18rem;
                    align-self: flex-start;
                }
                header .overlay{
                    height: 85%;
                    border-radius: 0 0 30% 30%;
                }
                h1{
                    font-size: 2.7rem;
                }
                h3{
                    font-size: 14px;
                }
                p{
                    font-size: 12px;
                }
            }
            @media (max-width: 508px){
                header .overlay{
                    padding: 20px 50px 50px 50px;
                    height: 75%;
                    border-radius: 0 0 30% 30%;
                }
                h1{
                    font-size: 2.5rem;
                }
            }
            @media (max-width: 477px){
                .container {
                    grid-template-rows: auto 16rem 0.2fr 0.4fr 0.4fr 1fr;
                }
                h1{
                    font-size: 2.2rem;
                }
            }
            @media (max-width: 432px){
                h1{
                    font-size: 1.8rem;
                }
            }
            @media (max-width: 372px){
                h1{
                    font-size: 1.4rem;
                    
                }
                h3{
                    font-size: 11px;
                }
                p{
                    font-size: 12px;
                }
            }
            @media (max-width: 358px){
                h3{
                    font-size: 12.5px;
                }
            }
            @media (max-width: 337px){
                header .overlay{
                grid-template-rows: auto auto auto;
                padding: 50px 0px;
                justify-items: center;
                align-content: center;
                height: 14rem;
                }
            }
        `}</style>
    </hgroup>
}
export default Tittle