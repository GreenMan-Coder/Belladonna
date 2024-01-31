import Logo from './Logo'
import Menu from './Menu'

const Header = () => {
  return <header>
    <Logo />
    <Menu col="2/3"/>
    <style jsx>{`
      header{
        background: red;
        position: fixed;
        top: 0;
        width: 100%;
        background-color: red;
        box-sizing: border-box;
        display: grid;
        justify-items: center;
        align-items: center;
        z-index: 10;
      }

      @media screen and (max-width: 2500px){
        header{
          height: 15em;
          width: 100%;
          border: 1px solid red;
        }
      }

      @media screen and (max-width: 1024px) and (max-height: 1366px) {
        header{
          height: 7rem;
          border: 1px solid red;
        }
      }
      @media screen and (max-width: 1024px) and (max-height: 600px) {
        header{

        }
      }

      @media screen and (max-width: 280px) and (max-height: 653px) {
        header{
          height: 7rem;
          width: 100%;
        }
      }
    `}</style>
  </header>
}

export default Header
