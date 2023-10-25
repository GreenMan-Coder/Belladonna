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
      @media screen and (max-width: 415px) {
        .child{
          width: ${image === "url(/img/front-page/nequi.png)" ? '60%' : '70%'};
          height: ${image === "url(/img/front-page/nequi.png)" ? '100%' : '95%'};
        }
      }
    `}</style>
  </section>
}
export default PayMethods
