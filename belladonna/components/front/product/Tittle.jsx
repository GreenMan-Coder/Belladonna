const Tittle = ({row, col}) => {

    return <hgroup className="container">

        <h1>Elige la zona <br />y <br />conoce el plan</h1>
        
        

        <style jsx>{`

            .container {
                grid-row: ${row};
                grid-column: ${col};
                font-family: 'Karla', sans-serif;
                width: 100%;
                height: 300px;
                background-image: url(./img/trunk/3945452.jpg);
                background-position: center;
                background-size: 50%;
                background-attachment: fixed;
                background-repeat: no-repeat;
                display: grid;
                justify-content: center;
                align-items: center;
                position: relative;
            }
            .container::after{
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.25);
            }

            h1{
                position: absolute;
                justify-self: center;
                font-size: 80px;
                text-align: center;
                text-transform: uppercase;
                color: #fefae0;
                z-index: 2;
                padding-top: 25px;
            }

        `}</style>
    </hgroup>
}
export default Tittle