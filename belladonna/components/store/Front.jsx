import ButtonStore from "./ButtonStore"
import BuySteps from "./BuySteps"

const Front = () => {
    return <section className="container">
        
        <hgroup>
            <h1>!BIENVENIDAS A MI TIENDA!</h1>
            <h3>En esta sección encontrarás joyeria en acero, oro y plata.</h3>
            <p>Elige lo que quieras y ¡haz tu pedido!</p>
            <ButtonStore/>
            <ButtonStore/>
        </hgroup>

        <BuySteps/>

        <style jsx>{`

            .container {
                width: 95%;
                height: 30rem;
                justify-self: center;
                align-self: center;
                display: grid;
                grid-template-columns: 1fr 1fr;
                box-sizing: border-box;
                border-radius: 10px;
                justify-items: center;
                align-items: center;
            }

            hgroup{
                grid-column: 1/2;
                display: grid;
                grid-template-rows: 11rem 6rem 5rem 5rem;
                align-self: center;
                align-items: center;
                box-sizing: border-box;
                padding-right: 15px;

            }
            h1{
                margin: 0;
                grid-row: 1/2;
                font-size: 5rem;
                color: #e7592f;
                text-align: center;
            }
            h3{
                margin: 0;
                font-size: 2rem;
                grid-row: 2/3;
                text-align: center;
                align-self: flex-end;
            }
            p{
                grid-row: 3/4;
                font-size: 2rem;
                font-weight: 900;
                color: #e7592f;
                text-align: center;
            }

        `}</style>
    </section>
}
export default Front