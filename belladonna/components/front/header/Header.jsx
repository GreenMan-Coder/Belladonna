import Logo from './Logo'
import Menu from './Menu'

const Header = ({image, tam, num, num2}) => {
    return <section className="container">

        <Logo image={image} tam={tam}/>
        {num === 1 ? <Menu num={num2}/> : ''}

        <style jsx>{`

            .container {
                grid-row: 1/2;
                grid-column: 1/5;
                display: grid;
                justify-items: center;
                align-items: center;
                width: 100%;
                height: 100%;
                font-weight: 500;
                font-family: 'Karla', sans-serif;
                font-size: 22px;
                background: #fefae0;
            }
        `}</style>
    </section>
}

export default Header