import { useEffect } from "react";
import { useState } from "react";

const CarShop = ({items}) => {
  const [sum, setSum] = useState(0)
  useEffect(() => {
    function CalculateTotal(){
      const total = items.reduce((accumulator, item) => {
        const productPrice = parseFloat(item.product.price);
        const quantity = parseInt(item.quantity);
        const producTotal = productPrice * quantity;
        return accumulator + producTotal;
      }, 0);
    setSum(total)
    }
    CalculateTotal()
  }, [items])
  return <div className="container">
    <div className="body">
      <h2>Resumen de Compra</h2>
      <ul className="menu">
        <li>Nombre</li>
        <li>Cantidad</li>
        <li>Precio</li>
        <li>Total</li>
      </ul>
      <ul className="products">
        {items.map((item, index) => {
          const itemTotal = parseInt(item.quantity) * parseInt(item.product.price);
          return (
            <li key={index}>
              <span>{item.product.name}</span>
              <span>{item.quantity}</span>
              <span>${item.product.price}</span>
              <span>${itemTotal}</span>
            </li>
          );
        })}
      </ul>
      <div className="subTotal">
        <h2>Sub-Total: ${sum}</h2>
        <button>
          <svg viewBox="0 0 576 512"><path d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z"/></svg>
          Pagar
        </button>
      </div>
    </div>
    <style jsx>{`
      .container {
        position: fixed;
        bottom: 1%;
        right: 5%;
        height: 70%;
        width: 40%;
        background-color: var(--light-pink);
        z-index: 3;
        border-radius: 3%;
        display: grid;
        grid-template-rows: 5% 95%;
        justify-items: center;
        align-items: center;
        border-right: 3px solid var(--light-pink);
        border-left: 3px solid var(--light-pink);
        border-bottom: 1px solid var(--light-pink);
      }
      .body{
        align-self: flex-start;
        box-sizing: border-box;
        grid-row: 2/3;
        height: 95%;
        max-height: 95%;
        width: 100%;
        max-width: 100%;
        background-color: var(--purple-blanco);
        display: grid;
        grid-template-rows: 0.16fr 0.8fr 0.13fr;
        justify-items: center;
        align-items: center;
      }
      h2{
        grid-row: 1/2;
        grid-column: 1/2;
        align-self: start;
        justify-self: start;
        margin: 0;
        width: 100%;
        position: relative;
        top: 10%;
        text-align: center;
        box-sizing: border-box;
        color: var(--tone-purple);
      }
      .menu{
        margin: 0;
        padding: 0;
        grid-row: 2/3;
        grid-column: 1/2;
        align-self: start;
        width: 92%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      .menu li{
        margin: 0;
        padding: 0;
        list-style-type: none;
        width: 100%;
        text-align: start;
        color: var(--normal-purple);
        font-weight: 700;
      }
      .products{
        margin: 0;
        padding: 0;
        grid-row: 2/3;
        grid-column: 1/2;
        align-self: end;
        width: 92%;
        height: 90%;
        max-height: 90%;
        overflow-y: auto;
        font-size: 0.8em;
      }
      .products li{
        box-sizing: border-box;
        margin-bottom: 2%;
        position: relative;
        top: 6%;
        grid-row: 2/3;
        list-style-type: none;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        text-align: start;
        color: var(--tone-purple);
      }
      .products li span:nth-child(n+2):nth-child(-n+4){
        text-align: center;
      }
      span{
        width: 100%;
      }
      .subTotal{
        width: 92%;
        height: 100%;
        border-top: 1px solid var(--light-purple);
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        align-items: center;
      }
      .subTotal h2{
        margin: 0;
        padding: 0;
        grid-column: 2/3;
        width: 80%;
        justify-self: center;
        align-self: center;
        text-align: start;
        font-size: 1.2em;
        position: relative;
        top: 0%;
        left: 5%;
      }
      .subTotal button{
        justify-self: start;
        display: grid;
        grid-template-columns: 0.7fr 1fr;
        align-items: center;
        justify-items: start;
        width: 45%;
        height: 70%;
        font-size: 0.97em;
        font-weight: 700;
        text-decoration: none;
        background: none;
        border: solid 2px var(--normal-purple);
        color: var(--normal-purple);
        cursor: pointer;
        -webkit-transition: all 0.3s;
            -moz-transition: all 0.3s;
            -ms-transition: all 0.3s;
            -o-transition: all 0.3s;
            transition: all 0.3s;
      }
      .subTotal button:hover{
        border: solid 2px var(--light-purple);
        background: var(--light-purple);
        color: var(--purple-blanco);
      }
      .subTotal button:hover svg{
        fill: var(--purple-blanco);
      }
      .subTotal button svg{
        justify-self: center;
        width: 50%;
        fill: var(--normal-purple);
        -webkit-transition: all 0.3s;
            -moz-transition: all 0.3s;
            -ms-transition: all 0.3s;
            -o-transition: all 0.3s;
            transition: all 0.3s;
      }
    `}</style>
  </div>
}
export default CarShop
