import Trunk from '../components/front/trunk/Trunk'
import Header from '../components/front/header/Header'

const Front = () => {
    return <article className="container">

        <Header image="one" tam="11rem"/>
        <Trunk/>

        <style jsx>{`

            .container {
                display: grid;
            }

        `}</style>
    </article>
}

export default Front