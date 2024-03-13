import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import About from '../components/nosotros/About'

const Nosotros = () => {
    return <article className="container">
        <div className="header">
            <Header/>
        </div>

        <h1>Conoce Belladonna</h1>
        <About row="3/4" title="Experiencia de profesión" text="Con más de 30 años de experiencia en depilación con cera en Bogotá, Belladonna ha ganado reconocimiento gracias a su excelente  servicio especializado en depilación femenina. Aquellas mujeres que optan por sus servicios, experimetan una completa satisfacción con los resultados del proceso de depilación. Belladonna posee un profundo conocimiento del proceso, métodos, productos y atención necesaria para garantizar resultados de calidad superior en el cuidado de la piel." imagen="/img/about/company.jpg" colImg="1/2" colText="2/3"/>
        <About row="4/5" title="Misión" text="En Belladonna, nos comprometemos a proporcionar un servicio excepcional de depilación con cera, incluyendo la opción de servicio a domicilio. Nuestro objetivo principal es asegurar la satisfacción y lealtad de cada una de nuestras clientas, ofreciendo servicios de una calidad inigualable y una experiencia cómoda y conveniente, adaptada a las necesidades individuales de cada una. Promovemos la belleza, el bienestar y la confianza en todas las mujeres que eligen Belladonna." imagen="/img/about/mision.jpg" colImg="2/3" colText="1/2"/>
        <About row="5/6" title="Visión" text="En Belladonna, nuestra aspiración es convertirnos en líderes en el campo de la depilación femenina, centrándonos en el cuidado de la piel. Nos distinguiremos por nuestro servicio superior y atención exclusiva para mujeres, siendo reconocidos como pioneros en el cuidado de la piel. Nos esforzamos por ofrecer el mejor servicio en Bogotá, obteniendo resultados satisfactorios y duraderos." imagen="/img/about/vision.gif" colImg="1/2" colText="2/3"/>
        <div className="footer">
            <Footer/>
        </div>

        <style jsx>{`
            .container {
                display: grid;
                grid-template-rows: auto auto auto auto auto auto;
                justify-items: center;
                align-items: center;
            }
            .header{
                grid-row: 1/2;
                box-sizing: border-box;
                margin-bottom: 5em;
            }
            h1{
                grid-row: 2/3;
                font-size: 4.5em;
                font-weight: 700;
                text-align: center;
                color: var(--normal-purple);
                box-sizing: border-box;
                margin: 0 0 .5em 0;
            }
            .footer{
              grid-row: 6/7;
              width: 100%;
            }

            @media screen and (max-width: 1150px){
                .container{
                    font-size: 15px;
                }
            }

            @media screen and (max-width: 1075px){
                .container{
                    font-size: 13px;
                }
            }

            @media screen and (max-width: 940px){
                .container{
                    font-size: 11px;
                }
            }

            @media screen and (max-width: 900px){
                .container{
                    font-size: 10.5px;
                }
            }

            @media screen and (max-width: 870px){
                .container{
                    font-size: 10.5px;
                }
            }

            @media screen and (max-width: 530px){
                .container{
                    font-size: 9px;
                }
            }

            @media screen and (max-width: 490px){
                .container{
                    font-size: 8px;
                }
            }
        `}</style>

    </article>
}

export default Nosotros
