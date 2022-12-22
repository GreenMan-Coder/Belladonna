const Menu = ({col}) => {
    return <section className="container">


        <ul>
            <li>Depilación para mujeres</li>
            <li>Tienda</li>
            <li>Belladonna</li>
            <li>Blog</li>
            <li>Contacto</li>

        </ul>

        <style jsx>{`

            .container {
                grid-column: ${col};
                display: grid;
                border: 1px solid red;
            }
            ul{
                width: 1000px;
                border: 1px solid green;
                padding: 0;
                margin: 0;
                justify-self: start;
                align-self: center;
                padding-left: 50px;
                
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