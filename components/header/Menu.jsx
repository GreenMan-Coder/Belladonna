import Link from "next/link"

const Menu = ({num}) => {
  return <nav className="container">
    <ul>
      <li>
        <Link href="/" legacyBehavior>
          <a >Inicio</a>
        </Link>
      </li>
      <li>
        <Link href="/Depilacion/" legacyBehavior>
          <a >Depilación</a>
        </Link>
      </li>
      <li>
        <Link href="/Joyeria/" legacyBehavior>
          <a>Joyería</a>
        </Link>
      </li>
      <li>
        <Link href="/Nosotros/" legacyBehavior>
          <a >Nosotros</a>
        </Link>
      </li>
      <li>
        <Link href="/Contacto/" legacyBehavior>
          <a >Contacto</a>
        </Link>
      </li>
    </ul>
    <style jsx>{`
        .container{
          position: relative;
          width: 100%;
          max-width: 2410px;
          height: auto;
          font-family: var(--font);
          font-weight: 700;
        }
        ul{
          display: grid;
          grid-template-columns: auto auto auto auto auto auto;
          justify-items: center;
        }
        li{
          list-style: none;
          box-sizing: border-box;
        }
        a{
          text-decoration: none;
          color: var(--normal-purple);
          font-size: 2rem;
        }
        @media screen and (max-width: 2560px) {
          a{
            font-size: 2.3rem;
          }
        }
        @media screen and (max-width: 1890px) {
        a{
          font-size: 1.8rem;
        }
        @media screen and (max-width: 1426px) {
        a{
          font-size: 1.6rem;
        }
        @media screen and (max-width: 962px) {
          a{
            font-size: 1.4rem;
          }
        }
        @media screen and (max-width: 703px) {
          a{
            font-size: 1.25rem;
          }
        }
        @media screen and (max-width: 679px) {
          a{
            font-size: 1.1rem;
          }
        }
        @media screen and (max-width: 615px) {
          a{
            font-size: 1rem;
          }
        }
        @media screen and (max-width: 550px) {
          a{
            font-size: 0.85rem;
          }
        }

        @media screen and (max-width: 480px) and (max-height: 800px){
          a{
            font-size: 0.85rem;
          }
      }
    `}</style>
  </nav>
}
export default Menu
