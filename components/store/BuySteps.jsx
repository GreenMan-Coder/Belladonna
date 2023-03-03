import ButtonStore from "./Jewelry"

const BuySteps = ({row}) => {
    return <div className="container">

        <h1>Pasos para realizar pedido:</h1>
        <ol>
            <li>
                Explora nuestra tienda online de joyas.
            </li>
            <li>
                Elige entre una amplia variedad.
            </li>
            <li>
                Haz tu pedido fácilmente dando clic en el botón o por mensaje directo en las redes sociales.
            </li>
        </ol>
        <h4 align="right">Pago contra entrega.</h4>

        <style jsx>{`

            .container{
                grid-row: ${row};
                justify-self: center;
                align-self: center;
                width: 40%;
                height: auto;
                box-sizing: border-box;
                background-color: transparent;
                background-image: linear-gradient(
                        -45deg,
                        transparent,
                        transparent 2%,
                        white 2%,
                        white 85%,
                        transparent,
                        85%,
                        transparent
                    ),
                    linear-gradient(to bottom right, #fdf09a, #fdf09a 90%, transparent 90%);
                background-position: top left, 0.2em 0.2em;
                background-repeat: no-repeat;
                filter: drop-shadow(0 0 15px #0005);
                padding: 1rem;
            }
            .container::before,
            .container::after {
                position: absolute;
                z-index: -1;
                display: block;
                width: 3rem;
                height: 4rem;
                content: "";
                z-index: 0;
                font-size: 6rem;
                font-family: Georgia, Times, Garamond, serif;
            }
            .container::before {
                top: -1.5rem;
                left: 1rem;
                content: open-quote;
            }
            .container::after {
                bottom: -2.30rem;
                right: 1rem;
                content: close-quote;
            }
            .container::before,
            .container::after {
                text-shadow: -2px 2px #fff, -1.5px 1.5px #fff, -1px 1px #fff, -0.5px 0.5px #fff;
            }

            ol{
                margin: 0;
                font-size: 1rem;
                list-style: none;
                counter-reset: li;
                padding-left: 1rem;
            }
            li{
                margin-top: 10px;
            }
            li::before {
                content: counter(li);
                counter-increment: li; 
                color: #b8a633;
                display: inline-block; 
                width: 1em;
            }

            h1{
                font-size: 1.7rem;
                font-weight: 900;
            }
            h4{
                font-size: 1.2rem;
                font-weight: 800;
            }

            @media (max-width: 1212px){
                .container{
                    grid-row: 3/4;
                    grid-column: 1/3;
                }
            }
            
        `}</style>
    </div>
}
export default BuySteps