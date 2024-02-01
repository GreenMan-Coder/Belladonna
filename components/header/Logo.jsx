const Logo = ({ tam, deactivated }) => {
    return <>
        <img src="https://belladonna-store.s3.amazonaws.com/logo+5.png" alt="bellaDonnaLogo" />
        <style jsx>{`
        img {
          height: 4.3rem;
          padding: .5rem;
        }
      `}</style>
    </>
}

export default Logo
