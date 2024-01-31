import Post from "./about/Post"
import Footer from "../footer/Footer"

const About = () => {
  return <section className="container">
    <Post/>
    <Footer/>
    <style jsx>{`
      .container {
        margin: 0;
        box-sizing: border-box;
        background-color: var(--tone-purple);
        font-family: var(--font);
        display: grid;
        grid-template-rows: 1fr;
      }
      @media screen and (max-width: 2500px){
        .container {
          height: 90rem;
        }
      }
    `}</style>
  </section>
}
export default About
