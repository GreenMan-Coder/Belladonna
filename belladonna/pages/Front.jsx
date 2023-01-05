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
                
            }

        `}</style>
    </article>
}

export default Front