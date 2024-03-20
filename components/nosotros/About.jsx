
const About = ({ row, title, text, imagen, colImg, colText }) => {
    return <section className="container">

        <hgroup>
            <h1>{title}</h1>
            <p>{text}</p>
        </hgroup>

        <div className="image">
            <img src={imagen} alt="company" />
        </div>

        <style jsx>{`
            .container {
                grid-row: ${row};
                height: 25em;
                width: 100%;
                min-width: 350px;
                max-width: 1590px;
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
                font-size: 2.5em;
                text-align: center;
                color: var(--light-purple);
            }
            p{
                box-sizing: border-box;
                padding-left: ${title === 'Misión' ? '2em' : '0'};
                padding-right: ${title === 'Misión' ? '0' : '2em'};
                margin-top: 1.3em;
                line-height: 30px;
                letter-spacing: 0.5px;
                color: var(--tone-purple);
                text-align: justify;
                font-size: 1.2em;
            }

            .image{
                position: absolute;
                grid-column: ${colImg};
            }
            img{
                width: 30em;
                height: 17em;
            }

            @media screen and (max-width: 1080px){
                .container{
                    margin-bottom: 2em;
                }
            }

            @media screen and (max-width: 980px){
                .container{
                    margin-bottom: 3em;
                }
            }

            @media screen and (max-width: 870px){
                .container {
                    grid-template-columns: 1fr;
                    grid-template-rows: auto auto;
                    height: 80vh;
                    min-height: 250px;
                }

                .image{
                    display: none;
                }

                hgroup{
                    position: relative;
                    grid-column: ${colText};
                }

                p{
                    padding: 0;
                    padding: 0 2em;
                }
                h1{
                  font-size: 3em
                }
            }

            @media screen and (max-width: 495px){
                .container{
                    margin-bottom: 4em;
                }
            }

            @media screen and (max-width: 440px){
                .container{
                    margin-bottom: 8em;
                }
            }
        `}</style>
    </section>
}
export default About
