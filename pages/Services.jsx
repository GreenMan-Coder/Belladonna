import Tittle from '../components/front/product/Tittle'
import Cards from '../components/front/product/Cards'
import { useState } from 'react'
import DescriptionCard from '../components/front/product/DescriptionCard'
import Promotion from '../components/front/product/Promotion'
import Header from '../components/front/header/Header'

const Services = () => {

    const [cardSelected, setcardSelected] = useState(0);

    return <section className="container">

        <Header image="one" tam="10rem" num={1} num2={3}/>
        <Tittle row="2/3" col="1/5" />
        <h2>Elige la zona</h2>

        <Cards id={1} cardSelected={cardSelected} setcardSelected={setcardSelected} pos="center" text ="bikini" back="url(/img/trunk/bikini.jpg)" />
        <Cards id={2} cardSelected={cardSelected} setcardSelected={setcardSelected} pos="flex-start" text ="superior" back="url(/img/trunk/superior.jpg)" />
        <Cards id={3} cardSelected={cardSelected} setcardSelected={setcardSelected} pos="flex-end" text ="inferior" back="url(/img/trunk/inferior.jpg)" />

        <DescriptionCard cardSelected={cardSelected}/>
        
        <Promotion/>
        
        <style jsx>{`

            .container {
                font-family: 'Karla', sans-serif; 
                height: 100%;
                width: 100%;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                grid-template-rows: auto 1fr 0.2fr 0.4fr 1fr;
                justify-items: center;
                align-items: center;
                background: #f8f0b6;
            }
            h2{
                grid-row: 3/4;
                grid-column: 1/5;
                width: auto;
                height: auto;
                font-size: 3.5rem;
                box-sizing: border-box;
                color: #fefae0;
                text-shadow: 0 8px 9px #c4b59d, 0px -2px 1px #fff;
                font-weight: bold;
                letter-spacing: -1px;
                text-align: center;
                background: linear-gradient(to bottom, #f0acaa 0%,#db99e2 100%);
                padding: 20px 400px;
                border-radius: 85% 85% 85% 85%/ 30%;
            }

            span{
                color: #e7822f;
                font-weight: 900;
            }

            @media (max-width: 1126px){
                h2{
                    font-size: 2.5rem;
                }
            }
            @media (max-width: 1086px){
                .container{
                    grid-template-rows: auto 1fr 0.1fr 0.1fr 0.5fr;
                }
            }
            @media (max-width: 1029px){
                h2{
                    padding: 20px 300px;
                }
            }
            @media (max-width: 829px){
                h2{
                    padding: 20px 250px;
                }
            }

        `}</style>
    </section>
}

export default Services