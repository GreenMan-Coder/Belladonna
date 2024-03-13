import CustomLink from './customLink'

const Nav = ({ openMenu }) => {
    return <nav>
        <ul>
            <CustomLink href="/" to="Inicio" legacyBehavior/>
            <CustomLink href="/Depilacion" to="Depilación" legacyBehavior/>
            <CustomLink href="/Nosotros" to="Nosotros" legacyBehavior/>
            <CustomLink href="/Contacto" to="Contacto" legacyBehavior/>
        </ul>

        <style jsx>{`
            ul {
                display: flex;
            }

            @media screen and (max-width: 1490px) {
                nav{
                    display: grid;
                    align-items: center;
                }
            }

            @media screen and (max-width: 870px) {
                ul {
                    display: ${openMenu ? 'flex' : 'none'};
                }
            }
            @media screen and (max-width: 415px){

            }
        `}</style>

    </nav>
}
export default Nav
