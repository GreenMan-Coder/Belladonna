import Header from './Header'
import Trunk from './Trunk'

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