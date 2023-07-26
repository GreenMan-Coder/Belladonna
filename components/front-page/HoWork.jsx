import Header from "../header/Header"
import ResourcesCard from "./hoWork/ResourcesCard"
import PayMethods from "./hoWork/PayMethods"

const HoWork = ({row}) => {
    return <section className="container">

    <div className="header">
      <h1>Descubre nuestro trabajo</h1>
      <p>Disfruta de la mejor depilación profesional en Bogotá. Reserva tu cita y vive una experiencia única con nuestro dedicado equipo de expertas. ¡Embárcate en un viaje de cuidado y bienestar!</p>
    </div>

    <div className="resources">
      <ResourcesCard url="url(/img/front-page/home.jpeg)" tam="100%" title="UBICACIÓN" text="Confirmamos tu cita previamente acordada vía WhatsApp de 5 a 3 horas antes. Nuestro equipo de especialistas brindará un excelente servicio en la comodidad de tu hogar o en nuestro punto físico. Sujeto a disponibilidad." pos="center" top="40px"/>
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
        display: flex;
        flex-direction: column;
        text-align: center;
        font-family: var(--font);
        box-sizing: border-box;
      }
      .header{
        width: 100%;
        height: 60%;
        flex-grow: 1;
      }
      h1{
        margin: 0;
        flex-grow: 1;
        font-size: 60px;
        font-weight: 700;
        color: var(--tone-purple);
      }
      p{
        width: 100%;
        flex-grow: 7;
        font-size: 18px;
        color: var(--normal-purple);
        box-sizing: border-box;
        margin: 0;
        padding: 15px var(--left) 0 var(--left);
      }
      .resources{
        flex-grow: 12;
        width: 100%;
        height: 80%;
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
