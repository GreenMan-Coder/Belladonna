import Information from "./Information"

const Post = () => {
  return <section className="container">

    <h1>Acerca de Belladonna</h1>
    <div className="info">
      <Information sub="Nosotros" title="Conócenos" paragraph="Descubre información relevante y exclusiva sobre nuestra empresa y su trayectoria." href="/Nosotros" side="15%"/>
      <Information sub="Contacto" title="Comunícate" paragraph="Déjanos correo electrónico o visita nuestros otros canales." href="/Joyeria" side="5%"/>
    </div>

    <style jsx>{`
      .container {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: 0.3fr 1fr;
        justify-items: center;
        align-items: center;
        overflow: hidden;
        box-sizing: border-box;
        margin: 0;
        margin-top: 3%;
      }
      .info{
        align-self: start;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        align-items: center;
        box-sizing: border-box;
      }
      h1{
        flex-grow: 1;
        margin: 0;
        padding: 0;
        position: relative;
        bottom: 10%;
        text-align: center;
        font-size: 60px;
        font-weight: 700;
        color: var(--purple-blanco);
      }
      @media screen and (max-width: 2410px) {
        h1{
          font-size: 7.5em;
      }
      }
    `}</style>
  </section>
}
export default Post
