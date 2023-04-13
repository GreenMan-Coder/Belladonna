import Header from "../header/Header"
import ResourcesCard from "./hoWork/ResourcesCard"
import PayMethods from "./hoWork/PayMethods"

const HoWork = ({row}) => {
    return <section className="container">

        <div className="header"></div>
        <h1>¿Cómo trabajamos?</h1>
        <p>Después de ponerte en contacto con nosotros y reservar una cita, una de nuestras expertas te brindará el servicio más profesional y de la mejor calidad en Bogotá. Por favor ten en cuenta que el pago se realizará al finalizar el servicio.</p>
        
        <div className="resources">
            <ResourcesCard url="url(/img/front-page/home.jpeg)" tam="100%" title="DOMICILIO" text="Confirmamos tu cita previamente acordada vía WhatsApp de 5 a 3 horas antes. Nuestro equipo de especialistas brindará un excelente servicio en la comodidad de tu hogar o en nuestro punto físico, según tus preferencias. ¡Siempre a tu disposición!" pos="end"/>
            <ResourcesCard url="url(/img/front-page/cera.jpeg)" tam="100%" title="CERA CALIENTE" text="Ofrecemos depilación con cera de calidad y a tu gusto. Nuestras especialistas minimizan el dolor y dejan tu piel perfecta. Disfruta de una agradable experiencia." pos="center"/>
            <ResourcesCard url="url(/img/front-page/folow.jpeg)" tam="150%" title="SEGUIMIENTO" text="Después de la depilación, nos mantendremos en contacto mediante WhatsApp para verificar la evolución de la piel y estar al tanto de cualquier adicional que puedas tener." pos="center"/>
            <div className="payment">
                <PayMethods image="url(/img/front-page/pesoscop.png)" tam="55%"/>
                <PayMethods image="url(/img/front-page/pse.png)" tam="100%"/>
                <PayMethods image="url(/img/front-page/nequi.png)" tam="45%"/>
                <PayMethods image="url(/img/front-page/daviplata.png)" tam="80%"/>
            </div>
        </div>

        <style jsx>{`
            .container {
                grid-row: ${row};
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                text-align: center;
                font-family: var(--font);
                box-sizing: border-box;
            }
            .header{
                width: 100%;
                height: 7.2em;
                flex-grow: 1;
            }
            h1{
                flex-grow: 1;
                margin: 0;
                font-size: 60px;
                font-weight: 700;
                color: var(--tone-purple);
            }
            p{ 
                width: 100%;
                flex-grow: 7;
                font-size: 17px;
                color: var(--normal-purple);
                box-sizing: border-box;
                margin: 0;
                padding: 25px var(--left) 0 var(--left);
            }
            .resources{
                flex-grow: 12;
                width: 100%;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 0.3fr;
                grid-gap: 10px;
                margin-bottom: 50px;
            }
            .payment{
                display: grid;
                grid-template-rows: 1fr 1fr 1fr 1fr;
            }
            svg{
                width: 40px;
                height: 40px;
            }

        `}</style>
    </section>
}
export default HoWork