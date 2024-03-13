const Logo = ({ openMenu }) => {
    return <>
        <img src="https://belladonna-store.s3.amazonaws.com/logo+5.png" alt="bellaDonnaLogo" />
        <style jsx>{`
            img {
                height: 4.3rem;
                padding: .5rem;
            }

            @media screen and (max-width: 1300px) {
                img {
                    height: 4.3em;
                    padding: .5em;
                }
            }

            @media screen and (max-width: 870px) {
                img {
                    display: ${openMenu ? 'none' : 'block'};
                    height: 6em;
                    padding: .3em;
                }
            }

            @media screen and (max-width: 450px) {
                img {
                    display: ${openMenu ? 'none' : 'block'};
                }
            }
        `}</style>
    </>
}

export default Logo
