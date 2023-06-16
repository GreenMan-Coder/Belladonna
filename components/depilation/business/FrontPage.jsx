import Contact from "./Contact"

const FrontPage = () => {
    return <hgroup className="container">
        
        <h1>servicio depilación</h1>
        <hgroup>
            <h3>Belladonna presta el servicio de depilación para empresas o negocios.</h3>
            <p>Conoce nuestro modelo de trabajo y recuerda que puedes contactarnos para cualquier pregunta.</p>
            <Contact pos="flex-start" text="Whatsapp"/>
            <Contact pos="flex-end" text="Email"/>
        </hgroup>
        <img src="/img/depilation/bella-empresa.jpeg" alt="Belladonna empresas" />
        
        <style jsx>{`
        .container {
                grid-row: 2/3;
                height: 100%;
                width: 100%;
                display: grid;
                grid-template-columns: 1fr 1fr;
            }
            hgroup{
                display: grid;
                grid-template-rows: auto auto auto;
                height: 100%;
                box-sizing: border-box;
            }
            h3{
                grid-row: 1/2;
                color: var(--light-purple);
                margin: 0;
                padding: 0;
                align-self: center;
                font-size: 35px;
                font-weight: 700;
            }
            p{
                grid-row: 2/3;
                margin: 0;
                padding: 0;
                align-self: flex-start;
                color: var(--tone-purple);
                font-size: 25px;
                font-weight: 400;
                text-align: justify;
                box-sizing: border-box;
            }
            h1{
                grid-column: 1/3;
                font-size: 73px;
                font-weight: 900;
                text-align: center;
                color: var(--normal-purple);
                text-transform: uppercase;
                margin: 0;
                padding: 0;
                padding-top: 15px;
                box-sizing: border-box;
            }
            img{
                height: 75%;
                width: 90%;
                justify-self: right;
                align-self: flex-start;
            }
        `}</style>
    </hgroup>
}
export default FrontPage