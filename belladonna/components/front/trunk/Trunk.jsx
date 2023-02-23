import LinkPageSections from './LinkPageSections'

const Trunk = () => {
    return <section className="container">

        <LinkPageSections href="/Store/" clase="background-one" text="tienda" numberLink="link-two" col="1/2"/>
        <LinkPageSections href="/Services/" clase="background-two" text="depilación femenina" numberLink="link-one" col="2/3"/>
        <LinkPageSections href="/Belladonna/" clase="background-three" text="belladonna" numberLink="link-three" col="3/4"/>

        <style jsx>{`

            .container{
                grid-column: 1/2;
                margin: 0;
                height: 100%;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: 1fr;
                text-transform: uppercase;
            }

            @media (max-width: 1014px){
                .container{
                    grid-template-columns: 1fr;
                    grid-template-rows: repeat(3, 1fr);
                    justify-content: center;
                    align-items: center;
                }
            }

        `}</style>
    </section>
}

export default Trunk