const SocialNetworks = ({children, marg, tam}) => {
    return <div className="container">

        {children} 

        <style jsx>{`
            .container {
                height: ${tam};
                width: ${tam};
                display: grid;
                align-items: center;
                box-sizing: border-box;
                margin: 0 ${marg};
                cursor: pointer;
            }
        `}</style>
    </div>
}
export default SocialNetworks