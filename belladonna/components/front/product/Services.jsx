import Tittle from './Tittle'
import Cards from './Cards'
import { useState } from 'react'
import DescriptionCard from './DescriptionCard'
import Promotion from './Promotion'

const Services = () => {

    const [cardSelected, setcardSelected] = useState(0);

    return <section className="container">

        <Tittle row="1/2" col="1/5" />
        <Cards id={1} cardSelected={cardSelected} setcardSelected={setcardSelected} row="3/4" col="2/3" text ="bikini" back="url(./img/trunk/bikini.jpg)" />
        <Cards id={2} cardSelected={cardSelected} setcardSelected={setcardSelected} row="3/4" col="1/2" text ="superior" back="url(./img/trunk/superior.jpg)" />
        <Cards id={3} cardSelected={cardSelected} setcardSelected={setcardSelected} row="3/4" col="3/4" text ="inferior" back="url(./img/trunk/inferior.jpg)" />
        <p className="parag">Al depilarte con cera tendrás un <span>efecto duradero</span>, pues solo se aplica una vez al mes dejando que la piel descanse y el vello crezca sin interrupciones evitando usar máquina de afeitar, cremas y demás productos de depilación que producen irritación en la piel, permitiendo así, lucir una piel sedosa y saludable.</p>

        <DescriptionCard cardSelected={cardSelected}/>
        
        <Promotion/>
        
        <style jsx>{`

            .container {
                font-family: 'Karla', sans-serif; 
                height: 52rem;
                width: 100%;
                display: grid;
                grid-template-rows: 0.8fr 0.2fr 0.3fr 1fr;
                grid-template-columns: 0.6fr 0.6fr 0.6fr 0.7fr; 
                justify-items: center;
                align-items: center;
                grid-row-gap: 10px;
            }
            .parag{
                grid-row: 2/3;
                grid-column: 1/5;
                width: 100%;
                height: auto;
                font-size: 21px;
                text-align: start;
                box-sizing: border-box;
                padding: 0 20px;
            }

            span{
                color: #e7822f;
                font-weight: 900;
            }

        `}</style>
    </section>
}

export default Services