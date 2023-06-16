
const About = ({row, title, text, imagen, colImg, colText}) => {
    return <section className="container">

        <hgroup>
            <h1>{title}</h1> 
            <p>{text}</p>
        </hgroup>

        <img src={imagen} alt="company" />

        <style jsx>{`
            .container {
                grid-row: ${row};
                height: 100%;
                width: 100%;
                position: relative;
                display: grid;
                grid-template-columns: 1fr 1fr;
                justify-items: center;
                align-items: center;
                box-sizing: border-box;
            }
            hgroup{
                position: absolute;
                grid-column: ${colText};
            }
            h1{
                margin: 0;
                margin-top: 10px;
                font-size: 40px;
                text-align: center;
                color: var(--light-purple);
            }
            p{
                margin: 0;
                box-sizing: border-box;
                padding: 0 5px;
                margin-top: 40px;
                line-height: 30px;
                letter-spacing: 0.5px;
                color: var(--tone-purple);
                text-align: justify;
            }
            img{
                position: absolute;
                grid-column: ${colImg};
                width: 80%;
                height: 65%;
            }
        `}</style>
    </section>
}
export default About