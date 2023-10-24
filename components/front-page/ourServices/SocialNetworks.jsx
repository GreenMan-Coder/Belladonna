const SocialNetworks = ({children, marg, tam, href}) => {
  return <a href={href} target="_blank" rel="noreferrer" className="container">
    {children}
    <style jsx>{`
      .container {
        width: ${tam};
        display: grid;
        align-items: center;
        box-sizing: border-box;
        margin: 0 ${marg};
        cursor: pointer;
      }
      @media screen and (max-width: 2277px) {
        .container{
          width: ${tam === "7.4%" ? "6.4%" : {tam}};
        }
      }
    `}</style>
  </a>
}
export default SocialNetworks
