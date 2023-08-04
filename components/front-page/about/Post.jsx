import Information from "./Information"

const Post = () => {
  return <section className="container">

    <h1>Belladonna</h1>
    <div className="info">
      <Information sub="Nosotros" title="Conócenos" paragraph="Descubre información relevante y exclusiva sobre nuestra empresa y su trayectoria." href="/Belladona"/>
      <Information sub="Blog" title="Comunidad" paragraph="Explora un mundo de cuidado personal en nuestro blog." href="/Belladona"/>
      <Information sub="Contacto" title="Comunícate" paragraph="Déjanos correo electrónico o visita nuestros otros canales." href="/Belladona"/>
    </div>

    <style jsx>{`
      .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        box-sizing: border-box;
        margin: 0;
        margin-top: 3%;
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
        font-size: 60px;
        font-weight: 700;
        color: var(--purple-blanco);
      }
    `}</style>
  </section>
}
export default Post
