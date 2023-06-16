import LinkPageSections from './LinkPageSections'

const Trunk = () => {
    return <section className="container">

        <LinkPageSections href="/Business/" clase="background-one" text="empresa" numberLink="link-two" col="1/2"/>
        <LinkPageSections href="/Depilacion/" clase="background-two" text="mujer" numberLink="link-one" col="2/3"/>

        <style jsx>{`

            .container{
                margin: 0;
                height: 100%;
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                text-transform: uppercase;
            }
        `}</style>
    </section>
}

export default Trunk