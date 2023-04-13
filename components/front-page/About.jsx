import Post from "./about/Post"
import Footer from "../footer/Footer"

const About = () => {

    return <section className="container">
        
        <div className="space"></div>
        <div className="post">
            <Post/>
        </div>
        <Footer/>

        <style jsx>{`
            .container {
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
                background-color: var(--tone-purple);
                font-family: var(--font);
            }
            .space{
                width: 100%;
                height: 23.3%;
            }
            .post{
                flex-grow: 2;
            }
        `}</style>
    </section>
}
export default About