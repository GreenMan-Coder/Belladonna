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

      @media screen and (max-width: 1280px) and (max-height: 800px) {
        .container{
          width: ${tam === "6.5%" ? "5.5%" : tam === "6%" ? "5%" : tam === "7.4%" ? "5.5%" : ""}
        }
      }

      @media screen and (max-width: 1024px) and (max-height: 1366px) {
        .container{
          width: ${tam === "6%" ? "8%" : "8%"}
        }
      }


      @media screen and (max-width: 790px) {
        .container{
          width: 8%;
        }
      }
    `}</style>
  </a>
}
export default SocialNetworks
