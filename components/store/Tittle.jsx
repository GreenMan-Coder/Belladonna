const Tittle = ({row}) => {
    return <div className="container">

            <figure>
                <img src="/img/joyas.jpg" alt="Gold" />
            </figure>
            
            <div className="text">
                <h1 className="headline">Joyería</h1>
                <h2 className="subhead">Descubre nuestras joyas de oro, plata y acero inoxidable, con una amplia variedad de estilos para elegir.</h2>
            </div>

        <style jsx>{`
            .container {
                position: relative;
                grid-row: ${row};
                grid-column: 1/5;
                width: 100%;
                height: 100%;
                overflow: hidden;
            }
            .text {
                position: relative;
                margin: 1rem;
                padding: 0 1rem;
                width: 800px;
                height: auto;
            }

            .headline {
                color: var(#fff);
                font-family: "Montserrat", sans-serif;
                text-shadow: -2px -2px #fdf09a, 2px 2px #f5c25d;
                font-size: 7rem;
                margin-bottom: 16px;
            }

            .subhead {
                color: #818181;
                font-size: 3rem;
                font-family: "Montserrat", sans-serif;
                text-shadow: 2px 2px #fdf09a;
            }

            figure {
                position: absolute;
                top: 0;
                right: 0;
                height: 700px;
                width: auto;
                overflow: hidden;
                z-index: 0;
            }
            img {
                height: 900px;
                width: auto;
            }
            @media (max-width: 820px){
                figure{
                    left: 3%;
                }
                .text {
                    padding: 0 1rem 0 0;
                }
                .headline {
                    text-align: left;
                }
                .subhead{
                    font-size: 3rem;
                    padding: 0 1.5em 0 0.7em;
                    text-align: center;
                }
            }
            @media (max-width: 766px){
                figure{
                    left: 0;
                    height: 550px;
                    border-radius: 10px;
                }
                img{
                    width: 100%;
                }
                .text {
                    padding: 0;
                }
                .headline {
                    position: relative;
                    left: 21%;
                }
                .subhead{
                    font-size: 2.5rem;
                    margin: 0;
                    padding: 0 2.5em 0 0.5em;
                }
            }
            @media (max-width: 746px){
                .headline {
                    position: relative;
                    left: 19%;
                }
                .subhead{
                    padding: 0;
                    width: 70%;
                    margin: 1em 0 0 2em;
                }
            }
            @media (max-width: 710px){
                .headline {
                    left: 17%;
                }
                .subhead{
                    margin: 1em 0 0 1.5em;
                }
            }
            @media (max-width: 682px){
                .headline {
                    left: 15%;
                }
                .subhead{
                    margin: 1em 0 0 1em;
                }
            }
            @media (max-width: 654px){
                .headline {
                    left: 13%;
                }
                .subhead{
                    margin: 1em 0 0 0.7em;
                    font-size: 2rem;
                }
            }
            @media (max-width: 618px){
                figure{
                    left: 0;
                    height: 350px;
                    border-radius: 10px;
                }
                img{
                    width: 100%;
                    height: auto;
                }
                .headline {
                    left: 18%;
                    font-size: 5.5rem;
                }
                .subhead{
                    margin: 1em 0 0 0.3em;
                    box-sizing: border-box;
                    padding: 0 3rem;
                    font-size: 1.5em;
                }
            }
            @media (max-width: 586px){
                figure{
                    left: 0;
                    height: 300px;
                    border-radius: 10px;
                }
                .headline {
                    left: 13%;
                    font-size: 5.5rem;
                    margin: 0;
                    margin-bottom: 20px;
                }
                .subhead{
                    margin: 0;
                    margin-left: 3.5em;
                    box-sizing: border-box;
                    padding: 0 2rem;
                    width: 15em;
                    font-size: 1.5em;
                }
            }
            @media (max-width: 540px){
                .headline {
                    font-size: 5rem;
                    position: relative;
                    left: 125px;
                }
            }
            @media (max-width: 414px){
                figure{
                    height: 300px;
                    border-radius: 10px;
                }
                
                .headline {
                    font-size: 4rem;
                    left: 90px;
                }
                .subhead{
                    font-size: 1.6rem;
                    padding: 0;
                    width: 13em;
                    margin: 0 0 0 1.45em;
                }
            }
            @media (max-width: 488px){
                .headline {
                    left: 1.1em;
                }
                .subhead{
                    padding: 0;
                    margin: 0;
                    margin-left: 1.5em;
                }
            }
            @media (max-width: 440px){
                figure{
                    height: 285px;
                    border-radius: 10px;
                }
                .headline {
                    font-size: 3rem;
                    width: 35%;
                    text-align: center;
                    box-sizing: border-box;
                    margin-top: 0.5em;
                    margin-left: 0.5em;
                }
                .subhead{
                    padding: 0;
                    margin: 0;
                    margin-left: 1em;
                    font-size: 1.4em;
                }
            }
            @media (max-width: 464px){
                .headline {
                    left: 0.9em;
                }
            }
            @media (max-width: 394px){                
                .headline {
                    left: 0.4em;
                }
                .subhead{
                    padding: 0;
                    margin-left: 1.5em;
                }
            }
            @media (max-width: 387px){                
                .headline {
                    left: 0.3em;
                }
                .subhead{
                    padding: 0;
                    margin-left: 1.2em;
                }
            }
            @media (max-width: 371px){                
                .headline {
                    left: 0.2em;
                }
                .subhead{
                    padding: 0;
                    margin-left: 1.7em;
                    padding-right: 1.5em;
                }
            }
        `}</style>
    </div>
}
export default Tittle