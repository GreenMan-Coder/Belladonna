import Header from "../components/front/header/Header"
import Img from "../components/belladonna/Img"
import Biografia from "../components/belladonna/Biografia"

const Belladonna = () => {
    return <article className="container">

        <Header image="one" tam="11rem" num={1}/>
        <Img/>
        <Biografia/>

        <style jsx>{`
            .container {
                width: 100%;
                height: auto;
                display: grid;
                grid-template-columns: 40rem 40rem;
                grid-template-rows: 0.4fr 32.2rem;
                justify-items: center;
                align-items: center;
                font-family: 'Karla', sans-serif;
                background: #f8f0b6;
            }
        `}</style>
    
        </article>

}

export default Belladonna