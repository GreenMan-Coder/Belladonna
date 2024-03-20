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
            min-width: 350px;
            min-height: 620px;
            background-color: var(--tone-purple);
            display: grid;
            grid-template-rows: auto auto;
        }

        @media screen and (max-width: 870px){
            .container{
                box-sizing: border-box;
                margin-top: 20em;
                height: 91vh;
                grid-template-rows: 1fr 0.1fr;
            }
        }

        @media screen and (max-width: 795px) {
            .container{
                font-size: 11px;
            }
        }
    `}</style>
    </section>
}
export default About
