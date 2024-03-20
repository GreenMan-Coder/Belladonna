import PayMethods from './hoWork/PayMethods'
import ResourcesCard from './hoWork/ResourcesCard'

const HoWork = () => {
    return <section className="container">
        <div className="resources">
            <ResourcesCard url="url(/img/front-page/home.jpeg)" title="RESERVA" text="¡Contáctanos por cualquier medio y agenda tu cita! nos aseguraremos de tener todo listo para recibirte de manera impecable en nuestras instalaciones, la fecha acordada."/>
            <ResourcesCard url="url(/img/front-page/cera.jpeg)" title="DEPILACIÓN" text="Queremos brindarte un servicio de depilación con cera de la más alta calidad. Nuestra especialista se encargará de minimizar cualquier molestia y asegurar que tu piel quede perfecta."/>
            <ResourcesCard url="url(/img/front-page/folow.jpeg)" title="SEGUIMIENTO" text="Posterior a la depilación, mantendremos contacto contigo para verificar la evolución de la piel y estar al tanto de cualquier consulta adicional que puedas tener."/>
            <div className="payment">
                <PayMethods image="url(/img/front-page/pesoscop.png)" />
                <PayMethods image="url(/img/front-page/pse.png)" />
                <PayMethods image="url(/img/front-page/nequi.png)" />
                <PayMethods image="url(/img/front-page/daviplata.png)" />
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
                max-width: 1590px;
                min-width: 350px;
                min-height: 300px;
                max-height: 1200px;
                margin: auto;
            }
            .resources{
                align-self: center;
                width: 100em;
                height: 28rem;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 0.3fr;
                grid-template-rows: 1fr;
                justify-items: center;
                text-align: center;
                min-height: 500px;
                max-height: 900px;
            }
            .payment{
                display: grid;
                grid-template-rows: 1fr 1fr 1fr 1fr;
                justify-items: center;
                align-items: center;
            }

            @media screen and (max-width: 1700px){
                .container {
                    font-size: 15px;
                }
            }

            @media screen and (max-width: 1575px){
                .container {
                    font-size: 14px;
                }
            }

            @media screen and (max-width: 1460px){
                .container {
                    font-size: 13px;
                }
            }

            @media screen and (max-width: 1360px){
                .container {
                    font-size: 12px;
                }
            }

            @media screen and (max-width: 1260px){
                .container {
                    font-size: 11px;
                }
                .payment{
                  height: 80%;
                  align-self: center;
                }
            }

            @media screen and (max-width: 1175px){
                .container {
                    font-size: 10px;
                }
                .payment{
                    height: 65%;
                }
            }

            @media screen and (max-width: 1070px){
                .container {
                    font-size: 9px;
                }
                .payment{
                    height: 55%;
                }
            }

            @media screen and (max-width: 950px){
                .container {
                    font-size: 8px;
                }
            }

            @media screen and (max-width: 870px){
                .container {
                    font-size: 7.5px;
                    height: 100vh;
                    min-height: 450px;
                }

                .resources{
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr 1fr 1fr 0.3fr;
                    height: 85%;
                    grid-row-gap: 0%;
                }

                .payment{
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                    grid-template-rows: 1fr;
                    width: 90%;
                }
            }

            @media screen and (max-width: 800px){
                .container {
                    font-size: 7px;
                }
            }

            @media screen and (max-width: 730px){
                .container {
                    font-size: 6px;
                }
                .resources{
                    font-size: 7px;
                }
            }

            @media screen and (max-width: 700px){
                .resources{
                    width: 90%;
                }
            }

            @media screen and (max-width: 640px){
                .container {
                    font-size: 5.5px;
                }
            }

            @media screen and (max-width: 570px){
                .container {
                    font-size: 5px;
                }
            }

            @media screen and (max-width: 520px){
                .container {
                    font-size: 4.5px;
                }
            }

            @media screen and (max-width: 455px){
                .container {
                    font-size: 4px;
                }
            }

            @media screen and (max-width: 410px){
                .container {
                    font-size: 3.5px;
                }
            }
        `}</style>
    </section>
}
export default HoWork
