import Trunk from '../components/front/trunk/Trunk'
import Services from './Services'

const Front = () => {
    return <article className="container">

        <Trunk/>

        <style jsx>{`

            .container {
                display: grid;
                grid-row-gap: 40px;
            }

        `}</style>
    </article>
}

export default Front