import Post from "./about/Post"
import Footer from "../footer/Footer"

const About = () => {
  return <section className="container">
    <Post/>
    <Footer/>
    <style jsx>{`
      .container {
        height: 100%;
        width: 100%;
        margin: 0;
        box-sizing: border-box;
        margin-top: 10%;
        background-color: var(--tone-purple);
        font-family: var(--font);
        display: grid;
        grid-template-rows: 1fr 0.25fr;
      }
      @media screen and (max-width: 360px) {
    .container{

    }
    }
    `}</style>
  </section>
}
export default About
