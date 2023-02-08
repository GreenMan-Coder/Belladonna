const Tittle = () => {
    return <div className="container">

            <div className="text skew-text-tr">
                <h1 className="headline">Joyería</h1>
                <h2 className="subhead">Descubre nuestras joyas de oro, plata y acero inoxidable, con una amplia variedad de estilos para elegir.</h2>
            </div>

            <figure className="picture skew-tl">
                <img src="./img/joyas.jpg" alt="Gold" />
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
                font-size: 3.5rem;
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
        `}</style>
    </div>
}
export default Tittle