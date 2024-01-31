import Logo from './Logo'
import Nav from './Nav'
import MobileNav from './mobileNav'

const Header = () => {
    return <header>

        <Logo />
        <Nav/>
        <MobileNav/>

        <style jsx>{`
          header{
            position: sticky;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--light-purple);
            top: 0;
            gap: 2rem
            background-color: red;
            z-index: 1;
          }
    `}</style>
    </header>
}

export default Header
