import Tittle from './product/Tittle'
import Cards from './product/Cards'
import DescriptionCard from './product/DescriptionCard'

const Services = () => {
    return <section className="container">

        <Tittle row="1/2" col="1/3" />
        <Cards row="3/4" col="1/2" text ="bikini" back="url(./img/trunk/bikini.jpg)"/>
        <Cards row="4/5" col="1/2" text ="superior" back="url(./img/trunk/superior.jpg)"/>
        <Cards row="5/6" col="1/2" text ="inferior" back="url(./img/trunk/inferior.jpg)"/>
        <p className="test">Al depilarte con cera tendrás un <span>efecto duradero</span>, pues solo se aplica una vez al mes dejando que la piel descanse y el vello crezca sin interrupciones evitando usar máquina de afeitar, cremas y demás productos de depilación que producen irritación en la piel, permitiendo así, lucir una piel sedosa y saludable.
        </p>
        <DescriptionCard zone="prueba"/>

        <style jsx>{`

            .container {
                font-family: 'Karla', sans-serif;
                height: 52rem;
                width: 100%;
                display: grid;
                grid-template-rows: 0.8fr 0.2fr 0.3fr 0.3fr 0.3fr;
                grid-template-columns: 1fr 1fr; 
                justify-items: center;
                align-items: center;
                grid-row-gap: 10px;
            }
            .test{
                grid-row: 2/3;
                grid-column: 1/3;
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