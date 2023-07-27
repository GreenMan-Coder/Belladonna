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
                width: 100%;
                height: 100%;
                display: grid;
                justify-items: center;
                align-items: center;
            }
            img{
              width: 95%;
              height: auto;
              object-fit: cover;
              box-shadow: 0px 4px 20px -2px rgba(0, 0, 0, 0.5);
            }
        `}</style>
    </ul>
}
export default Galery
