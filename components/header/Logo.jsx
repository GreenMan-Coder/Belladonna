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
        width: auto;
      }
      @media screen and (max-width: 2410px) {
        .container{
          justify-items: center;
        }
        img{
          height: 12em;
          width: auto;
          justify-self: end;
        }
      }
      @media screen and (max-width: 360px) {
        img{
          height: 4.5em;
          width: auto;
        }
      }
    `}</style>
  </div>
}

export default Logo
