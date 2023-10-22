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
        @media screen and (max-width: 280px) {
        a{
          font-size: 0.85em;
        }
      }
    `}</style>
  </nav>
}
export default Menu
