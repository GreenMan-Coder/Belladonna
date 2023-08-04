import BusinessCard from "./BusinessCard"

const BelladonnaCommit = () => {

    return <section className="container">
        <h1>Compromiso Belladonna</h1>
        <div className="cardsWrapper">
            <BusinessCard title="Profesionalidad" text="Garantizamos la satisfacción de tu cliente." description="Nuestras expertas brindarán un servicio excelente, dedicado y profesional, pensando siempre en la clienta." top="2em"/>
            <BusinessCard title="Seguimiento" text="Canal de contacto." description="Mediante nuestro canal de comunicación tendremos contacto 15 días luego del servicio con la clienta, para verificar evolución post depilación." top="2.2em"/>
            <BusinessCard title="Confidencialidad" text="Tu clienta no distinguirá entre Belladonna y tu empresa." description="El servicio será brindado confidencialmente, con el fin de proteger a la clienta y la empresa." top="2.5em"/>
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
export default BelladonnaCommit