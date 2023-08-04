import HowWork from "./HowWork"

const Front = () => {
  return <article className="container">
    <h1>depilación belladonna</h1>
    <h2>Exclusivo para mujeres</h2>
    <div className="paragraph">
      <h3>Descubre una experiencia de depilación con cera única. <br/>¡Déjanos consentirte!</h3>
    </div>
    <h4>&bull; ¿Cómo trabajamos? &bull;</h4>

    <HowWork left="0%" id="2"/>
    <HowWork left="15%" id=""/>
    <HowWork left="-15%"id="1"/>

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
        color: var(--light-pink);
        font-weight: 900;
      }
    `}</style>
  </article>
}
export default Front
