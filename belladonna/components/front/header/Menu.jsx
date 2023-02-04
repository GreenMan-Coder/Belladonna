const Menu = ({col}) => {
    return <section className="container">


        <ul>
            <li>Depilación para mujeres</li>
            <li>Tienda</li>
            <li>Belladonna</li>

        </ul>

        <style jsx>{`

            .container {
                grid-column: ${col};
                display: grid;
                
            }
            ul{
                width: 55rem;
                padding: 0;
                margin: 0;
                justify-self: center;
                align-self: center;
                display: grid;
                grid-template-columns: 1.8fr 1fr 1fr;
                justify-items: center;
                align-self: center;
            }

            li{
                display: inline;
            }
            li:hover{
                cursor: pointer;
            }

        `}</style>
    </section>
}

export default Menu