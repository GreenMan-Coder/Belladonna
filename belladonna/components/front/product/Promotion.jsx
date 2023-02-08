const Promotion = () => {
    
    return <section className="container">
        <h1>Depila más de 3 zonas y recibe un descuento del 10% en el total de tu servicio.</h1>
        <button>RESERVA</button>

        <style jsx>{`
            .container{
                grid-row: 5/6;
                grid-column: 4/5;
                justify-self: flex-start;
                display: grid;
                text-align: center;
                color: #e7592f;
                font-weight: 900;
                font-size: 30px;
                justify-items: center;
                align-items: center;
                box-sizing: border-box;
            }

            button{
                font-family: 'Karla', sans-serif;
                cursor: pointer;
                width: 60%;
                height: 40px;
                border: 0;
                outline: 0;
                box-sizing: border-box;
                box-shadow: -3px -3px 5px #c4b78c,  3px 3px 5px #968c6c;
                background: #e7592f;
                border-radius: 10px;
                line-height: 0;
                font-size: 15px;
                font-weight: 900;
                transition: all 0.2s ease-in-out;
            }
            button:hover{
                box-shadow: -2px -2px 5px #c4b78c, 2px 2px 5px #968c6c;
            }
            button:active {
                box-shadow: inset 1px 1px 2px #968c6c, inset -1px -1px 2px #c4b78c;
            }



        `}</style>
    </section>
}

export default Promotion
