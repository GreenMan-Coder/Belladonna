const Menu = ({col}) => {
    return <section className="container">


        <div className="container2">
            <h1>ESTETICISTA DE CONFIANZA</h1>
        </div>

        <style jsx>{`

            .container {
                grid-row: ${col};
                align-self: center;
                justify-self: center;
            }

            h1 {
                font-size: 20px;
                text-transform: uppercase;
                letter-spacing: -1px;
                transition: 700ms ease;
                color: #fefae0;
                outline: none;
                text-align: center;
            }

            h1:hover {
            letter-spacing: 1px;
            }
        `}</style>
    </section>
}

export default Menu