import Logo from './Logo'
import Menu from './Menu'

const Header = ({row,color}) => {
  return <header>
    <Logo col="1/2" tam="7.2rem"/>
    <Menu col="2/3"/>
    <style jsx>{`
      header{
        position: fixed;
        top: 0;
        width: 90.57%;
        background-color: var(${color});
        box-sizing: border-box;
        height: 9rem;
        display: grid;
        grid-template-columns: 1fr 5fr;
        justify-items: center;
        align-items: center;
        max-width: 2410px;
        z-index: 10;
      }

      @media screen and (max-width: 1650px) {
        header{
          width: 100%;
        }
      }

      @media screen and (max-width: 720px) and (max-height: 1280px){

      }
    `}</style>
  </header>
}

export default Header
