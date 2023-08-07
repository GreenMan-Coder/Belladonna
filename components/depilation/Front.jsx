import { useState } from "react"
import HowWork from "./HowWork"

const Front = () => {
  const [hoveredBox, setHoveredBox] = useState(null);

  const handleMouseEnter = (boxId) => {
    setHoveredBox(boxId);
  };

  const handleMouseLeave = () => {
    setHoveredBox(null);
  };

  return <article className="container">
    <h1>depilación belladonna</h1>
    <h2>Exclusivo para mujeres</h2>
    <div className="paragraph">
      <h3>Descubre una experiencia de depilación con cera única. <br/>¡Déjanos consentirte!</h3>
    </div>
    {hoveredBox === '2' ? <h4 className="service">Queremos brindarte un servicio de depilación con cera de la más alta calidad.</h4> : hoveredBox === '0' ? <h4 className="follow">Después de la depilación, nos mantendremos en contacto para verificar la evolución de la piel.</h4> : hoveredBox === '1' ? <h4 className="location">Confirmamos tu cita vía WhatsApp y nuestra profesional brindará un excelente servicio. ¡Visitanos!</h4> : <h4>&bull; ¿Cómo trabajamos? &bull;</h4>}
    <HowWork left="0%" id='2' handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>
    <HowWork left="15%" id='0' handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>
    <HowWork left="-15%"id='1' handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>

    <style jsx>{`
      .container {
        display: grid;
        grid-template-rows: 1fr 0.5fr 1fr;
        justify-items: center;
        align-items: center;
      }
      h1{
        grid-row: 1/2;
        grid-column: 1/2;
        margin: 0;
        padding: 0;
        font-size: 4.5em;
        color: var(--normal-purple);
        text-transform: capitalize;
      }
      h2{
        margin: 0;
        padding: 0;
        grid-row: 1/2;
        grid-column: 1/2;
        align-self: center;
        position: relative;
        top: 27%;
        font-size: 2em;
        color: var(--light-purple);
      }
      .paragraph{
        grid-row: 2/3;
        grid-column: 1/2;
        position: relative;
        width: 95%;
        height: 65%;
        display: grid;
        align-items: center;
        justify-items: center;
        background-color: var(--light-pink);
        border-radius: 5px;
      }
      .paragraph::before,
      .paragraph::after {
        content: "";
        position: absolute;
        left: 0px;
        right: 0px;
        height: 5px;
        background-color: var(--light-pink);
        opacity: 0.5;
      }
      .paragraph::before {
        top: -7px;
      }
      .paragraph::after {
        bottom: -7px;
      }
      .paragraph h3{
        margin: 0;
        padding: 0;
        font-size: 1.5em;
        text-align: center;
        color: var(--normal-purple);
      }
      h4{
        grid-row: 3/4;
        grid-column: 1/2;
        align-self: start;
        position: relative;
        font-size: 1.5em;
        color: var(--tone-pink);
        font-weight: 900;
      }
      .service, .follow, .location{
        grid-row: 3/4;
        grid-column: 1/2;
        align-self: start;
        position: relative;
        font-size: 1.5em;
        font-weight: 100;
        text-align: center;
      }
    `}</style>
  </article>
}
export default Front
