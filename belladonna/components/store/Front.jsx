import BuySteps from "./BuySteps"
import Jewelry from "./Jewelry"

const Front = () => {
    return <section className="container">
        
        <h2>Descubre nuestras joyas de acero inoxidable, oro y plata, con una amplia variedad de estilos para elegir.</h2>
        <BuySteps/>
        <Jewelry/>
        <h3>Encontrarás la pieza perfecta para complementar tu look y reflejar tu personalidad única.</h3>
        

        <style jsx>{`

            .container {
                width: 98%;
                height: 30rem;
                justify-self: center;
                align-self: center;
                display: grid;
                grid-row-gap: 30px;
                grid-template-rows: 70px 1fr 0.5fr;
                grid-template-columns: 1fr 1fr;
                grid-gap: 10px;
                box-sizing: border-box;
                justify-items: center;
                align-items: center;
                border-radius: 15px;
                overflow: hidden;
            }

            h2 {
                align-self: flex-start;
                margin: 0;
                grid-row: 1/2;
                grid-column: 1/4;
                color: #312e1c;
                box-sizing: border-box;
                text-align: center;
                font-size: 1.5rem;
                line-height: 150%;
            }

            h3{
                grid-row: 3/4;
                grid-column: 1/3;
                font-size: 1.2rem;
                background: #fdf09a;
                width: 100%;
                height: 100%;
                text-align: center;
                box-sizing: border-box;
                padding-top: 3.5rem;
                border-radius: 15px;
            }

        `}</style>
    </section>
}
export default Front