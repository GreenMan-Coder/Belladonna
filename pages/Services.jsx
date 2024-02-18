import Header from '../components/header/Header'

const Services = () => {
    return <article className="container">

        <Header row="1/2" color="#ffe3fe"/>

        <style jsx>{`
            .container {
                height: 100vh;
                width: 100%;
                display: flex;
                flex-direction: column;
            }

        `}</style>
    </article>
}
export default Services
