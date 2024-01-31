const Logo = ({tam, deactivated}) => {
  return <>
    <img src="https://belladonna-store.s3.amazonaws.com/logo+5.png" alt="bellaDonnaLogo" />
      <style jsx>{`
        img {
          display: grid;
          justify-self: center;
          align-self: center;
          grid-column: 1/2;
          width: 300px;
          height: 100%;
        }

        @media screen and (min-width: 2500px){
          img{
            justify-self: end;
          }
        }
      `}</style>
  </>
}

export default Logo
