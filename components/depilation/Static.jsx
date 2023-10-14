import { useEffect, useState } from "react";

const Static = ({key, service}) => {

  return <ul className="wrapper">
    <li className="name">{service.name}</li>
    <li className="price">{service.price}</li>
    <a href="https://wa.me/message/D4KMZ4C5TFU5N1" className="add" target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
      cotizar servicio
    </a>
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
      a{
        text-decoration: none;
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
        display: grid;
        grid-template-columns: 0.3fr 1fr;
        grid-template-rows: 1fr;
        justify-items: center;
        align-items: center;
        font-size: 0.93em;
      }
      a:hover{
        background: var(--normal-purple);
        color: var(--purple-blanco);
      }
      svg{
        fill: currentColor;
        color: var(--normal-purple);
        justify-self: end;
        position: relative;
        left: 50%;
        width: 45%;
        -webkit-transition: all 0.3s;
            -moz-transition: all 0.3s;
            -ms-transition: all 0.3s;
            -o-transition: all 0.3s;
            transition: all 0.3s;
      }
      a:hover svg{
        color: var(--purple-blanco);
      }
    `}</style>
  </ul>
}
export default Static
