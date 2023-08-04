import { useState } from "react";
import GaleryOroPlata from "./GaleryOroplata"

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

const Jewelry = ({row}) => {
    
    
    return <section className="container">

        <h1>Joyas</h1>
        <GaleryOroPlata items={bodyZone}/>
        
        <style jsx>{`
            .container {
                width: 100%;
                height: 100%;
            }

        `}</style>
    </section>
}
export default Jewelry