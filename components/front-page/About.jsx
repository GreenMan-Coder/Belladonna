import Footer from '../footer/Footer'
import Post from './about/Post'

const About = () => {
    return <section className="container">
        <Post/>
        <Footer/>
        <style jsx>{`
        .container {
            margin: auto;
            max-width: 1590px;
            min-width: 400px;
            background-color: var(--tone-purple);
            display: grid;
            grid-template-rows: auto auto;
        }

        @media screen and (max-width: 870px){
          .container{
            height: 80vh;
            grid-template-rows: 1fr 0.1fr;
          }
        }
    `}</style>
    </section>
}
export default About
