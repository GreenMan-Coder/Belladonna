import Email from '../components/contacto/Email'
import Nets from '../components/contacto/Nets'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

const Contacto = () => {
    return <section className="container">
        <div className="header">
            <Header/>
        </div>
        <div className="wrapper">
            <Nets/>
            <Email/>
        </div>
        <div className="footer">
            <Footer/>
        </div>
        <style jsx>{`
            .container {
                display: grid;
                grid-template-rows: auto auto auto;
                justify-items: center;
                align-items: center;
                box-sizing: border-box;
                margin: auto;
                height: 100vh;
                min-height: 450px;
                min-width: 400px;
                max-width: 1590px;
            }
            .header{
                grid-row: 1/2;
                width: 100%;
            }
            .wrapper{
                display: flex;
                gap: 1em;
                box-sizing: border-box;
                margin-bottom: 5em;
            }

            .footer{
                width: 100%;
                align-self: end;
            }

            @media screen and (max-width: 1480px){
                .container{
                    font-size: 15px;
                }
            }

            @media screen and (max-width: 1150px){
                .container{
                    font-size: 14px;
                }
            }

            @media screen and (max-width: 1065px){
                .container{
                    font-size: 13px;
                }
            }

            @media screen and (max-width: 915px){
                .container{
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
                .container{
                    font-size: 11px;
                }
            }

            @media screen and (max-width: 575px){
                .container{
                    font-size: 10px;
                }
            }

            @media screen and (max-width: 490px){
                .container{
                    font-size: 9px;
                }
            }

            @media screen and (max-width: 430px){
                .container{
                    font-size: 8px;
                }
            }
        `}</style>
    </section>
}
export default Contacto
