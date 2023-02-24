const WhatsappButton = ({children, color, href}) => {
    return <a href={href} target="_blank" rel="noopener noreferrer" className="container">
        
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
                align-self: flex-end;
                outline: none;
                text-decoration: none;
                height: 50px;
                width: 150px;
                border-radius: 50px;
                margin-bottom: 15px;
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
                border-bottom: 5px solid ${color};
            }
            .container:hover {
                animation: buttonRotate 0.7s ease-in-out both;
                letter-spacing: 0px;
            }

            .icon{
                grid-column: 1/2;
                width: 35px;
                justify-self: start;
                padding-left: 15px;
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
    </a>
}
export default WhatsappButton