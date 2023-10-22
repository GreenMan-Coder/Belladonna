const SocialNetworks = ({children, marg, tam, href}) => {
  return <a href={href} target="_blank" className="container">
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
  </a>
}
export default SocialNetworks
