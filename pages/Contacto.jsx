import Header from "../components/header/Header"
import Email from "../components/contacto/Email"
import Nets from "../components/contacto/Nets"

const Contacto = () => {

    return <main className="container">
    
        <Header row="1/2" color="--purple-blanco"/>
        
        <div className="wrapper">
            <Nets/>
            <Email/>
        </div>

        <style jsx>{`
            .container {
                height: 100vh;
                width: 100%;
                display: grid;
                grid-template-rows: 25% auto;
                font-family: var(--font);
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
                position: relative;
            }
            .wrapper{
                grid-row: 2/3;
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
            }
        `}</style>
    </main>
}
export default Contacto