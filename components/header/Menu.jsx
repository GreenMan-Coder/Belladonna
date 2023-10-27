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
          font-size: 20px;
        }
        @media screen and (max-width: 2410px) {
          a{
            font-size: 2.2em;
          }
        }
        @media screen and (max-width: 1890px) {
        a{
          font-size: 1.8em;
        }
        @media screen and (max-width: 1426px) {
        a{
          font-size: 1.6em;
        }
        @media screen and (max-width: 962px) {
          a{
            font-size: 1.4em;
          }
        }
        @media screen and (max-width: 703px) {
          a{
            font-size: 1.25em;
          }
        }
        @media screen and (max-width: 679px) {
          a{
            font-size: 1.1em;
          }
        }
        @media screen and (max-width: 615px) {
          a{
            font-size: 1em;
          }
        }
        @media screen and (max-width: 550px) {
          a{
            font-size: 0.85em;
          }
        }
        @media screen and (max-width: 540px) {
          a{
            font-size: 1.5em;
          }
        }
        @media screen and (max-width: 463px) {
          a{
            font-size: 1.3em;
          }
        }
        @media screen and (max-width: 391px) {
          a{
            font-size: 1em;
          }
        }
        @media (max-height: 790px) {
          a{
            font-size: 1.5em;
          }
      }
    `}</style>
  </nav>
}
export default Menu
