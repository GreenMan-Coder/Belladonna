const FrontLayout = ({row}) => {
  return <section className="container">
    <hgroup>
      <h3>Bienvenida a</h3>
      <h1>BELLA<span>DONNA</span></h1>
      <p>Excelencia y profesionalismo en depilación con cera: Tu piel, nuestro <span>compromiso</span>.</p>
    </hgroup>
    <style jsx>{`
      .container {
        position: absolute;
        grid-row: ${row};
        font-family: var(--font);
        width: 100%;
        height: 100%;
        background-image: url(/img/front-page/woman-front.png);
        background-repeat: no-repeat;
        background-position: right 0% bottom 0%;
        background-size: 40%;
        background-attachment: local;
        z-index: 0;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
      }
      hgroup{
        margin: 0;
        position: relative;
        left: var(--left);
        box-sizing: border-box;
        color: var(--normal-purple);
      }
      h1{
        font-size: 130px;
        font-weight: 700;
        margin: 0;
        color: var(--normal-purple);
      }
      span{
        opacity: 0.7;
      }
      h3{
        margin: 0;
        margin-bottom: -18px;
        font-size: 1.5em;
        color: var(--tone-purple);
        opacity: 0.8;
      }
      p{
        margin: 0;
        position: relative;
        top: 15%;
        width: 80%;
        font-size: 1.35em;
        color: var(--light-purple);
      }
      p span{
        opacity: 0.7;
        font-weight: 700;
        color: var(--normal-purple);
      }
      @media screen and (max-width: 415px) {
        .container{
          background-position: 20% 100%;
          background-size: 150%;
          display: grid;
          justify-items: center;
          align-items: center;
        }
        hgroup{
          border: 1px solid green;
          margin: 0;
          left: 0;
          height: 100%;
          display: grid;
          grid-template-rows: 0.4fr 1fr;
        }
        h1{
          grid-row: 2/3;
          grid-column: 1/2;
          font-size: 6em;
          justify-self: center;
          align-self: start;
        }
        span{
          opacity: 0.7;
        }
        h3{
          grid-row: 1/2;
          grid-column: 1/2;
          margin: 0;
          align-self: end;
          font-size: 3em;
          color: var(--tone-purple);
          opacity: 0.8;
        }
        p{
          grid-row: 2/3;
          grid-column: 1/2;
          margin: 0;
          box-sizing: border-box;
          padding: 3% 0;
          align-self: end;
          top: 0;
          width: 100%;
          font-size: 2.3em;
          color: var(--light-purple);
          background-color: var(--tone-purple);
          text-align: center;
          opacity: 0.8;
        }
        p span{
          opacity: 1;
          font-weight: 700;
          color: var(--light-purple);
        }
      }
    `}</style>
  </section>
}
export default FrontLayout
