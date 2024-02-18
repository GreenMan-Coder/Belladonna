import PayMethods from './hoWork/PayMethods'
import ResourcesCard from './hoWork/ResourcesCard'

const HoWork = () => {
    return <section className="container">
        <div className="resources">
            <ResourcesCard url="url(/img/front-page/home.jpeg)" title="RESERVA" text="¡Contáctanos por cualquier medio y agenda tu cita! nos aseguraremos de tener todo listo para recibirte de manera impecable en nuestras instalaciones, la fecha acordada."/>
            <ResourcesCard url="url(/img/front-page/cera.jpeg)" title="DEPILACIÓN" text="Queremos brindarte un servicio de depilación con cera de la más alta calidad. Nuestra especialista se encargará de minimizar cualquier molestia y asegurar que tu piel quede perfecta."/>
            <ResourcesCard url="url(/img/front-page/folow.jpeg)" title="SEGUIMIENTO" text="Posterior a la depilación, mantendremos contacto contigo para verificar la evolución de la piel y estar al tanto de cualquier consulta adicional que puedas tener."/>
            <div className="payment">
                <PayMethods image="url(/img/front-page/pesoscop.png)" tam="85%"/>
                <PayMethods image="url(/img/front-page/pse.png)" tam="110%"/>
                <PayMethods image="url(/img/front-page/nequi.png)" tam="70%"/>
                <PayMethods image="url(/img/front-page/daviplata.png)" tam="95%"/>
            </div>
        </div>
        <style jsx>{`
            .container {
                justify-self: center;
                display: grid;
                justify-items: center;
                align-items: center;
                font-family: var(--font);
                box-sizing: border-box;
                min-width: 400px;
                max-width: 1590px;
                max-height: 600px;
                margin: auto;
            }
            .resources{
                align-self: center;
                width: 100%;
                height: 30em;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 0.3fr;
                grid-template-rows: 1fr;
                justify-items: center;
                text-align: center;
            }
            .payment{
                display: grid;
                grid-template-rows: 1fr 1fr 1fr 1fr;
                justify-items: center;
                align-items: center;
            }

            @media screen and (max-width: 1600px){
                .container {
                    width: 1500px;
                }
            }

            @media screen and (max-width: 1540px){
                .container {
                    width: 1450px;
                    font-size: 15px;
                }
            }

            @media screen and (max-width: 1490px){
                .container {
                    width: 1350px;
                    font-size: 14px;
                }
            }

            @media screen and (max-width: 1420px){
                .container {
                    width: 1250px;
                    font-size: 13px;
                }
            }

            @media screen and (max-width: 1310px){
                .container {
                    width: 1200px;
                    font-size: 12.5px;
                }
            }

            @media screen and (max-width: 1260px){
                .container {
                    width: 1100px;
                    font-size: 12px;
                }
            }

            @media screen and (max-width: 1185px){
                .container {
                    width: 1000px;
                    font-size: 11px;
                }
            }

            @media screen and (max-width: 1060px){
                .container {
                    width: 900px;
                }

                .resources{
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr 1fr 1fr 0.3fr;
                    height: 60em;
                    grid-row-gap: 5%;
                }

                .payment{
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                    grid-template-rows: 1fr;
                    width: 90%;
                }
            }

            @media screen and (max-width: 940px){
                .container {
                    width: 800px;
                }
            }

            @media screen and (max-width: 830px){
                .container {
                    width: 700px;
                }
            }

            @media screen and (max-width: 720px){
                .container {
                    width: 600px;
                }
            }

            @media screen and (max-width: 620px){
                .container {
                    width: 500px;
                }
            }

            @media screen and (max-width: 520px){
                .container {
                    width: 400px;
                }
            }

            @media screen and (max-width: 425px){
                .container {
                    width: 100px;
                }
            }
        `}</style>
    </section>
}
export default HoWork
