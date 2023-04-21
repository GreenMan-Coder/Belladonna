import { useEffect, useState } from "react";

const Static = ({key, service}) => {

    return <ul className="wrapper">
        <li className="name">{service.name}</li>
        <li className="price">{service.price}</li>
        <img src={service.image} alt="Cuerpo completo" className="photo"/>

        <style jsx>{`
            .wrapper{
                margin: 0;
                padding: 0;
                position: relative;
                display: grid;
                grid-template-columns: 0.6fr 0.5fr;
                grid-template-rows: 1fr;
                width: 100%;
                height: 100%;
            }
            .photo{
                grid-column: 1/2;
                width: 70%;
                height: 90%;
                object-fit: cover;
                align-self: center;
                justify-self: center;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
                border-radius: 12px;
                transition: all 300ms;
            }
            .photo:hover{
                transform: translateY(-2px);
                box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
            }
            li{
                grid-column: 2/3;
                list-style: none;
            }
            .name{
                align-self: start;
                position: absolute;
                top: 25px;
                font-size: 40px;
                font-weight: 700;
                color: var(--normal-purple);
                text-transform: capitalize;
            }
            .price{
                align-self: end;
                position: absolute;
                bottom: 20px;
                font-size: 30px;
                font-weight: 700;
                color: var(--normal-purple);
            }
        `}</style>
    </ul>
}
export default Static