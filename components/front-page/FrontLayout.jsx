const FrontLayout = ({row}) => {
  return <section className="container">
    <hgroup>
      <h3>Bienvenida a</h3>
      <h1>BELLA<span>DONNA</span></h1>
      <p>Excelencia y profesionalismo en depilación con cera: Tu piel, nuestro <span>compromiso</span>.</p>
    </hgroup>
    <style jsx>{`
      .container {
        position: relative;
        grid-row: ${row};
        font-family: var(--font);
        background-image: url(/img/front-page/woman-front.png);
        background-repeat: no-repeat;
        background-attachment: local;
        z-index: 0;
        display: grid;
        justify-items: center;
        align-items: center;
      }
      hgroup{
        margin: 0;
        box-sizing: border-box;
        color: var(--normal-purple);
        display: grid;
        justify-items: center;
        align-items: center;
      }
      h1{
        box-sizing: border-box;
        font-weight: 700;
        margin: 0;
      }
      h3{
        margin: 0;
        box-sizing: border-box;
        color: var(--tone-purple);
        opacity: 0.8;
      }
      p{
        box-sizing: border-box;
        margin: 0;
        color: var(--light-purple);
        background-color: var(--tone-purple);
        text-align: center;
        opacity: 0.8;
        align-self: end;
        height: 50%;
        width: 100%;
      }

      @media screen and (min-width: 2500px){
        .container {
          height: 100vh;
          min-height: 106em;
          max-height: 110em;
          width: 100%;
          background-position: right -20% bottom 0%;
          background-size: 63%;
          box-sizing: border-box;
        }
        hgroup{
          width: 100%;
          height: 100%;
        }
        h1{
          font-size: 20rem;
          align-self: center;
          position: relative;
          top: 10rem;
        }
        span{
          opacity: 0.8;
        }
        h3{
          font-size: 6rem;
          justify-self: start;
          align-self: end;
          position: relative;
          bottom: -4em;
          left: 3%;
        }
        p{
          height: 50%;
          font-size: 4.3rem;
          padding: 0;
          padding: 30px 20px 0 20px;
        }
      }

      @media screen and (max-width: 2415px){
        .container {
          min-height: 105em;
          max-height: 106em;
          background-position: right -30% bottom 0%;
          background-size: 65%;
        }
        h1{
          font-size: 18.5rem;
          top: 9rem;
        }
        h3{
          font-size: 5.5rem;
          bottom: -4.3em;
        }
        p{
          height: 35%;
          font-size: 4rem;
          padding: 30px 20px 0 20px;
        }
      }

      @media screen and (max-width: 2255px){
        .container{
          min-height: 90.5em;
          max-height: 90.5em;
          background-position: right -20% bottom 0%;
          background-size: 58%;
        }
        h1{
          font-size: 17rem;
          top: 10rem;
        }
        h3{
          font-size: 5.3rem;
          bottom: -4.3em;
        }
        p{
          height: 35%;
          font-size: 3.5rem;
          padding: 30px 20px 0 20px;
        }
      }

      @media screen and (max-width: 2088px){
        .container{
          min-height: 85em;
          max-height: 85em;
          background-position: right -20% bottom 0%;
          background-size: 58%;
        }
        h1{
          font-size: 15rem;
        }
        h3{
          font-size: 4.7rem;
          bottom: -4.7em;
          left: 5%;
        }
        p{
          font-size: 3.3rem;
        }
      }

      @media screen and (max-width: 1935px){
        .container{
          min-height: 81em;
          max-height: 81em;
        }
        h1{
          font-size: 14rem;
        }
        h3{
          font-size: 4.7rem;
          bottom: -4.6em;
          left: 5%;
        }
        p{
          font-size: 3rem;
        }
      }

      @media screen and (max-width: 1795px){
        .container{
          min-height: 72em;
          max-height: 72em;
          background-position: right -15% bottom 0%;
          background-size: 55%;
        }
        h1{
          font-size: 13.5rem;
          top: 8rem;
        }
        h3{
          font-size: 4.5rem;
          bottom: -4em;
          left: 5%;
        }
        p{
          font-size: 2.7rem;
        }
      }

      @media screen and (max-width: 1749px){
        h3{
          left: 2%;
        }
        p{
          font-size: 2.6rem;
        }
      }

      @media screen and (max-width: 1675px){
        .container{
          min-height: 68em;
          max-height: 68em;
        }
      }

      @media screen and (max-width: 1615px){
        .container{
          min-height: 66em;
          max-height: 66em;
        }
        h3{
          font-size: 4em;
        }
        h1{
          font-size: 12.5rem;
          top: 6.5rem;
        }
        p{
          font-size: 2.6rem;
        }
      }

      @media screen and (max-width: 1561px){
        .container{
          min-height: 60em;
          max-height: 60em;
          background-position: right -10% bottom 0%;
          background-size: 50%;
        }
        h3{
          font-size: 3.8em;
          top: 95%;
        }
        h1{
          font-size: 12.2rem;
          top: 8rem;
        }
        p{
          font-size: 2.3rem;
        }
      }

      @media screen and (max-width: 1470px){
        .container{
          min-height: 57.3em;
          max-height: 57.3em;
        }
        h3{
          font-size: 3.6em;
          top: 16rem;
        }
        h1{
          font-size: 11.5rem;
        }
        p{
          font-size: 2.2rem;
        }
      }

      @media screen and (max-width: 1385px){
        .container{

        }
        h3{

        }
        h1{

        }
        p{

        }
      }
    `}</style>
  </section>
}
export default FrontLayout
