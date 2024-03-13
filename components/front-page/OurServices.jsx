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
            width: 98%;
            max-width: 1590px;
            min-width: 400px;
            margin-bottom: 8em;
        }

        @media screen and (max-width: 1640px) {
            .container{
                font-size: 15px;
            }
        }

        @media screen and (max-width: 1250px) {
            .container{
                font-size: 15px;
            }
        }

        @media screen and (max-width: 1065px) {
            .container{
                font-size: 13.5px;
            }
        }

        @media screen and (max-width: 920px) {
            .container{
                font-size: 12px;
            }
        }

        @media screen and (max-width: 870px) {
            .container{
                margin-bottom: 0;
                height: 100vh;
                grid-template-columns: 1fr 1fr;
                min-height: 400px;
                max-height: 1500px;
            }
        }

        @media screen and (max-width: 860px) {
            .container{
                font-size: 11px;
            }
        }

        @media screen and (max-width: 780px) {
            .container{
                font-size: 10px;
            }
        }

        @media screen and (max-width: 700px) {
            .container{
                font-size: 9px;
            }
        }

        @media screen and (max-width: 620px) {
            .container{
                font-size: 8px;
            }
        }

        @media screen and (max-width: 550px) {
            .container{
                font-size: 7px;
            }
        }

        @media screen and (max-width: 480px) {
            .container{
                font-size: 6px;
            }
        }

        @media screen and (max-width: 420px) {
            .container{
                font-size: 5.5px;
            }
        }
    `}</style>
    </section>
}
export default OurServices
