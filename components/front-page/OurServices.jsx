import Img from "./ourServices/Img"
import Description from "./ourServices/Description"

const OurServices = ({image, row, sub, title, paragraph, href, }) => {
  return <section className="container">
    <div className="post">
      <Img image={image}/>
      <Description sub={sub} title={title} paragraph={paragraph} href={href === 1 ? '/Depilacion' : '/Joyeria'}/>
    </div>
    <style jsx>{`
        @media screen and (max-width: 2560px) and (max-height: 2560px){
          .container {
            margin: 0;
            grid-row: ${row};
            height: 50vh;
            width: 100%;
            display: grid;
            justify-items: center;
            align-items: center;
            border: 1px solid red;
            box-sizing: border-box;
            margin-bottom: 15%;
          }
          .post{
            border: 1px solid blue;
            align-self: center;
            margin: 0;
            height: 100%;
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: start;
            justify-items: center;
            box-sizing: border-box;
          }
        }
        @media screen and (max-width: 2560px) and (max-height: 2220px){
          .container {
            height: 80%;
          }
        }



        @media screen and (max-width: 2560px) and (max-height: 2325px){
          .container{
            position: relative;
            bottom: 7%;
          }
        }

        @media screen and (max-width: 540px) {
          .post{
            align-self: center;
            grid-template-columns: 0.7fr 1fr;
            grid-column-gap: 0;
          }
        }
        @media screen and (max-width: 415px) {
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
