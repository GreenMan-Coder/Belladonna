import Galery from '../Galery'

const BodyZone = ({ handlePrevImage, handleNextImage, currentImage, services }) => {
    return <section className="container">
        <div className="buttons">
            <button onClick={handlePrevImage}>
                <svg viewBox="0 0 512 512"><path color="#893c8a" fill="currentcolor" d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM217.4 376.9L117.5 269.8c-3.5-3.8-5.5-8.7-5.5-13.8s2-10.1 5.5-13.8l99.9-107.1c4.2-4.5 10.1-7.1 16.3-7.1c12.3 0 22.3 10 22.3 22.3l0 57.7 96 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32l-96 0 0 57.7c0 12.3-10 22.3-22.3 22.3c-6.2 0-12.1-2.6-16.3-7.1z"/></svg>
            </button>
            <button onClick={handleNextImage}>
                <svg viewBox="0 0 512 512"><path color="#893c8a" fill="currentcolor" d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1l99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2 10.1-5.5 13.8L294.6 376.9c-4.2 4.5-10.1 7.1-16.3 7.1C266 384 256 374 256 361.7l0-57.7-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-57.7c0-12.3 10-22.3 22.3-22.3c6.2 0 12.1 2.6 16.3 7.1z"/></svg>
            </button>
        </div>
        <h1 className="name">{services[currentImage].name}</h1>
        <h2 className="price">{services[currentImage].price}</h2>
        <div className="photo">
            <Galery services={services} currentImage={currentImage}/>
        </div>
        <a href="https://wa.me/message/D4KMZ4C5TFU5N1" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
            <span>cotizar servicio</span></a>
        <style jsx>{`
            .container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr;
                justify-items: center;
                align-items: center;
                width: 100%;
                height: 100%;
            }
            .buttons{
                grid-row: 1/2;
                grid-column: 2/3;
                align-self: end;
                position: relative;
                bottom: clamp(10%, 15%, 20%); ;
                display: flex;
                justify-content: center;
                gap: 1em;
                width: 30%;
            }
            button{
                height: auto;
                width: auto;
                background: transparent;
                border: none;
            }
            a{
                text-decoration: none;
                grid-column: 2/3;
                grid-row: 1/2;
                position: relative;
                top: 5em;
                border: solid 2px var(--normal-purple);
                width: 24em;
                background: none;
                color: var(--normal-purple);
                cursor: pointer;
                font-weight: 700;
                text-transform: uppercase;
                -webkit-transition: all 0.3s;
                    -moz-transition: all 0.3s;
                    -ms-transition: all 0.3s;
                    -o-transition: all 0.3s;
                    transition: all 0.3s;
                    font-family: var(--font);
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                gap: 15px;
                box-sizing: border-box;
                font-size: 0.93em;
            }
            a:hover{
                background: var(--normal-purple);
                color: var(--purple-blanco);
            }
            a svg{
                width: 2.5em;
                position: relative;
                right: 2%;
                box-sizing: border-box;
                padding: .2em 0;
                fill: currentColor;
                color: var(--normal-purple);
                -webkit-transition: all 0.3s;
                    -moz-transition: all 0.3s;
                    -ms-transition: all 0.3s;
                    -o-transition: all 0.3s;
                    transition: all 0.3s;
            }
            a:hover svg{
                color: var(--purple-blanco);
            }

            span{
                align-self: center;
                box-sizing: border-box;
                font-size: 1em;
            }

            svg{
                width: 2.2em;
            }
            svg:hover{
                cursor: pointer;
            }
            .name{
                grid-row: 1/2;
                grid-column: 2/3;
                position: relative;
                top: -10%;
                font-size: 2.5em;
                font-weight: 700;
                color: var(--normal-purple);
                text-transform: capitalize;
            }
            .price{
                grid-row: 1/2;
                grid-column: 2/3;
                position: relative;
                top: 2%;
                font-size: 1.9em;
                font-weight: 700;
                color: var(--tone-pink);
            }

            @media screen and (max-width: 850px){
                .container {
                    font-size: 14px;
                }
            }

            @media screen and (max-width: 700px){
                .container {
                    font-size: 13px;
                }
            }

            @media screen and (max-width: 645px){
                .container {
                    font-size: 12px;
                }
            }

            @media screen and (max-width: 630px){
                .container {
                    min-height: 400px;
                    font-size: 11px;
                    height: 70%;
                    align-self: start;
                    box-sizing: border-box;
                    margin: 2em 0 0 0;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: auto auto auto auto auto;
                    justify-items: center;
                    align-items: center;
                }

                .name{
                    top: 0;
                    grid-row: 1/2;
                    grid-column: 1/2;
                    box-sizing: border-box;
                    padding: 0 0 .3em 0;
                }

                .price{
                    top: 2%;
                    grid-row: 2/3;
                    grid-column: 1/2;
                    box-sizing: border-box;
                    padding: 0 0 .5em 0;
                }

                .photo{
                    grid-column: 1/2;
                    grid-row: 3/4;
                    box-sizing: border-box;
                }

                .buttons{
                    grid-row: 4/5;
                    grid-column: 1/2;
                    bottom: 0;
                    gap: 1em;
                }

                a{
                    grid-column: 1/2;
                    grid-row: 5/6;
                    top: 0;
                    width: 24em;
                    height: 3em;
                }
            }
        `}</style>
    </section>
}
export default BodyZone
