const ButtonContact = ({text, col, children, pos, left, right}) => {
    return <button className="container">

        <div className="icon">
            {children}
        </div>
        {text}

        <style jsx>{`

            .container {
                font-family: 'Karla', sans-serif;
                grid-column: ${col};
                display: flex;
                justify-content: center;
                align-items: center;
                align-self: flex-end;
                justify-self: ${pos};
                outline: none;
                text-decoration: none;
                height: 80px;
                width: 200px;
                border-radius: 50px;
                cursor: pointer;
                text-transform: uppercase;
                background-color: #fefae0;
                border: 1px solid rgba(0, 0, 0, 0.6);
                box-sizing: border-box;
                margin-bottom: 5rem;
                margin-left: ${left};
                margin-right: ${right};
                font-size: 18px;
                font-weight: 800;
                letter-spacing: -1px;
                transition: letter-spacing 0.4s ease-in-out;
            }
            .container:hover {
            animation: buttonRotate 0.7s ease-in-out both;
            letter-spacing: 0px;
            }

            .icon{
                width: 35px;
                margin-right: 10px;
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

export default ButtonContact