import ResourcesCard from "./hoWork/ResourcesCard"
import PayMethods from "./hoWork/PayMethods"

const HoWork = ({row}) => {
  return <section className="container">
    <div className="resources">
      <ResourcesCard url="url(/img/front-page/home.jpeg)" tam="100%" title="LOCACIÓN" text="Confirmamos tu cita previamente acordada vía WhatsApp de 5 a 3 horas antes. Nuestro equipo de especialistas brindará un excelente servicio en la comodidad de tu hogar o en nuestro punto físico." pos="center" top="40px"/>
      <ResourcesCard url="url(/img/front-page/cera.jpeg)" tam="100%" title="DEPILACIÓN" text="Queremos brindarte un servicio de depilación con cera de la más alta calidad. Nuestras especialistas se encargan de minimizar cualquier molestia y asegurar que tu piel quede perfecta." pos="center" top="40px"/>
      <ResourcesCard url="url(/img/front-page/folow.jpeg)" tam="150%" title="SEGUIMIENTO" text="Después de la depilación, nos mantendremos en contacto para verificar la evolución de la piel y estar al tanto de cualquier adicional que puedas tener." pos="center" top="9px"/>
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
        height: 100%;
        display: grid;
        justify-items: center;
        align-items: center;
        font-family: var(--font);
        box-sizing: border-box;
      }
      .resources{
        margin: 0;
        align-self: start;
        width: 100%;
        height: 80%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 0.3fr;
        grid-gap: 10px;
        text-align: center;
      }
      .payment{
        display: grid;
        grid-template-rows: 1fr 1fr 1fr 1fr;
      }
      @media screen and (max-width: 390px) {
        .resources{
          grid-template-columns: 1fr;
          grid-template-rows: 1fr 1fr 1fr 0.5fr;
          grid-gap: 2%;
          width: 95%;
          height: 100%;
        }
        .payment{
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-template-rows: 1fr;
        }
      }
    `}</style>
    </section>
}
export default HoWork
