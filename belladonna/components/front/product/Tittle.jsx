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
            .container {
                grid-row: ${row};
                grid-column: ${col};
                height: 100%;
                width: 100%;
                display: flex;
                align-items: flex-start;
                justify-content: center;
            }

            *{padding: 0; margin: 0; box-sizing: border-box;}
            header {
                text-align: center;
                width: 100%;
                height: 20rem;
                overflow: hidden;
                border-radius: 0 0 85% 85% / 30%;
            }
            header .overlay{
                width: 100%;
                height: 20rem;
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

        `}</style>
    </hgroup>
}
export default Tittle