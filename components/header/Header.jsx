import Logo from './Logo'
import Menu from './Menu'

const Header = ({row,color}) => {
  return <header>
    <Logo col="1/2" tam="7.2em"/>
    <Menu col="2/3"/>
    <style jsx>{`
      header{
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        background-color: var(${color});
        box-sizing: border-box;
        width: 100%;
        height: 9em;
        display: grid;
        grid-template-columns: 0.2fr 1fr;
        justify-items: center;
        align-items: center;
        z-index: 10;
      }
      @media screen and (max-width: 415px) {
        header{
          width: 100%;
          height: 15%;
        }
      }
    `}</style>
  </header>
}

export default Header
