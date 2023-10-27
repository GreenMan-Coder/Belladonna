const PayMethods = ({image, tam}) => {
  return <section className="container">
    <div className="child" title="Método de pago aceptado"></div>
    <style jsx>{`
      .container {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: grid;
        justify-items: center;
        align-items: center;
      }
      .child{
        width: 70%;
        height: 95%;
        background-image: ${image};
        background-repeat: no-repeat;
        background-position: center;
        background-size: ${tam};
        background-attachment: local;
      }
      @media screen and (max-width: 2410px) {
        .child{
          width: ${image === "url(/img/front-page/nequi.png)" ? '54%' : '65%'};
          height: ${image === "url(/img/front-page/nequi.png)" ? '100%' : '95%'};
        }
      }
      @media screen and (max-width: 1642px) {
        .child{
          width: ${image === "url(/img/front-page/nequi.png)" ? '80%' : '100%'};
          height: ${image === "url(/img/front-page/nequi.png)" ? '100%' : '100%'};
        }
      }
      @media screen and (max-width: 1314px) {
        .child{
          width: ${image === "url(/img/front-page/nequi.png)" ? '73%' : '85%'};
          height: ${image === "url(/img/front-page/nequi.png)" ? '100%' : '95%'};
        }
      }
      @media screen and (max-width: 1146px) {
        .child{
          width: ${image === "url(/img/front-page/nequi.png)" ? '85%' : '98%'};
          height: 100%;
        }
      }
      @media screen and (max-width: 910px) {
        .child{
          width: ${image === "url(/img/front-page/nequi.png)" ? '40%' : '50%'};
          height: 100%;
          box-sizing: border-box;
          padding: 20% 0;
        }
      }
      @media screen and (max-width: 670px) {
        .child{
          width: ${image === "url(/img/front-page/pse.png)" ? '80%' : image === "url(/img/front-page/daviplata.png)" ? '70%' : image === "url(/img/front-page/nequi.png)" ? '45%' : '50%'};
          height: 100%;
          box-sizing: border-box;
          padding: 20% 0;
        }
      }
      @media screen and (max-width: 460px) {
        .child{
          width: ${image === "url(/img/front-page/pse.png)" ? '100%' : image === "url(/img/front-page/daviplata.png)" ? '80%' : image === "url(/img/front-page/nequi.png)" ? '55%' : '50%'};
          height: 100%;
          box-sizing: border-box;
          padding: 20% 0;
        }
      }
      @media (max-height: 450px) {
        .child{
          width: ${image === "url(/img/front-page/pse.png)" ? '95%' : image === "url(/img/front-page/daviplata.png)" ? '80%' : image === "url(/img/front-page/nequi.png)" ? '58%' : '70%'};
        }
      }
    `}</style>
  </section>
}
export default PayMethods
