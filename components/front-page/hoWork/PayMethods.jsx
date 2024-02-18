const PayMethods = ({ image, tam }) => {
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
                background-image: ${image};
                background-repeat: no-repeat;
                background-position: center;
                background-attachment: local;
                width: 100%;
                height: 100%;
                background-size: ${image === 'url(/img/front-page/nequi.png)' ? '5em' : image === 'url(/img/front-page/pse.png)' ? '8.5em' : image === 'url(/img/front-page/daviplata.png)' ? '8em' : '7em'};
            }

            @media screen and (max-width: 2500px){
            }
        `}</style>
    </section>
}
export default PayMethods
