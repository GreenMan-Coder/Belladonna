import Img from "./ourServices/Img"
import Description from "./ourServices/Description"

const OurServices = ({image, row, sub, title, paragraph, href, pad}) => {
  return <section className="container">
    <div className="post">
      <Img image={image}/>
      <Description sub={sub} title={title} paragraph={paragraph} href={href === 1 ? '/Depilacion' : '/Joyeria'} pad={pad}/>
    </div>
    <style jsx>{`
        .container {
          margin: 0;
          grid-row: ${row};
          height: 100%;
          width: 100%;
          display: grid;
          justify-items: center;
          align-items: center;
        }
        .post{
          align-self: start;
          margin: 0;
          height: 80%;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: start;
          justify-items: center;
          grid-column-gap: 20px;
          box-sizing: border-box;
        }
        @media screen and (max-width: 280px) {
          .post{
            align-self: center;
            grid-template-columns: 0.7fr 1fr;
            grid-column-gap: 0;
          }
        }
    `}</style>
  </section>
}
export default OurServices
