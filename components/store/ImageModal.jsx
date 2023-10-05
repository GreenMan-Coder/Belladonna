const ImageModal = ({ imageDetails, onClose, onAddToCart }) => {
  return <article className="container">
    <div className="modal-content">
      <img src={imageDetails.imagenUrl.url} alt={imageDetails.image} />
      <div className="wrapper">
        <button className="close-button" onClick={onClose}>
          Cerrar
        </button>
        <h3>Joya</h3>
        <h1>{imageDetails.name}</h1>
        <h4>Precio</h4>
        <h2>${imageDetails.price} COP</h2>
        <button className="carshop" onClick={onAddToCart}>
        <svg viewBox="0 0 576 512"><path fill="#ffe3fe" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
        </button>
        <button className="contact" >
        <svg viewBox="0 0 512 512"><path fill="#ffe3fe" d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"/></svg>
        </button>
      </div>
    </div>

    <style jsx>{`
      .container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7); /* Fondo semitransparente */
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
      }
      .modal-content {
        background-color: var(--purple-blanco);
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
        text-align: center;
        width: 50%;
        position: relative;
        display: grid;
        grid-template-columns: 1fr 0.8fr;
        justify-items: center;
        align-items: center;
      }
      img {
        margin: 0;
        grid-column: 1/2;
        width: 100%;
        height: 25em;
        display: block;
        border-radius: 10px;
      }
      .wrapper{
        grid-column: 2/3;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: 15% 30% 30% auto;
      }
      .close-button {
        grid-row: 1/2;
        margin: 0;
        padding: 0;
        background: none;
        border: none;
        font-size: 1.3em;
        cursor: pointer;
        color: var(--light-purple);
        width: 25%;
        height: 60%;
        align-self: flex-start;
        justify-self: end;
      }

      h3{
        grid-row: 2/3;
        grid-column: 1/2;
        align-self: flex-start;
        justify-self: self-start;
        margin: 0 0 0 7%;
        font-size: 1.2em;
        color: var(--light-pink);
      }
      h1 {
        grid-row: 2/3;
        grid-column: 1/2;
        text-transform: capitalize;
        align-self: center;
        margin: 0 0 0 7%;
        color: var(--normal-purple);
        font-size: 1.8em;
        text-align: left;
      }
      h4{
        grid-row: 3/4;
        grid-column: 1/2;
        align-self: center;
        margin: 0 0 0 7%;
        justify-self: start;
        position: relative;
        top: 12%;
        font-size: 1.2em;
        color: var(--light-pink);
      }
      h2 {
        grid-row: 3/4;
        grid-column: 1/2;
        font-size: 1.5em;
        margin: 0 0 0 7%;
        align-self: end;
        justify-self: start;
        color: var(--normal-purple);
      }
      button {
        background-color: var(--normal-purple);
        color: var(--purple-blanco);
        border: none;
        border-radius: 5px;
        cursor: pointer;
        width: 25%;
        height: 45%;
        margin: 0 0 0 7%;
        padding: 0;
        display: grid;
        justify-self: center;
        align-items: center;
      }
      button:hover {
        background-color: var(--tone-purple);
        color: var(--purple-blanco);
      }
      svg{
        width: 35%;
        justify-self: center;
      }
      .carshop{
        grid-column: 1/2;
        grid-row: 4/5;
        justify-self: start;
        align-self: end;
        position: relative;
        left: 15%;
      }
      .contact{
        font-size: 0.8em;
        grid-column: 1/2;
        grid-row: 4/5;
        justify-self: end;
        align-self: end;
        position: relative;
        right: 15%;
      }
    `}</style>
  </article>
}
export default ImageModal
