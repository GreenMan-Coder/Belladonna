const DescriptionCard = ({zone}) => {
    
    return <section className="container">

        <div className="header">zonas del cuerpo</div>
        <div className={zone}>
            
        </div>


        <style jsx>{`

            .container {
                grid-column: 2/3;
                grid-row: 3/6;
                height: 98%;
                width: 80%;
                background: #fff;
                display: grid;
                font-family: 'Karla', sans-serif;
            }

            .header{
                height: 45px;
                background: #fff;
                border-bottom: 1px solid #ccc;
                display: grid;
                justify-content: center;
                align-items: center;
                text-transform: uppercase;
                font-weight: 900;
                color: #e7822f;
            }

            .prueba{
                background: green;
                width: 100px;
                height: 100px;
            }

            .prueba1{
                background: black;
                width: 100px;
                height: 100px;
            }
            .prueba2{
                background: yellow;
                width: 100px;
                height: 100px;
            }

        `}</style>
    </section>
}

export default DescriptionCard