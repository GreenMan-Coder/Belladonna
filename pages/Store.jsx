import Header from '../components/header/Header'
import BuySteps from "../components/store/BuySteps"
import Jewelry from "../components/store/Jewelry"
import Tittle from "../components/store/Tittle"

const Store = () => {
    return <section className="container">
        
        <Header image="one" tam="12rem" num={1} num2 = {2}/>
        <Tittle row="2/3"/>
        <Jewelry row="3/4"/>
        {/* <BuySteps row="4/5"/> */}
        

        <style jsx>{`
            @import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
            .container {
                font-family: 'Karla', sans-serif;
                display: grid;
                height: 100%;
                box-sizing: border-box;
                padding-bottom: 7.5em;
                grid-template-rows: auto 100vh 1fr auto;
                grid-template-columns: 1fr;
                background: #f8f0b6;
            }
            @media (max-width: 1280px){
                .container{
                    padding-bottom: 3em;
                }
            }
            @media (max-width: 1024px){
                .container{
                    padding-bottom: 5em;
                }
            }
            @media (max-width: 912px){
                .container{
                    grid-template-rows: auto 50% 1fr;
                    padding-bottom: 13em;
                }
            }
            @media (max-width: 618px){
                .container{
                    grid-template-rows: auto 35% 1fr;
                    padding: 0;
                    margin: 0;
                    margin-bottom: 3em;
                }
            }
            @media (max-width: 586px){
                .container{
                    grid-template-rows: auto 35% 1fr;
                    padding: 0;
                    margin: 0;
                    margin-bottom: 6em;
                }
            }
            @media (max-width: 540px){
                .container{
                    margin-bottom: 5em;
                }
            }
            @media (max-width: 440px){
                .container{
                    margin-bottom: 6em;
                }
            }

            @media (max-width: 414px){
                .container{
                    grid-template-rows: auto 37% 55%;
                    margin: 0;
                    padding-bottom: 5em;
                }
            }

        `}</style>
    </section>
}

export default Store