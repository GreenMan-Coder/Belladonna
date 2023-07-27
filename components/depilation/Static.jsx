import { useEffect, useState } from "react";

const Static = ({key, service}) => {

  return <ul className="wrapper">
    <li className="name">{service.name}</li>
    <li className="price">{service.price}</li>
    <button>añadir servicio</button>
    <img src={service.image} alt="Cuerpo completo" className="photo"/>

    <style jsx>{`
      .wrapper{
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
      .photo{
        grid-column: 1/2;
        grid-row: 1/2;
        width: 95%;
        height: auto;
        object-fit: cover;
        box-shadow: 0px 4px 20px -2px rgba(0, 0, 0, 0.5);
      }
      li{
        grid-column: 2/3;
        grid-row: 1/2;
        list-style: none;
      }
      .name{
        position: relative;
        top: -10%;
        font-size: 40px;
        font-weight: 700;
        color: var(--normal-purple);
        text-transform: capitalize;
      }
      .price{
        position: relative;
        top: 2%;
        font-size: 30px;
        font-weight: 700;
        color: var(--tone-pink);
      }
      button{
        grid-column: 2/3;
        grid-row: 1/2;
        align-self: center;
        position: relative;
        top: 20%;
        width: 80%;
        height: 10%;
        text-align: center;
        background: none;
        border: solid 2px var(--normal-purple);
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
      }
      button:hover{
        background: var(--normal-purple);
        color: var(--purple-blanco);
      }
    `}</style>
  </ul>
}
export default Static
