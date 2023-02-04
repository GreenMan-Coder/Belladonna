import Header from "../components/front/header/Header"
import Img from "../components/belladonna/Img"
import Biografia from "../components/belladonna/Biografia"

const Belladonna = () => {
    return <article className="container">

        <Header/>
        <Img/>
        <Biografia/>

        <style jsx>{`
            .container {
                width: 100%;
                height: 98vh;
                display: grid;
                grid-template-columns: 40rem 40rem;
                justify-items: center;
                align-items: center;
                font-family: 'Karla', sans-serif;
            }
        `}</style>
    
        </article>

}

export default Belladonna