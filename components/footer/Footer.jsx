import SocialNetworks from "../front-page/ourServices/SocialNetworks"

const Footer = () => {
  return <footer className="container">
    <h1>Gracias por tu visita, ¡compartenos con tus familiares y amigas!</h1>
    <p>Teléfono: +57 322 3043604</p>
    <style jsx>{`
      .container {
        background: var(--dark-purple);
        box-sizing: border-box;
        display: grid;
        justify-items: center;
        align-items: center;
        position: relative;
      }
      h1{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: var(--light-purple);
        text-align: center;
      }
      p{
        margin: 0;
        padding: 0;
        color: var(--normal-purple);
        text-align: center;
        position: relative;
        bottom: 2%;
      }

      @media screen and (max-width: 2500px){
        .container{
          height: 10rem;
        }
        h1{
          font-size: 2.5rem;
        }
        p{
          font-size: 2.3em;
        }
      }
    `}</style>
  </footer>
}
export default Footer
