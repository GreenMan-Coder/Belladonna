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
        width: 20%;
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
      @media screen and (max-width: 2410px) {
        .container{
          background-position: 105% 100%;
          background-size: 34%;
        }
        hgroup{
          margin: 0;
          left: 0;
          height: 100%;
          width: 100%;
          display: grid;
          grid-template-rows: 0.4fr 1fr;
        }
        h1{
          grid-row: 2/3;
          grid-column: 1/2;
          font-size: 17em;
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
          position: relative;
          top: 20%;
          left: 5%;
          align-self: end;
          font-size: 3.50em;
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
          font-size: 2.5em;
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
      @media screen and (max-width: 2334px) {
        .container{
          background-size: 33%;
        }
        h1{
          font-size: 15em;
        }
        h3{
          top: 20%;
          left: 9%;
          font-size: 3.2em;
        }
        p{
          font-size: 2.2em;
        }
      }
      @media screen and (max-width: 2282px) {
        .container{
          background-size: 34%;
        }
        h1{
          font-size: 13em;
        }
        h3{
          top: 18%;
          left: 13%;
          font-size: 3.2em;
        }
        p{
          font-size: 2.1em;
        }
      }
      @media screen and (max-width: 2202px) {
        .container{
          background-size: 35%;
        }
        h3{
          top: 17%;
          left: 11.5%;
          font-size: 3.2em;
        }
      }
      @media screen and (max-width: 2134px) {
        .container{
          background-size: 39%;
        }
        h1{
          font-size: 12em;
        }
        h3{
          top: 16%;
          left: 13%;
          font-size: 3.2em;
        }
      }
      @media screen and (max-width: 2090px) {
        .container{
          background-size: 39%;
        }
        h3{
          top: 16%;
          left: 12%;
          font-size: 3.05em;
        }
      }
      @media screen and (max-width: 2028px) {
        .container{
          background-size: 41%;
        }
      }
      @media screen and (max-width: 2023px) {
        .container{
          background-size: 42%;
        }
      }
      @media screen and (max-width: 2010px) {
        .container{
          background-size: 42%;
        }
      }
      @media screen and (max-width: 2000px) {
        .container{
          background-size: 42%;
        }
        h3{
          top: 15%;
          left: 10%;
          font-size: 3.05em;
        }
      }
      @media screen and (max-width: 1989px) {
        .container{
          background-size: 43%;
        }
      }
      @media screen and (max-width: 1940px) {
        h3{
          top: 15%;
          left: 9%;
          font-size: 3.05em;
        }
      }
      @media screen and (max-width: 1904px) {
        .container{
          background-size: 43%;
        }
        h3{
          top: 15%;
          left: 9%;
          font-size: 3.05em;
        }
      }
      @media screen and (max-width: 1882px) {
        h1{
          font-size: 12em;
        }
        h3{
          width: 20%;
          top: 16%;
          left: 7%;
        }
        p{
          font-size: 2em;
        }
      }
      @media screen and (max-width: 1790px) {
        .container{
          background-size: 45%;
        }
        h1{
          font-size: 12em;
        }
        h3{
          width: 20%;
          top: 16%;
          left: 5%;
        }
      }
      @media screen and (max-width: 1718px) {
        .container{
          background-size: 46%;
        }
        h1{
          font-size: 11em;
        }
        h3{
          left: 7%;
        }
      }
      @media screen and (max-width: 1707px) {
        h3{
          font-size: 2.7em;
          top: 14%;
          left: 6%;
        }
      }
      @media screen and (max-width: 1651px) {
        .container{
          background-size: 49%;
        }
      }
      @media screen and (max-width: 1631px) {
        h3{
          font-size: 2.55em;
          top: 10%;
          left: 7.5%;
        }
        h1{
          font-size: 10em;
        }
      }
      @media screen and (max-width: 1559px) {
        .container{
          background-size: 53%;
        }
        h3{
          font-size: 2.55em;
          top: 10%;
          left: 6%;
        }
      }
      @media screen and (max-width: 1499px) {
        h3{
          font-size: 2.55em;
          top: 10%;
          left: 5%;
        }
      }
      @media screen and (max-width: 1485px) {
        .container{
          background-size: 55%;
        }
        h3{
          width: 30%;
          left: 4%;
        }
      }
      @media screen and (max-width: 1437px) {
        .container{
          background-size: 58%;
        }
        h3{
          width: 30%;
          left: 4%;
        }
        h1{
          font-size: 9.5em;
        }
      }
      @media screen and (max-width: 1377px) {
        .container{
          background-size: 58%;
        }
        h3{
          width: 30%;
          left: 2%;
        }
      }
      @media screen and (max-width: 1333px) {
        .container{
          background-size: 50%;
        }
        h1{
          font-size: 10em;
        }
        h3{
          left: 5%;
        }
      }
      @media screen and (max-width: 1241px) {
        .container{
          background-size: 55%;
        }
        h1{
          font-size: 10em;
        }
        h3{
          left: 3%;
        }
        p{
          font-size: 1.85em;
        }
      }
      @media screen and (max-width: 1189px) {
        .container{
          background-size: 55%;
        }
        h1{
          font-size: 9em;
        }
        h3{
          top: 8%;
          left: 5.5%;
        }
        p{
          font-size: 1.7em;
        }
      }
      @media screen and (max-width: 1133px) {
        h1{
          font-size: 8.5em;
        }
        p{
          font-size: 1.75em;
        }
      }
      @media screen and (max-width: 1097px) {
        .container{
          background-size: 60%;
        }
      }
      @media screen and (max-width: 1069px) {
        h1{
          font-size: 8em;
        }
        p{
          font-size: 1.69em;
        }
      }
      @media screen and (max-width: 1013px) {
        .container{
          background-size: 65%;
        }
        h1{
          position: relative;
          top: 8%;
          font-size: 7.6em;
        }
        h3{
          top: 28%;
        }
        p{
          font-size: 1.6em;
        }
      }
      @media screen and (max-width: 957px) {
        .container{
          background-size: 70%;
        }
        h1{
          top: 4%;
          font-size: 7.2em;
        }
        h3{
          top: 18%;
        }
        p{
          font-size: 1.5em;
        }
      }
      @media screen and (max-width: 910px) {
        .container{
          background-size: 73%;
        }
        h1{
          top: 8%;
          font-size: 7.2em;
        }
        h3{
          top: 27%;
          left: 2%;
        }
        p{
          font-size: 1.5em;
        }
      }
      @media screen and (max-width: 540px) {
        .container{
          background-position: 8em 100%;
          background-size: 100%;
          display: grid;
          justify-items: center;
          align-items: center;
        }
        hgroup{
          margin: 0;
          left: 0;
          height: 100%;
          display: grid;
          grid-template-rows: 0.4fr 1fr;
        }
        h1{
          grid-row: 2/3;
          grid-column: 1/2;
          font-size: 7.5em;
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
          position: relative;
          left: 1.5%;
          top: 7%;
          align-self: end;
          font-size: 4.5em;
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
          font-weight: 900;
          color: var(--light-purple);
        }
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
