const PayMethods = ({ image }) => {
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
                width: 9em;
                height: 100%;
                background-size: ${image === 'url(/img/front-page/nequi.png)' ? '2.8em' : image === 'url(/img/front-page/pse.png)' ? '6em' : image === 'url(/img/front-page/daviplata.png)' ? '5em' : '4em'};
            }

            @media screen and (max-width: 870px){
                .container{
                  min-height: 9em;
                }

                .child{
                    background-size: ${image === 'url(/img/front-page/nequi.png)' ? '5em' : image === 'url(/img/front-page/pse.png)' ? '10em' : image === 'url(/img/front-page/daviplata.png)' ? '8.5em' : '8em'};
                }
            }
        `}</style>
    </section>
}
export default PayMethods
