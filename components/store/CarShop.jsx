import { useEffect } from "react";
import { useState } from "react";

const CarShop = ({items}) => {

  return <div className="container">
    <div className="body">
      <h2>Resumen de Compras</h2>
      <h3>Cantidad joyas {items.length}</h3>
      <ul>
        {items.map((item, index) => {
          const itemTotal = parseInt(item.quantity) * parseInt(item.product.price);
          return (
            <li key={index}>
              <span>{item.product.name}</span>
              <span>{item.quantity}</span>
              <span>{item.product.price}</span>
              <span>${itemTotal}</span>
            </li>
          );
        })}
      </ul>
    </div>
    <style jsx>{`
      .container {
        position: fixed;
        bottom: 1%;
        right: 5%;
        height: 70%;
        width: 40%;
        background-color: var(--light-purple);
        z-index: 3;
        border-radius: 3%;
        display: grid;
        grid-template-rows: 5% 95%;
        justify-items: center;
        align-items: center;
        box-shadow: 0px 5px 3px -2.4px #f9b5d0, 0px -5px 2.4px -3px #f9b5d0;
        border-right: 1px solid var(--light-pink);
        border-left: 1px solid var(--light-pink);
      }
      .body{
        align-self: flex-start;
        box-sizing: border-box;
        grid-row: 2/3;
        height: 100%;
        width: 100%;
        background-color: var(--purple-blanco);
        border-radius: 0 0 3% 3%;
      }
      h2{
        margin: 0;
        box-sizing: border-box;
        margin: 1% 0 0 5%;
        color: var(--tone-purple);
      }
      h3{
        margin: 0;
        box-sizing: border-box;
        margin-left: 5%;
        color: var(--normal-purple);
        font-size: 0.75em;
      }
    `}</style>
  </div>
}
export default CarShop
