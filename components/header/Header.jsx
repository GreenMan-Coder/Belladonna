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
        width: 100%;
        background-color: var(${color});
        box-sizing: border-box;
        height: 9rem;
        display: grid;
        grid-template-columns: 1fr 5fr;
        justify-items: center;
        align-items: center;
        z-index: 10;
      }

      @media screen and (max-width: 2500px) and (max-height: 3840px) {
        header{
          border: 1px solid red;
          height: 20rem;
        }
      }
    `}</style>
  </header>
}

export default Header
