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
      @media screen and (max-width: 360px) {
        .child{
          width: ${image === "url(/img/front-page/nequi.png)" ? '60%' : '70%'};
          height: ${image === "url(/img/front-page/nequi.png)" ? '100%' : '95%'};
        }
      }
    `}</style>
  </section>
}
export default PayMethods
