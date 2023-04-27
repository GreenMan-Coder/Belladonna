const JewelryNav = ({row}) => {
    return <div className="container">
            
            <nav className="navMenu">
                <p>oro y plata</p>
                <p>acero inoxidable</p>
                <div className="dot"></div>
            </nav>
        <style jsx>{`

            .container {
                grid-row: ${row};
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                height: auto;
            }
            * {
                margin: 0;
                padding: 0;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
            }
            .navMenu {
                -webkit-transform: translate(-50%, -50%);
                transform: translate(-0%, -0%);
            }
            .navMenu p {
                margin: 0 50px;
                width: auto;
                font-size: 20px;
                color: var(--normal-purple);
                text-transform: uppercase;
                font-weight: 700;
                display: inline-block;
                cursor: pointer;
                -webkit-transition: all 0.2s ease-in-out;
                transition: all 0.2s ease-in-out;
            }
            .navMenu p:hover {
                color: var(--tone-pink);
            }
            .navMenu .dot {
                width: 6px;
                height: 6px;
                background: var(--tone-pink);
                border-radius: 50%;
                opacity: 0;
                -webkit-transform: translateX(50px);
                transform: translateX(50px);
                -webkit-transition: all 0.2s ease-in-out;
                transition: all 0.2s ease-in-out;
            }
            .navMenu p:nth-child(1):hover ~ .dot {
                -webkit-transform: translateX(104px);
                transform: translateX(104px);
                -webkit-transition: all 0.2s ease-in-out;
                transition: all 0.2s ease-in-out;
                opacity: 1;
            }
            .navMenu p:nth-child(2):hover ~ .dot {
                -webkit-transform: translateX(350px);
                transform: translateX(350px);
                -webkit-transition: all 0.2s ease-in-out;
                transition: all 0.2s ease-in-out;
                opacity: 1;
            }
            .navMenu p:nth-child(3):hover ~ .dot {
                -webkit-transform: translateX(200px);
                transform: translateX(200px);
                -webkit-transition: all 0.2s ease-in-out;
                transition: all 0.2s ease-in-out;
                opacity: 1;
            }
            .navMenu p:nth-child(4):hover ~ .dot {
                -webkit-transform: translateX(285px);
                transform: translateX(285px);
                -webkit-transition: all 0.2s ease-in-out;
                transition: all 0.2s ease-in-out;
                opacity: 1;
            }
        `}</style>
    </div>
}
export default JewelryNav