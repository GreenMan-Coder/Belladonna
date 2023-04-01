import Logo from './Logo'
import Menu from './Menu'

const Header = ({tam, num, num2}) => {
    return <header>

        <Logo tam={tam}/>
        <Menu num={num}/>

        <style jsx>{`

            header{
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
            }
        `}</style>
    </header>
}

export default Header