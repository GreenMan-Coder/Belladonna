import Galery from "../Galery";

const BodyZone = ({handlePrevImage, handleNextImage, currentImage, services}) => {
  return <section className="container">
    <div className="buttons">
        <button className="prevButton" onClick={handlePrevImage}>
        <svg viewBox="0 0 512 512"><path color="#3f0c3a" fill="currentcolor" d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM217.4 376.9L117.5 269.8c-3.5-3.8-5.5-8.7-5.5-13.8s2-10.1 5.5-13.8l99.9-107.1c4.2-4.5 10.1-7.1 16.3-7.1c12.3 0 22.3 10 22.3 22.3l0 57.7 96 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32l-96 0 0 57.7c0 12.3-10 22.3-22.3 22.3c-6.2 0-12.1-2.6-16.3-7.1z"/></svg>
        </button>
        <button className="nextButton "onClick={handleNextImage}>
          <svg viewBox="0 0 512 512"><path color="#3f0c3a" fill="currentcolor" d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1l99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2 10.1-5.5 13.8L294.6 376.9c-4.2 4.5-10.1 7.1-16.3 7.1C266 384 256 374 256 361.7l0-57.7-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-57.7c0-12.3 10-22.3 22.3-22.3c6.2 0 12.1 2.6 16.3 7.1z"/></svg>
        </button>
      </div>
      <Galery services={services} currentImage={currentImage}/>
      <h1 className="name">{services[currentImage].name}</h1>
      <h2 className="price">{services[currentImage].price}</h2>
      <button className="add"><svg viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
      cotizar servicio</button>
    <style jsx>{`
      .container {
        margin: 0;
        padding: 0;
        position: relative;
        display: grid;
        grid-template-columns: 0.6fr 0.5fr;
        grid-template-rows: 1fr;
        justify-items: center;
        align-items: center;
        width: 100%;
        height: 100%;
      }
      .buttons{
        position: absolute;
        grid-column: 1/3;
        z-index: 1;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        width: 100%;
      }
      .prevButton svg{
        width: 10%;
      }
      .nextButton{
        grid-column: 2/3;
        justify-content: end;
      }
      .nextButton svg{
        width: 10%;
      }
      button{
        margin: 0;
        padding: 0;
        height: auto;
        width: auto;
        display: flex;
        justify-items: center;
        align-items: center;
        background: transparent;
        border: none;
        top: -15px;
      }
      svg:hover{
        cursor: pointer;
      }
      .name{
        grid-row: 1/2;
        grid-column: 2/3;
        position: relative;
        top: -10%;
        font-size: 40px;
        font-weight: 700;
        color: var(--normal-purple);
        text-transform: capitalize;
      }
      .price{
        grid-row: 1/2;
        grid-column: 2/3;
        position: relative;
        top: 2%;
        font-size: 30px;
        font-weight: 700;
        color: var(--tone-pink);
      }
      .add{
        grid-column: 2/3;
        grid-row: 1/2;
        position: relative;
        top: 20%;
        border: solid 2px var(--normal-purple);
        width: 80%;
        height: 10%;
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
        display: grid;
        grid-template-columns: 0.3fr 1fr;
        grid-template-rows: 1fr;
        justify-items: center;
        align-items: center;
        font-size: 0.93em;
      }
      .add:hover{
        background: var(--normal-purple);
        color: var(--purple-blanco);
      }
      .add svg{
        width: 43%;
        position: relative;
        justify-self: end;
        left: 53%;
        fill: currentColor;
        color: var(--normal-purple);
        -webkit-transition: all 0.3s;
            -moz-transition: all 0.3s;
            -ms-transition: all 0.3s;
            -o-transition: all 0.3s;
            transition: all 0.3s;
      }
      .add:hover svg{
        color: var(--purple-blanco);
      }
    `}</style>
  </section>
}
export default BodyZone
