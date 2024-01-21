const FrontLayout = ({row}) => {
  return <section className="container">
    <hgroup>
      <h3>Bienvenida a</h3>
      <h1>BELLA<span>DONNA</span></h1>
    </hgroup>
    <p>Excelencia y profesionalismo en depilación con cera: Tu piel, nuestro <span>compromiso</span>.</p>
    <style jsx>{`
      .container {
        position: relative;
        grid-row: ${row};
        font-family: var(--font);
        background-image: url(/img/front-page/woman-front.png);
        background-repeat: no-repeat;
        background-attachment: local;
        z-index: 0;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
      }
      hgroup{
        margin: 0;
        box-sizing: border-box;
        color: var(--normal-purple);
      }
      h1{
        font-weight: 700;
        margin: 0;
      }
      span{

      }
      h3{
        width: 20%;
        margin: 0;
        margin-bottom: -18px;
        font-size: 1.5em;
        color: var(--tone-purple);
        opacity: 0.8;
        border: 1px solid green;
      }
      p{
        margin: 0;
        color: var(--light-purple);
        background-color: var(--tone-purple);
        text-align: center;
        opacity: 0.8;
      }

      @media screen and (max-width: 2500px) and (max-height: 3840px) {
        .container {
          height: 45vh;
          background-position: right -5% bottom 0%;
          background-size: 50%;
        }
        hgroup{
          position: relative;
          align-self: center;
          width: 100%;
          display: grid;
          grid-template-rows: 1fr 3fr;
          justify-items: center;
          border: 1px solid green;
        }
        h1{
          grid-row: 2/3;
          grid-column: 1/2;
          font-size: 22rem;
          justify-self: center;
          align-self: center;
        }
        h3{
          grid-row: 1/2;
          grid-column: 1/2;
          font-size: 5.5em;
          opacity: 0.8;
          justify-self: start;
          align-self: end;
          position: relative;
          left: 5%;
        }
        p{
          font-size: 4.3em;
          width: 100%;
          position: absolute;
          bottom: 0;
          box-sizing: border-box;
          padding: 2% 0;
        }
      }
      @media screen and (max-width: 2500px) and (max-height: 3640px) {
        .container {
          background-size: 45%;
          background-position: right -5% bottom 0%;
        }
      }
      @media screen and (max-width: 2500px) and (max-height: 3340px) {
        .container {
          background-size: 40%;
          background-position: right -5% bottom 0%;
        }
      }
      @media screen and (max-width: 2500px) and (max-height: 3060px) {
        .container {
          background-size: 37%;
        }
      }
      @media screen and (max-width: 2500px) and (max-height: 2870px) {
        .container {
          background-size: 35%;
        }
      }
      @media screen and (max-width: 2500px) and (max-height: 2750px) {
        .container {
          background-size: 33%;
        }
      }
      @media screen and (max-width: 2500px) and (max-height: 2640px) {
        .container {
          min-height: 74rem;
        }
      }
      @media screen and (max-width: 2500px) and (max-height: 2590px) {
        .container {
          background-size: 35%;
          background-position: right 10% bottom 0%;
          min-height: 86rem;
        }
      }
      @media screen and (max-width: 2500px) and (max-height: 2560px) {
        .container {
          background-size: 46%;
          background-position: right 0% bottom 0%;
        }
        h1{
          font-size: 18.5rem;
        }
        h3{
          font-size: 4.7rem;
        }
        p{
          font-size: 4.2em;
        }
      }
    `}</style>
  </section>
}
export default FrontLayout
