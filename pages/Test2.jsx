import { useState } from "react";
import Test from "./Test";

const bodyZone = [
    {
        id: 1,
        name: "cuerpo completo",
        price: "$98.000 COP",
        image: "/img/depilation/fullbody.png",
    },
    {
        id: 2,
        name: "rostro completo",
        price: "$45.000 COP",
        image: "/img/depilation/rostro-completo.png",
    },
    {
        id: 2,
        name: "bigote",
        price: "$10.000 COP", 
        image: "/img/depilation/bigote.png",  
    },
    {
        id: 2,
        name: "cejas",
        price: "$15.000 COP",
        image: "/img/depilation/cejas.png",
    },
    {
        id: 2,
        name: "mentón",
        price: "$10.000 COP",
        image: "/img/depilation/menton.jpg",
    },
    {
        id: 2,
        name: "axilas",
        price: "$15.000 COP",
        image: "/img/depilation/axilas.jpeg",
    },
    {
        id: 2,
        name: "brazos",
        price: "$25.000 COP",
        image: "/img/depilation/brazos.jpeg",
    },
    {
        id: 3,
        name: "bikini completo (Brasileño)",
        price: "$45.000 COP",
        image: "/img/depilation/bikini-completo.jpeg",
    },
    {
        id: 3,
        name: "bikini parcial",
        price: "$30.000 COP",
        image: "/img/depilation/bikini-parcial.png",
    },
    {
        id: 3,
        name: "glúteos",
        price: "$30.000 COP",
        image: "/img/depilation/gluteos.jpeg",
    },
    {
        id: 4,
        name: "Pierna completa",
        price: "$45.000 COP",
        image: "/img/depilation/piernas-completas.jpg",
    },
    {
        id: 4,
        name: "Media pierna",
        price: "$30.000 COP",
        image: "/img/depilation/media-pierna.jpeg",
    },
    ]

const Test2 = () => {

    return (
        <div className="gallery">
            <Test items={bodyZone}/>

            <style jsx>{`
            .gallery {
            width: 100%;
            height: 100vh;

            }
            `}</style>
        </div>
    );
};

export default Test2;