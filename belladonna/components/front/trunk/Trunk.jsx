import Header from '../header/Header'
import LinkPageSections from './LinkPageSections'

const Trunk = () => {
    return <section className="container">

        <Header/>
        <LinkPageSections href="../../../pages/Store.jsx" clase="background-one" text="Tienda" numberLink="link-one"/>

        <style jsx>{`

            .container{
                margin: 0;
                height: 100vh;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: 0.3fr 1fr;
                text-transform: uppercase;
            }

        `}</style>
    </section>
}

export default Trunk