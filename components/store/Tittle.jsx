const Tittle = () => {
    return <div className="container">

            <div className="text skew-text-tr">
                <h1 className="headline">Joyería</h1>
                <h2 className="subhead">Descubre nuestras joyas de oro, plata y acero inoxidable, con una amplia variedad de estilos para elegir.</h2>
            </div>

            <figure className="picture skew-tl">
                <img src="/img/joyas.jpg" alt="Gold" />
            </figure>

        <style jsx>{`
            .container {
                grid-row: 1/2;
                width: 100%;
                grid-row: 1/2;
                grid-column: 1/4;
                position: relative;
            }

            @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,800&display=swap");
            @import url("https://fonts.googleapis.com/css2?family=Raleway&display=swap");

            :root {
                --color-dark: #111;
                --color-light: #fff;
            }

            .container .text {
                z-index: 1;
                margin: 1rem 1rem;
                padding: 0 1rem;
                height: 500px;
                width: 800px;
                position: absolute;
                left: 50px;
            }

            .headline {
                color: var(--color-light);
                font-family: "Montserrat", sans-serif;
                text-shadow: -2px -2px #fdf09a, 2px 2px #f5c25d;
                font-size: 7rem;
                margin-bottom: 16px;
                margin-top: 6rem;
            }

            .container figure {
                position: absolute;
                top: 0;
                right: 0;
                height: 700px;
                width: auto;
                z-index: 0;
                overflow: hidden;
            }
            
            .container img {
                height: 1000px;
                width: auto;
            }
            
            .subhead {
                color: #818181;
                font-size: 3rem;
                font-family: "Montserrat", sans-serif;
                text-shadow: 2px 2px #fdf09a;
            }

            @media (max-width: 910px){
                .container .text {
                    width: 713px;
                    top: 5rem;
                }

                .headline{
                    font-size: 7rem;
                }

                .subhead {
                    font-size: 2rem;
                }

                .container figure {
                    height: 640px;
                }
            }
            @media (max-width: 841px){
                .container .text {
                    width: 650px;
                    top: 1rem;
                }

                .headline{
                    font-size: 7rem;
                    text-align: center;
                }
                .subhead {
                    text-align: center;
                }

                .container img {
                    height: 990px;
                    width: auto;
                }

                .container figure {
                    height: 640px;
                    border-radius: 0 0 10px 10px;
                }
            }
            @media (max-width: 793px){
                .container .text {
                    width: 600px;
                    top: 1rem;
                }
            }
            @media (max-width: 733px){
                .container .text {
                    width: 530px;
                    top: 1rem;
                }
                .container figure {
                    height: 600px;
                    border-radius: 10px 10px 10px 10px;
                    left: 0px;
                }
            }
            @media (max-width: 667px){
                .container .text {
                    width: 450px;
                    top: 1rem;
                }
            }
        `}</style>
    </div>
}
export default Tittle