const Logo = ({ tam, deactivated }) => {
    return <>
        <img src="https://belladonna-store.s3.amazonaws.com/logo+5.png" alt="bellaDonnaLogo" />
        <style jsx>{`
        img {
          height: 8rem;
          padding: 1rem;
        }
      `}</style>
    </>
}

export default Logo
