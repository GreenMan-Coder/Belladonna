import Information from "./Information"

const Post = () => {
    return <section className="container">

        <h1>Conóce Belladonna</h1>
        <div className="info">
            <Information sub="Nosotros" title="Conócenos" paragraph="Compartimos información sobre la empresa y nuestra experiencia." href="/Belladona"/>
            <Information sub="Blog" title="Comunidad" paragraph="Es nuestro plus adicional, ¡interactua en nuestra comunidad!." href="/Belladona"/>
            <Information sub="Contacto" title="¿Dudas?" paragraph="Puedes dejarnos un mensaje al instante o por nuestros canales." href="/Belladona"/>
        </div>

        <style jsx>{`
            .container {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                overflow: hidden;
            }
            .info{
                flex-grow: 2;
                position: relative;
                top: 30px;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-items: center;
                box-sizing: border-box;
                padding: 0 6em;
            }
            h1{
                flex-grow: 1;
                margin: 0;
                padding: 0;
                position: relative;
                top: 20px;
                text-align: center;
                font-size: 57px;
                font-weight: 700;
                color: var(--purple-blanco);
            }
        `}</style>
    </section>
}
export default Post