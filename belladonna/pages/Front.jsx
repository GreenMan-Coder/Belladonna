import Header from '../components/front/header/Header'
import Trunk from '../components/front/trunk/Trunk'
import Services from '../components/front/product/Services'

const Front = () => {
    return <article className="container">

        <Header/>
        <Trunk/>
        <Services/>

        <style jsx>{`

            .container {
                display: grid;
                grid-row-gap: 40px;
            }

        `}</style>
    </article>
}

export default Front