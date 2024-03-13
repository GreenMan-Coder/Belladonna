import Information from './Information'

const Post = () => {
    return <section className="container">

        <h1>Acerca de Belladonna</h1>
        <div className="info">
            <Information sub="Nosotros" title="Conócenos" paragraph="Descubre información relevante y exclusiva sobre nuestra empresa y su trayectoria." href="/Nosotros"/>
            <Information sub="Contacto" title="Comunícate" paragraph="Déjanos correo electrónico o visita nuestros otros canales." href="/Joyeria"/>
        </div>

        <style jsx>{`
            .container {
                width: 100%;
                height: 29em;
                display: grid;
                justify-items: center;
                align-items: center;
            }

            h1{
                text-align: center;
                font-weight: 700;
                font-size: 2.5em;
                color: var(--purple-blanco);
                margin: .5em 0;
            }

            .info{
                box-sizing: border-box;
                margin-left: 5em;
                width: 80%;
                height: 100%;
                display: grid;
                grid-template-columns: 1fr 1fr;
                justify-items: center;
                align-items: center;
                position: relative;
                bottom: 3em;
            }
        `}</style>
    </section>
}
export default Post
