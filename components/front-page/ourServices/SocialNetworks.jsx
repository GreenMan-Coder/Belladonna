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

      @media screen and (max-width: 2560px) and (max-height: 1890px){
        .container{
          width: ${tam === "6.5%" ? "5.5%" : tam === "6%" ? "5%" : tam === "7.4%" ? "5.5%" : ""}
        }
      }
      @media screen and (max-width: 2560px) and (max-height: 1470px){
        .container{
          width: ${tam === "6.5%" ? "5%" : tam === "6%" ? "4.5%" : tam === "7.4%" ? "5%" : ""}
        }
      }
      @media screen and (max-width: 2560px) and (max-height: 1240px){
        .container{
          width: ${tam === "6.5%" ? "4.5%" : tam === "6%" ? "4%" : tam === "7.4%" ? "4.5%" : ""}
        }
      }


      @media screen and (max-width: 2277px) {
        .container{
          width: ${tam === "7.4%" ? "6.4%" : {tam}};
        }
      }
      @media screen and (max-width: 1575px) {
        .container{
          width: 8%;
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
