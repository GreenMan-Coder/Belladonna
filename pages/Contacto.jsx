import Header from "../components/header/Header"
import Email from "../components/contacto/Email"
import Nets from "../components/contacto/Nets"
import About from "../components/front-page/About"

const Contacto = () => {
  return <section className="container">
      <Header row="1/2" color="--purple-blanco"/>
      <Nets/>
      <Email/>
      <div className="post">
        <About/>
      </div>
      <style jsx>{`
          .container {
              height: auto;
              width: 100%;
              display: grid;
              justify-items: center;
              align-items: center;
              grid-template-rows: 10% 75vh 80vh 1fr;
              font-family: var(--font);
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
              position: relative;
          }
          .post{
            grid-row: 4/5;
          }
      `}</style>
  </section>
}
export default Contacto
