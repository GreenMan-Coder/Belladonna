import Logo from './Logo'
import Menu from './Menu'

const Header = () => {
    return <section className="container">

        <Logo col="1/2"/>
        <Menu col="2/3"/>

        <style jsx>{`

            .container {
                width: 100%;
                height: 73px;
                display: grid;
                grid-template-columns: 0.7fr 3fr;
                grid-column-gap: 22px;
                font-weight: 500;
                font-family: 'Karla', sans-serif;
                font-size: 22px;
                font-weight: 500;
                margin-bottom: 20px;
            }

        `}</style>
    </section>
}

export default Header