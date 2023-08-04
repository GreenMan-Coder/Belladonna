const PayMethods = ({image, tam}) => {
    return <section className="container">

        <div className="child" title="Método de pago aceptado">

        </div>

        <style jsx>{`
            .container {
                width: 100%;
                height: 100%;
                box-sizing: border-box:
                border: 1px solid blue;
                display: grid;
                justify-items: center;
                align-items: center;
                border-left: 1px solid var(--tone-purple);
            }
            .child{
                width: 70%;
                height: 90%;
                background-image: ${image};
                background-repeat: no-repeat;
                background-position: center;
                background-size: ${tam};
                background-attachment: local;
            }
            .child:hover{
              cursor: grabbing;
            }
        `}</style>
    </section>
}
export default PayMethods
