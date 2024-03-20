const SocialNetworks = ({ children, href }) => {
    return <a href={href} target="_blank" rel="noreferrer" className="container">
        {children}
        <style jsx>{`
        .container {
            width: 2em;
            display: grid;
            align-items: center;
            box-sizing: border-box;
            margin: 0 3px;
            cursor: pointer;
        }

        @media screen and (max-width: 870px){
            .container {
                width: ${href.includes('facebook') ? '3.4em' : '3em'};
            }
        }
        `}</style>
    </a>
}
export default SocialNetworks
