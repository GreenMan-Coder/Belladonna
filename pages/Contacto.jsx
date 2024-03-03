import Email from '../components/contacto/Email'
import Nets from '../components/contacto/Nets'
import Header from '../components/header/Header'

const Contacto = () => {
    return <section className="container">
        <Header/>
        <div className="wrapper">
            <Nets/>
            <Email/>
        </div>
        <style jsx>{`
            .container {
                display: grid;
                grid-template-rows: auto auto;
                justify-items: center;
                align-items: center;
            }
            .wrapper{
                display: flex;
                gap: 1em;
                min-width: 400px;
                max-width: 1590px;
            }

            @media screen and (max-width: 1480px){
                .wrapper{
                    font-size: 15px;
                }
            }

            @media screen and (max-width: 1150px){
                .wrapper{
                    font-size: 14px;
                }
            }

            @media screen and (max-width: 1065px){
                .wrapper{
                    font-size: 13px;
                }
            }

            @media screen and (max-width: 915px){
                .wrapper{
                    font-size: 12px;
                }
            }

            @media screen and (max-width: 870px){
                .wrapper{
                    display: grid;
                    grid-row-gap: 10em;
                    box-sizing: border-box;
                    margin-top: 5em;
                }
            }

            @media screen and (max-width: 580px){
                .wrapper{
                    font-size: 11px;
                }
            }

            @media screen and (max-width: 575px){
                .wrapper{
                    font-size: 10px;
                }
            }

            @media screen and (max-width: 490px){
                .wrapper{
                    font-size: 9px;
                }
            }

            @media screen and (max-width: 430px){
                .wrapper{
                    font-size: 8px;
                }
            }
        `}</style>
    </section>
}
export default Contacto
