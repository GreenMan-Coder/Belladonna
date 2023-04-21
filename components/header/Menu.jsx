import Link from "next/link"
import { useState } from "react"

const Menu = ({num}) => {

    const [clase, setClase] = useState('container')

    return <nav className="container">

        <ul>
            <li>
                <Link href="/" legacyBehavior>
                    <a >Inicio</a>
                </Link>
            </li>
            <li>
                <Link href="/Depilation/" legacyBehavior>
                    <a >Depilación</a>
                </Link>
            </li>
            <li>
                <Link href="/Belladonna/" legacyBehavior>
                    <a >Bisutería</a>
                </Link>
            </li>
            <li>
                <Link href="/Belladonna/" legacyBehavior>
                    <a >Nosotros</a>
                </Link>
            </li>
            <li>
                <Link href="/Belladonna/" legacyBehavior>
                    <a >Blog</a>
                </Link>
            </li>
            <li>
                <Link href="/Belladonna/" legacyBehavior>
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
        `}</style>
    </nav>
}
export default Menu