import CustomLink from './customLink'

const Nav = () => {
    return <nav>
        <ul>
            <CustomLink href="/" to="Inicio" legacyBehavior/>
            <CustomLink href="/Depilacion" to="Depilacion" legacyBehavior/>
            <CustomLink href="/Nosotros" to="Nosotros" legacyBehavior/>
            <CustomLink href="/Contacto" to="Contacto" legacyBehavior/>
        </ul>

        <style jsx>{`
          ul {
            display: flex;
          }

          @media screen and (max-width: 870px) {
            ul {
                display: none;
            }
        }

        `}</style>

    </nav>
}
export default Nav
