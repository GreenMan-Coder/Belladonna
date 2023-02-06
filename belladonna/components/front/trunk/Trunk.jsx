import LinkPageSections from './LinkPageSections'

const Trunk = () => {
    return <section className="container">

        <LinkPageSections href="/Store/" clase="background-one" text="Tienda" numberLink="link-two" col="1/2"/>
        <LinkPageSections href="/Services/" clase="background-two" text="Depilación para mujeres" numberLink="link-one" col="2/3"/>
        <LinkPageSections href="/Belladonna/" clase="background-three" text="Belladonna" numberLink="link-three" col="3/4"/>

        <style jsx>{`

            .container{
                margin: 0;
                height: 27.2rem;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: 1fr;
                text-transform: uppercase;
            }

        `}</style>
    </section>
}

export default Trunk