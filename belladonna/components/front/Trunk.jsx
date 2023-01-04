import ButtonContact from './trunk/ButtonContact'

const Trunk = () => {
    return <section className="container">
        
        <div className="module">
            <h3>Depilación con cera para mujeres</h3>
        </div>
        
        <ButtonContact text="Agenda tu cita" col="1/2">

        </ButtonContact>
        
        <ButtonContact text="" col="2/3">

        </ButtonContact>

        <style jsx>{`

            .container {
                width: 100%;
                position: relative;
                margin-top: 20px;
                height: 52rem;
                background-image: url(./img/header/front.jpg);
                background-position: center;
                background-size: 100%;
                background-attachment: local;
                display: grid;
                grid-template-columns: 1fr 1fr;
            }
            
            .module{
                position: absolute;
                top: 25px;
                right: 15px;
                width: 23.2rem;
                padding: 15px 10px;
                background: rgba(0, 0, 0, 0.25);
                border-radius: 3px;
            }

            h3{
                position: relative;
                color: white;
                margin: 0;
                color: white;
                z-index: 1;
                text-align: center;
            }

        `}</style>
    </section>
}

export default Trunk