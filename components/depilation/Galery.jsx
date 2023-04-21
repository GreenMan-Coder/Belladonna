import React, { useState } from "react";

const Galery = ({key, services, currentImage}) => {
    return <ul className="imageGallery">
        
        <img src={services[currentImage].image} alt={services[currentImage].name} />
        <style jsx>{`
            .imageGallery {
                padding: 0;
                margin: 0;
                grid-column: 1/2;
                grid-row: 1/3;
                position: relative;
                justify-self: center;
                align-self: center;
                width: 70%;
                height: 90%;
                display: grid;
                justify-items: center;
                align-items: center;
            }
            img{
                width: 100%;
                height: 100%;
                object-fit: fill;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
                border-radius: 12px;
                transition: all 300ms;
            }
            img:hover{
                transform: translateY(-2px);
                box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
            }
        `}</style>
    </ul>
}
export default Galery