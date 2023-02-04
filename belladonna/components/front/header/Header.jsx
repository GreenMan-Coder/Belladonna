import Logo from './Logo'
import Menu from './Menu'

const Header = () => {
    return <section className="container">

        <Logo col="1/2"/>
        <Menu col="2/3"/>

        <style jsx>{`

            .container {
                grid-row: 1/2;
                grid-column: 1/4;
                width: 100%;
                height: auto;
                display: grid;
                grid-template-rows: 8rem 2rem;
                font-weight: 500;
                font-family: 'Karla', sans-serif;
                font-size: 22px;
            }

        `}</style>
    </section>
}

export default Header