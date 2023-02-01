import ButtonStore from "./ButtonStore"

const BuySteps = () => {
    return <article className="container">

        <hgroup>
            <h1>Pasos para hacer tu pedido:</h1>
            <ol>
                <li>
                    Ingresa dando clic en nuestra tienda sea oro y plata o acero.
                </li>
                <li>
                    Elige las joyas que más te gusten.
                </li>
                <li>
                Envía tu pedido por mensaje directo en instagram o por whatsapp.
                </li>
            </ol>
        </hgroup>
        

        <ButtonStore/>

        <style jsx>{`
            .container {
                grid-column: 2/3;
                display: grid;
                grid-template-rows: 1fr 1fr;
                justify-items: center;
                align-items: center;
                width: 95%;
                height: 28.5rem;
                border-left: 2px solid #e7592f;
                box-sizing: border-box;
                padding-left: 10px;
            }

            hgroup{
                grid-row: 1/2;
                display: grid;
                align-items: center;
            }
            h1{
                align-self: flex-start;
                margin: 0;
                font-size: 3rem;
                color: #e7592f;
                text-align: center;
            }
            ol{
                margin: 0;
                font-size: 23px;
                list-style: none;
                counter-reset: li;
            }
            li{
                margin-top: 30px;
            }
            li::before {
                content: counter(li);
                counter-increment: li; 
                color: red;
                display: inline-block; 
                width: 1em;
                margin-left: -1em;
            }
        `}</style>
    </article>
}
export default BuySteps