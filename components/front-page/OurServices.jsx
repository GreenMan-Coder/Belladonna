import Img from "./ourServices/Img"
import Description from "./ourServices/Description"

const OurServices = ({image, row, sub, title, paragraph, href, pad}) => {
    return <section className="container">

        <div className="space"></div>

        <div className="post">
            <Img image={image}/>
            <Description sub={sub} title={title} paragraph={paragraph} href={href === 1 ? '/Services' : '/Store'} pad={pad}/>
        </div>


        <style jsx>{`
            .container {
                grid-row: ${row};
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
            }
            .space{
                height: 30%;
                width: 100%;
            }
            .post{
                height: 100%;
                width: 100%;
                display: grid;
                grid-template-columns: 1fr 1fr;
                align-items: center;
                justify-items: center;
                grid-column-gap: 20px;
                box-sizing: border-box;
                overflow: hidden;
            }
        `}</style>
    </section>
}
export default OurServices