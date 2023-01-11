import Header from '../components/front/Header'
import Trunk from '../components/front/Trunk'
import Services from '../components/front/Services'

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