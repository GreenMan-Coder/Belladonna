const Logo = ({tam, deactivated}) => {
  return <div className="container">
    <img src="https://belladonna-store.s3.amazonaws.com/logo+5.png" alt="bellaDonnaLogo" />
    <style jsx>{`
      .container {
        padding: 0;
        margin: 0;
        justify-self: center;
        align-self: center;
        opacity: ${deactivated === 'true' ? '0' : '1'};
        grid-column: 1/2;
        width: 100%;
        height: 100%;
        display: grid;
        align-items: center;
      }
      img{
        height: ${tam};
      }
      @media screen and (max-width: 2560px) {
        img{
          justify-self: center;
          height: 8.5rem;
        }
      }
      @media screen and (max-width: 1000px) {
        img{
          height: 7rem;
        }
      }
      @media screen and (max-width: 1426px) {

      }
      @media screen and (max-width: 962px) {

      }
      @media screen and (max-width: 360px) {

      }
    `}</style>
  </div>
}

export default Logo
