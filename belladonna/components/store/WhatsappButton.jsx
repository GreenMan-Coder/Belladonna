const WhatsappButton = ({children}) => {
    return <button className="container">
        
        <div className="icon">
            {children}
        </div>
        <p> whatsapp </p>

        <style jsx>{`
        .container {
                font-family: 'Karla', sans-serif;
                grid-row: 2/3;
                grid-column: 2/4;
                justify-self: center;
                align-self: center;
                outline: none;
                text-decoration: none;
                height: 50px;
                width: 150px;
                border-radius: 50px;
                cursor: pointer;
                text-transform: uppercase;
                background-color: #fefae0;
                border: 0.2px solid green;
                box-sizing: border-box;
                font-size: 15px;
                font-weight: 800;
                letter-spacing: -1px;
                transition: letter-spacing 0.4s ease-in-out;
                display: grid;
                grid-template-columns: 0.5fr 1fr;
            }
            .container:hover {
                animation: buttonRotate 0.7s ease-in-out both;
                letter-spacing: 0px;
            }

            .icon{
                grid-column: 1/2;
                width: 35px;
                justify-self: start;
                padding-left: 5px;
            }
            p{
                grid-column: 2/3;
                justify-self: center;
                align-self: center;
                color: green
            }


            @keyframes buttonRotate {
                0% {
                    transform: rotate(0deg) translate3d(0, 0, 0);
                }
                25% {
                    transform: rotate(3deg) translate3d(0, 0, 0);
                }
                50% {
                    transform: rotate(-3deg) translate3d(0, 0, 0);
                }
                75% {
                    transform: rotate(1deg) translate3d(0, 0, 0);
                }
                100% {
                    transform: rotate(0deg) translate3d(0, 0, 0);
                }
            }
        `}</style>
    </button>
}
export default WhatsappButton