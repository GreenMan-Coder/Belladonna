import BuySteps from "./BuySteps"
import Jewelry from "./Jewelry"
import Tittle from "./Tittle"

const Front = () => {
    return <section className="container">
        
        <Tittle/>
        <BuySteps/>
        <Jewelry/>
        <h2>Encontrarás la pieza perfecta para complementar tu look y reflejar tu personalidad única.</h2>
        
        

        <style jsx>{`

            .container {
                width: 98%;
                height: 46rem;
                display: grid;
                grid-template-rows: 750px 150px 470px;
            }

            h2{
                grid-row: 2/3;
                grid-column: 1/4;
                text-align: center;
                background: #f5c25d;
                height: 100%;
                width: 100%;
                box-sizing: border-box;
                padding-top: 4rem;
                font-weight: 900;
                border-radius: 15px;
                box-shadow: 0 0px 15px rgba(0, 0, 0, 0.2);
            }


        `}</style>
    </section>
}
export default Front;