import Footer from '../footer/Footer'
import Post from './about/Post'

const About = () => {
    return <section className="container">
        <Post/>
        <Footer/>
        <style jsx>{`
        .container {
            margin: auto;
            height: 35em;
            max-width: 1590px;
            min-width: 400px;
            background-color: var(--tone-purple);
            display: grid;
            grid-template-rows: 1fr 0.25fr;
        }
    `}</style>
    </section>
}
export default About
