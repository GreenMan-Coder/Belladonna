import Tittle from '../components/front/product/Tittle'
import Cards from '../components/front/product/Cards'
import { useState } from 'react'
import DescriptionCard from '../components/front/product/DescriptionCard'
import Promotion from '../components/front/product/Promotion'
import Header from '../components/front/header/Header'

const Services = () => {

    const [cardSelected, setcardSelected] = useState(0);

    return <section className="container">

        <Header image="one" tam="11rem" num={1} num2={3}/>
        <Tittle row="2/3" col="1/5" />
        <h2>Elige la zona</h2>

        <Cards id={1} cardSelected={cardSelected} setcardSelected={setcardSelected} pos="center" text ="bikini" back="url(./img/trunk/bikini.jpg)" />
        <Cards id={2} cardSelected={cardSelected} setcardSelected={setcardSelected} pos="flex-start" text ="superior" back="url(./img/trunk/superior.jpg)" />
        <Cards id={3} cardSelected={cardSelected} setcardSelected={setcardSelected} pos="flex-end" text ="inferior" back="url(./img/trunk/inferior.jpg)" />

        <DescriptionCard cardSelected={cardSelected}/>
        
        <Promotion/>
        
        <style jsx>{`

            .container {
                font-family: 'Karla', sans-serif; 
                height: auto;
                width: 100%;
                display: grid;
                grid-template-rows: auto 21rem 10rem 8rem 18rem;
                grid-template-columns: 0.6fr 0.6fr 15rem 30rem; 
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

        `}</style>
    </section>
}

export default Services