import Header from '../components/header/Header'
import BuySteps from "../components/store/BuySteps"
import Jewelry from "../components/store/Jewelry"
import Tittle from "../components/store/Tittle"
import JewelryNav from '../components/store/JewelryNav'

const Store = () => {
    return <section className="container">
        
        <Header row="1/2" color="--purple-blanco"/>
        <Tittle row="2/3"/>
        <section className="jewelry">
            <JewelryNav row="1/2"/>
            <Jewelry row="2/3"/>
        </section>
        {/* 
        <BuySteps row="4/5"/>
         */}
        
        {/*  */}
        

        <style jsx>{`
            @import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
            .container {
                border: 1px solid red;
                font-family: 'Karla', sans-serif;
                background: inherit;
                height: auto;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                display: grid;
                grid-template-rows: auto 1fr 110vh  auto;
                grid-template-columns: 1fr;
            }
            .jewelry{
                grid-row: 3/4;
                display: grid;
                grid-template-rows: 0.1fr 100vh;
                border: 1px solid blue;
            }
        `}</style>
    </section>
}

export default Store