import Header from '../components/front/Header'
import Trunk from '../components/front/Trunk'

const Front = () => {
    return <article className="container">

        <Header/>
        <Trunk/>

        <style jsx>{`

            .container {
                
            }

        `}</style>
    </article>
}

export default Front