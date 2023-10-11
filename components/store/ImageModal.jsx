import { useState } from "react";
import NumberInput from "./NumberInput";

const ImageModal = ({ productDetails, onClose, addToCart }) => {
  const [qa, setQa] = useState(0)
  const handleAddToCart = () => {
    const productAdded = {
      product: productDetails,
      quantity: qa
    }
    addToCart(productAdded);
  };
  return <article className="container">
    <div className="modal-content">
      <img src={productDetails.imagenUrl.url} alt={productDetails.image} />
      <div className="wrapper">
        <button className="close-button" onClick={onClose}>
          Cerrar
        </button>
        <h3 className="jewel">Joya</h3>
        <h1>{productDetails.name}</h1>
        <div className="quantity">
          <h3>Cantidad</h3>
          <NumberInput setQa={setQa}/>
        </div>
        <h4>Precio</h4>
        <h2>${productDetails.price} COP</h2>
        <button className="carshop" onClick={handleAddToCart}>
          Agregar a
          <svg viewBox="0 0 576 512"><path fill="#ffe3fe" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
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
        grid-template-rows: 15% 20% 20% 20% auto;
      }
      .close-button {
        grid-row: 1/2;
        margin: 0;
        padding: 0;
        background: none;
        border: none;
        font-size: 1.3em;
        cursor: pointer;
        color: var(--tone-purple);
        width: 25%;
        height: 60%;
        align-self: flex-start;
        justify-self: end;
      }
      h3{
        font-size: 1.2em;
        color: var(--tone-pink);
        align-self: flex-start;
        justify-self: self-start;
      }
      .jewel{
        margin: 0 0 0 7%;
        grid-row: 2/3;
        grid-column: 1/2;
      }
      h1 {
        grid-row: 2/3;
        grid-column: 1/2;
        text-transform: capitalize;
        align-self: center;
        margin: 0 0 0 7%;
        color: var(--normal-purple);
        font-size: 1.5em;
        text-align: left;
      }
      .quantity{
        grid-row: 3/4;
        display: grid;
        align-items: center;
        justify-items: center;
      }
      .quantity h3{
        margin-left: 7%;
        align-self: start;
      }
      h4{
        grid-row: 4/5;
        grid-column: 1/2;
        align-self: start;
        position: relative;
        top: 30%;
        margin: 0 0 0 7%;
        justify-self: start;
        font-size: 1.2em;
        color: var(--tone-pink);
      }
      h2 {
        grid-row: 4/5;
        grid-column: 1/2;
        position: relative;
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
        font-size: 1em;
        width: 25%;
        height: 45%;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      button:hover {
        background-color: var(--tone-purple);
        color: var(--purple-blanco);
      }
      svg{
        width: 13%;
        margin-left: 8px;
      }
      .carshop{
        grid-column: 1/2;
        grid-row: 5/6;
        justify-self: center;
        align-self: end;
        width: 70%;
      }
    `}</style>
  </article>
}
export default ImageModal
