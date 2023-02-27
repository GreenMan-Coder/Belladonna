import Header from "../components/front/header/Header"
import Img from "../components/belladonna/Img"
import Biografia from "../components/belladonna/Biografia"

const Belladonna = () => {
    return <article className="container">

        <Header image="one" tam="10rem" num={1} num2={4}/>
        <Img/>
        <Biografia/>
        

        <style jsx>{`
            .container {
                font-family: 'Karla', sans-serif;
                width: 100%;
                height: 100vh;
                display: grid;
                grid-template-rows: auto 1fr 1fr;
                grid-template-columns: 1fr;
                background: #f8f0b6;
            }
        `}</style>
    
        </article>

}

export default Belladonna