import { useState } from 'react'
import Logo from './Logo'
import Nav from './Nav'
import MobileNav from './mobileNav'

const Header = () => {
    const [openMenu, setopenMenu] = useState(false)

    return <header>

        <Logo openMenu={openMenu}/>
        <Nav openMenu={openMenu}/>
        <MobileNav setopenMenu={setopenMenu} openMenu={openMenu}/>
        <style jsx>{`
            header{
                position: sticky;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: var(--purple-blanco);
                top: 0;
                gap: 2rem;
                z-index: 2;
                width: 100%;
                height: 5em;
            }

            @media screen and (max-width: 870px){
                header{
                    height: 8em;
                }
            }

            @media screen and (max-width: 430px){

            }
    `}</style>
    </header>
}

export default Header
