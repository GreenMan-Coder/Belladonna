import Img from "./ourServices/Img"
import Description from "./ourServices/Description"

const OurServices = ({image, row, sub, title, paragraph, href, }) => {
  return <section className="container">
    <div className="post">
      <Img image={image}/>
      <Description sub={sub} title={title} paragraph={paragraph} href={href === 1 ? '/Depilacion' : '/Joyeria'}/>
    </div>
    <style jsx>{`
      .container {
        margin: 0;
        grid-row: ${row};
        display: grid;
        justify-items: center;
        align-items: center;
        box-sizing: border-box;
      }
      .post{
        align-self: center;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: 1fr 1.1fr;
        align-items: center;
        justify-items: center;
        box-sizing: border-box;
      }

      @media screen and (max-width: 2500px){
        .container {
          height: 70em;
          width: 100%;
          box-sizing: border-box;
          margin-bottom: 15em;
        }
        .post{
          height: 100%;
          width: 100%;
          position: relative;
        }
      }
    `}</style>
  </section>
}
export default OurServices
