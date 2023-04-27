const Tittle = ({row}) => {
    return <div className="container">

            <h1>Joyería Belladonna</h1>

        <style jsx>{`
            .container {
                position: relative;
                grid-row: ${row};
                width: 100%;
                height: 100%;
                overflow: hidden;
                box-sizing: border-box;
            }
            h1{
                position: relative;
                margin: 0;
                margin: 0.1em 5px;
                font-size: 6.5em;
                font-weight: 900;
                color: #f7c0fc;
                text-shadow: 
                    -0.0075em 0.0075em 0 #fff,
                    0.005em 0.005em 0 #ffc1e1,
                    0.01em 0.01em 0 #ffa7d5, 
                    0.015em 0.015em #ef97f7, 
                    0.02em 0.02em 0 #ef97f7, 
                    0.025em 0.025em 0 #ef97f7,
                    0.03em 0.03em 0 #ef97f7,
                    0.035em 0.035em 0 #ef97f7;
                animation: slideIn 2s forwards;
            }


            @keyframes slideIn {
                from {
                    left: -100%;
                }
                to {
                    left: 5.6%;
                }
            }
        `}</style>
    </div>
}
export default Tittle