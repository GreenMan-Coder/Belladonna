const WhatsappButton = ({col, row, children, color, href}) => {
    return <a href={href} target="_blank" rel="noopener noreferrer" className="container">
        
        <div className="icon">
            {children}
        </div>
        <p> whatsapp </p>

        <style jsx>{`
        .container {
                font-family: 'Karla', sans-serif;
                grid-row: ${row};
                grid-column: ${col};
                justify-self: center;
                align-self: flex-end;
                box-sizing: border-box;
                margin: 4.5em 0 0.5em 0;
                outline: none;
                text-decoration: none;
                height: 60px;
                width: 200px;
                border-radius: 50px;
                cursor: pointer;
                text-transform: uppercase;
                background-color: #fefae0;
                border: 0.2px solid green;
                box-sizing: border-box;
                font-weight: 900;
                letter-spacing: -1px;
                transition: letter-spacing 0.4s ease-in-out;
                display: grid;
                grid-template-columns: 0.5fr 1fr;
                align-content: center;
                border-bottom: 5px solid ${color};
            }
            .container:hover {
                animation: buttonRotate 0.7s ease-in-out both;
                letter-spacing: 0px;
            }

            .icon{
                justify-self: center;
                align-self: center;
                grid-column: 1/2;
                width: 2rem;
            }
            p{
                font-size: 21px;
                grid-column: 2/3;
                color: green;
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

            @media (max-width: 1280px){
                .container{
                    margin-top: 6em;
                }
            }
            @media (max-width: 440px){
                .container{
                    margin-top: 6em;
                }
            }
            @media (max-width: 414px){
                .container{
                    margin-top: 5em;
                }
            }
            @media (max-width: 393px){
                .container{
                    margin-top: 4.3em;
                }
            }
            @media (max-width: 375px){
                .container{
                    margin: 0;
                    margin-top: 3em;
                }
            }
        `}</style>
    </a>
}
export default WhatsappButton