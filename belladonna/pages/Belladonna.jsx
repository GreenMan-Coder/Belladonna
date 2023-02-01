import Header from "../components/front/header/Header"

const Belladonna = () => {
    return <article className="container">

        <Header/>

        <style jsx>{`
            .container {
                width: 100%;
                height: 98vh;
                border: 1px solid red;
                display: grid;
            }
        `}</style>
    
        </article>

}

export default Belladonna