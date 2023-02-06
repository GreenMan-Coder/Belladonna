import Logo from './Logo'

const Header = ({image, tam}) => {
    return <section className="container">

        <Logo image={image} tam={tam}/>
        <style jsx>{`

            .container {
                grid-row: 1/2;
                grid-column: 1/4;
                display: grid;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: auto;
                font-weight: 500;
                font-family: 'Karla', sans-serif;
                font-size: 22px;
                background: #fefae0;
            }

        `}</style>
    </section>
}

export default Header