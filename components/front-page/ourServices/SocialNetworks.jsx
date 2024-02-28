const SocialNetworks = ({ children, marg, tam, href }) => {
    return <a href={href} target="_blank" rel="noreferrer" className="container">
        {children}
        <style jsx>{`
        .container {
            width: 2.5em;
            display: grid;
            align-items: center;
            box-sizing: border-box;
            margin: 0 3px;
            cursor: pointer;
        }
        `}</style>
    </a>
}
export default SocialNetworks
