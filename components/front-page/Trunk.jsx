import LinkPageSections from './LinkPageSections'

const Trunk = ({row}) => {
    return <section className="container">
        <LinkPageSections href="/Business/" clase="background-one" text="oro plata" numberLink="link-two" col="1/2"/>
        <LinkPageSections href="/Depilacion/" clase="background-two" text="bisutería" numberLink="link-one" col="2/3"/>
        <style jsx>{`
          .container{
            margin: 0;
            grid-row: ${row};
            height: 20vh;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            text-transform: uppercase;
          }
        `}</style>
    </section>
}

export default Trunk
