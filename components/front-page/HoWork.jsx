import ResourcesCard from "./hoWork/ResourcesCard"
import PayMethods from "./hoWork/PayMethods"

const HoWork = ({row}) => {
  return <section className="container">
    <div className="resources">
      <ResourcesCard url="url(/img/front-page/home.jpeg)" tam="100%" title="RESERVA" text="¡Contáctanos por cualquier medio y agenda tu cita! nos aseguraremos de tener todo listo para recibirte de manera impecable en nuestras instalaciones la fecha acordada."/>
      <ResourcesCard url="url(/img/front-page/cera.jpeg)" tam="100%" title="DEPILACIÓN" text="Queremos brindarte un servicio de depilación con cera de la más alta calidad. Nuestra especialista se encargará de minimizar cualquier molestia y asegurar que tu piel quede perfecta."/>
      <ResourcesCard url="url(/img/front-page/folow.jpeg)" tam="150%" title="SEGUIMIENTO" text="Posterior a la depilación, mantendremos contacto contigo para verificar la evolución de la piel y estar al tanto de cualquier consulta adicional que puedas tener."/>
      <div className="payment">
        <PayMethods image="url(/img/front-page/pesoscop.png)" tam="85%"/>
        <PayMethods image="url(/img/front-page/pse.png)" tam="110%"/>
        <PayMethods image="url(/img/front-page/nequi.png)" tam="70%"/>
        <PayMethods image="url(/img/front-page/daviplata.png)" tam="95%"/>
      </div>
    </div>
    <style jsx>{`
      .container {
        grid-row: ${row};
        width: 100%;
        display: grid;
        justify-items: center;
        align-items: center;
        font-family: var(--font);
        box-sizing: border-box;
      }
      .resources{
        margin: 0;
        align-self: center;
        width: 100%;
        height: 100%;
        display: grid;
        text-align: center;
      }

      @media screen and (max-width: 2500px){
        .resources{
          grid-template-columns: 1fr 1fr 1fr 0.3fr;
          grid-template-rows: 1fr;
          height: 45em;
        }
        .payment{
          display: grid;
          grid-template-rows: 1fr 1fr 1fr 1fr;
          justify-items: center;
          align-items: center;
        }
        .container{
          justify-self: center;
          width: 90%;
        }
      }
    `}</style>
    </section>
}
export default HoWork
