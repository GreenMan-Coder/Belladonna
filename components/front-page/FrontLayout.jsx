const FrontLayout = ({row}) => {
    return <section className="container">

        <hgroup>
            <h3>Hola y bienvenida a</h3>
            <h1>BELLA<span>DONNA</span></h1>
        </hgroup>
        <p>Nuestra empresa con 30 años de experiencia en depilación con cera, donde cuidamos tu piel con atención personalizada y profesionalismo. Nuestro equipo de profesionales altamente calificadas te brinda la mejor calidad en servicio y asesoría para que te sientas segura y cómoda en todo momento. Descubre una experiencia de depilación con cera única en la comodidad de tu hogar. ¡Déjanos consentirte!</p>

        {/* 31.6 */}

        <style jsx>{`
            .container {
                position: absolute;
                grid-row: ${row};
                font-family: var(--font);
                width: 100%;
                height: 100%;
                background-image: url(/img/front-page/woman-front.png);
                background-repeat: no-repeat;
                background-position: right 0% bottom 0%;
                background-size: 40%;
                background-attachment: local;
                z-index: 0;
                display: flex;
                justify-content: center;
                align-items: flex-start;
                flex-direction: column;
            }
            hgroup{
                position: relative;
                box-sizing: border-box;
                margin: 0px 0 0 12px;
                color: var(--normal-purple);
                left: var(--left);
            }
            h1{
                font-size: 130px;
                font-weight: 700;
                margin: 0;
                color: var(--normal-purple);
            }
            span{
                opacity: 0.7;
            }
            h3{
                margin: 0;
                margin-bottom: -18px;
            }
            p{ 
                position: relative;
                margin: 20px 0 0 21px;
                width: 60%;
                font-size: 16px;
                color: var(--normal-purple);
                left: var(--left);
            }


        `}</style>
    </section>
}
export default FrontLayout