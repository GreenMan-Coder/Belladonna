import Description from './ourServices/Description'
import Img from './ourServices/Img'

const OurServices = ({ image, row, sub, title, paragraph, href }) => {
    return <section className="container">
        <Img image={image}/>
        <Description sub={sub} title={title} paragraph={paragraph} href={href === 1 ? '/Depilacion' : '/Joyeria'}/>
        <style jsx>{`
        .container {
            margin: auto;
            grid-row: ${row};
            align-self: center;
            display: grid;
            grid-template-columns: 1fr 1.1fr;
            justify-items: center;
            align-items: center;
            box-sizing: border-box;
            width: 100%;
            max-width: 1590px;
            min-width: 400px;
            max-height: 1080px;
            min-height: 530px;
            outline: 3px solid red;
        }
    `}</style>
    </section>
}
export default OurServices
