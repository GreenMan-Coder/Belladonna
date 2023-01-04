const ButtonContact = ({text, col}) => {
    return <button className="container">

        {text}

        <style jsx>{`

            .container {
                outline: none;
                text-decoration: none;
                height: 45px;
                width: 130px;
                border-radius: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                text-transform: uppercase;
                opacity: 1;
                background-color: #ffffff;
                border: 1px solid rgba(0, 0, 0, 0.6);
            }
            .container:hover {
            animation: buttonRotate 0.7s ease-in-out both;
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