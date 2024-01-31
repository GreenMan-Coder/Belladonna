import Link from "./Link";

const Menu = ({num}) => {
  return <nav>
    <ul>
      <li>
        <Link href="/Depilacion/" legacyBehavior>
          <a >Depilación</a>
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
        nav {
          font-family: var(--font);
          font-weight: 700;
        }

        ul {
          display: grid;
          grid-template-columns: auto auto auto auto;
          justify-items: center;
        }

        @media screen and (min-width: 2500px){

        }

    `}</style>
  </nav>
}
export default Menu
