import BusinessCard from "./BusinessCard"

const CompanyCommit = () => {
    return <section className="container">
        
        <h1>Compromiso de tu empresa</h1>
        <div className="cardsWrapper">
            <BusinessCard title="Ubicación" text="Empresa proporciona instalaciones para prestar el servicio de depilación femenina." description="Tu empresa presta el espacio y confia a nuestras profesionales sus clientas. Recuerda que el servicio es exclusivo de mujeres para muejeres." top="2em"/>
            <BusinessCard title="Cita" text="Agendar con almenos un día de anticipación." description="Mediante nuestro canal de comunicación agendaremos la visita al punto local." top="3em"/>
            <BusinessCard title="Recaudo" text="Se hace el pago por el servicio al terminar el mismo." description="En belladonna manejamos precios fijos por servicio. Sin embargo De acuerdo al precio final de los servicios, se hará el recaudo porcentual entre tú empresa y Belladonna." top="2em"/>
        </div>
        <style jsx>{`
            .container{
                height: 100%;
                width: 100%;
                display: grid;
                grid-template-rows: 0.3fr 1fr;
            }
            h1{
                grid-row: 1/2;
                font-size: 60px;
                font-weight: 900;
                text-align: center;
                color: var(--normal-purple);
                text-transform: uppercase;
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            .cardsWrapper{
                grid-row: 2/3;
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
                padding-top: 1.7em;
                padding-left: 2.5em;
                align-items: flex-start;
            }
        `}</style>

    </section>
}
export default CompanyCommit