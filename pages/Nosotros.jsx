import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import About from '../components/nosotros/About'

const Nosotros = () => {
    return <article className="container">

        <Header row="1/2" color="--purple-blanco"/>
        <h1>Conoce Belladonna</h1>
        <About row="3/4" title="¿Quienes somos?" text="Somos una empresa con 30 años de experiencia en depilación con cera, donde cuidamos tu piel con atención personalizada y profesionalismo. Nuestro equipo de profesionales altamente calificadas te brindará la mejor calidad en servicio y asesoría para que te sientas segura y cómoda en todo momento." imagen="/img/about/company.jpg" colImg="1/2" colText="2/3"/>
        <About row="4/5" title="Misión" text="En Belladonna, nos comprometemos a brindar un servicio excepcional de depilación con cera a domicilio. Contamos con un equipo de mujeres altamente capacitadas en el cuidado de la piel, quienes brindan atención y asesoría de calidad a nuestras clientes. Nuestro objetivo es crear una experiencia cómoda y conveniente, adaptada a las necesidades individuales de cada persona. Nos esforzamos por fortalecer la confianza y autoestima de nuestras clientes, generando resultados satisfactorios y duraderos." imagen="/img/about/mision.gif" colImg="2/3" colText="1/2"/>
        <About row="5/6" title="Visión" text="En Belladonna, aspiramos a ser líderes en el campo de la depilación femenina, enfocados en el cuidado de la piel. Nos destacaremos por nuestra atención exclusiva para mujeres, siendo reconocidos como una empresa pionera en este enfoque. Buscamos establecer alianzas estratégicas con expertos en el cuidado de la piel y expandir nuestra presencia a nivel nacional. Nuestro objetivo es garantizar la satisfacción y fidelidad de cada una de nuestras clientes, ofreciendo servicios de calidad inigualable. Promovemos la belleza, el bienestar y la confianza en cada mujer que elige Belladonna." imagen="/img/about/vision.gif" colImg="1/2" colText="2/3"/>
        <Footer/>

        <style jsx>{`
            .container {
                font-family: 'Karla', sans-serif;
                width: 100%;
                height: 100vh;
                display: grid;
                grid-template-rows: 0.3fr 1fr 70vh 70vh 70vh 20%;
            }
            h1{
                margin: 0;
                grid-row: 2/3;
                font-size: 60px;
                font-weight: 700;
                text-align: center;
                color: var(--normal-purple);
            }
        `}</style>

    </article>
}

export default Nosotros
