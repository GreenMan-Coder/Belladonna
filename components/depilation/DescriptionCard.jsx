import { useEffect, useState } from "react";
import Static from "./Static";
import Galery from "./Galery";

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

const DescriptionCard = ({cardSelected}) => {
    const [services, setServices] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);

    const handleNextImage = () => {
        setCurrentImage((currentImage + 1) % services.length);
    };

    const handlePrevImage = () => {
        setCurrentImage(currentImage === 0 ? services.length - 1 : currentImage - 1);
    };

    useEffect(() => {
        if (cardSelected != 0){
            let serviceSelected = bodyZone.filter((part) => part.id === cardSelected);
            setServices(serviceSelected);
            setCurrentImage(0);
        }
    }, [cardSelected]);

    return (
        <section className="container">

            {services.length === 1 ? 
                    services.map((service, index ) => {
                        return <Static key={index} service={service}/>}) : 
            ''}
            
            {services.length === 6 ? 
                <section className="wrapper">
                    <div className="buttons">
                        <button className="prevButton" onClick={handlePrevImage}>
                        <svg viewBox="0 0 512 512"><path color="#3f0c3a" fill="currentcolor" d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM217.4 376.9L117.5 269.8c-3.5-3.8-5.5-8.7-5.5-13.8s2-10.1 5.5-13.8l99.9-107.1c4.2-4.5 10.1-7.1 16.3-7.1c12.3 0 22.3 10 22.3 22.3l0 57.7 96 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32l-96 0 0 57.7c0 12.3-10 22.3-22.3 22.3c-6.2 0-12.1-2.6-16.3-7.1z"/></svg>
                        </button>
                        <button className="nextButton "onClick={handleNextImage}>
                            <svg viewBox="0 0 512 512"><path color="#3f0c3a" fill="currentcolor" d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1l99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2 10.1-5.5 13.8L294.6 376.9c-4.2 4.5-10.1 7.1-16.3 7.1C266 384 256 374 256 361.7l0-57.7-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-57.7c0-12.3 10-22.3 22.3-22.3c6.2 0 12.1 2.6 16.3 7.1z"/></svg>
                        </button>
                    </div>
                    <Galery services={services} currentImage={currentImage}/>
                    <h1 className="name">{services[currentImage].name}</h1>
                    <h2 className="price">{services[currentImage].price}</h2>
                </section> :
            ''}
            {services.length === 3 ? 
                <section className="wrapper">
                    <div className="buttons">
                        <button className="prevButton" onClick={handlePrevImage}>
                        <svg viewBox="0 0 512 512"><path color="#3f0c3a" fill="currentcolor" d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM217.4 376.9L117.5 269.8c-3.5-3.8-5.5-8.7-5.5-13.8s2-10.1 5.5-13.8l99.9-107.1c4.2-4.5 10.1-7.1 16.3-7.1c12.3 0 22.3 10 22.3 22.3l0 57.7 96 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32l-96 0 0 57.7c0 12.3-10 22.3-22.3 22.3c-6.2 0-12.1-2.6-16.3-7.1z"/></svg>
                        </button>
                        <button className="nextButton "onClick={handleNextImage}>
                            <svg viewBox="0 0 512 512"><path color="#3f0c3a" fill="currentcolor" d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1l99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2 10.1-5.5 13.8L294.6 376.9c-4.2 4.5-10.1 7.1-16.3 7.1C266 384 256 374 256 361.7l0-57.7-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-57.7c0-12.3 10-22.3 22.3-22.3c6.2 0 12.1 2.6 16.3 7.1z"/></svg>
                        </button>
                    </div>
                    <Galery services={services} currentImage={currentImage}/>
                    <h1 className="name">{services[currentImage].name}</h1>
                    <h2 className="price">{services[currentImage].price}</h2>
                </section> :
            ''}

            {services.length === 2 ? 
                <section className="wrapper">
                    <div className="buttons">
                        <button className="prevButton" onClick={handlePrevImage}>
                        <svg viewBox="0 0 512 512"><path color="#3f0c3a" fill="currentcolor" d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM217.4 376.9L117.5 269.8c-3.5-3.8-5.5-8.7-5.5-13.8s2-10.1 5.5-13.8l99.9-107.1c4.2-4.5 10.1-7.1 16.3-7.1c12.3 0 22.3 10 22.3 22.3l0 57.7 96 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32l-96 0 0 57.7c0 12.3-10 22.3-22.3 22.3c-6.2 0-12.1-2.6-16.3-7.1z"/></svg>
                        </button>
                        <button className="nextButton "onClick={handleNextImage}>
                            <svg viewBox="0 0 512 512"><path color="#3f0c3a" fill="currentcolor" d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1l99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2 10.1-5.5 13.8L294.6 376.9c-4.2 4.5-10.1 7.1-16.3 7.1C266 384 256 374 256 361.7l0-57.7-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-57.7c0-12.3 10-22.3 22.3-22.3c6.2 0 12.1 2.6 16.3 7.1z"/></svg>
                        </button>
                    </div>
                    <Galery services={services} currentImage={currentImage}/>
                    <h1 className="name">{services[currentImage].name}</h1>
                    <h2 className="price">{services[currentImage].price}</h2>
                </section> :
            ''}

            <style jsx>{`
                .container {
                    grid-column: 1/3;
                    justify-self: center;
                    margin: 0;
                    position: relative;
                    height: 100%;
                    width: 95%;
                    box-sizing: border-box;
                    display: grid;
                    justify-items: center;
                    align-items: center;
                }
                .wrapper{
                    margin: 0;
                    padding: 0;
                    position: relative;
                    display: grid;
                    grid-template-columns: 0.6fr 0.5fr;
                    width: 100%;
                    height: 100%;
                }
                .buttons{
                    position: absolute;
                    grid-column: 1/2;
                    z-index: 1;
                    display: flex;
                    width: 90%;
                    justify-self: center;
                    align-self: center;
                }
                svg{
                    width: 30px;
                    height: 30px;
                }
                svg:hover{
                    cursor: pointer;
                }
                button{
                    margin: 0;
                    padding: 0;
                    height: auto;
                    width: auto;
                    display: flex;
                    justify-items: center;
                    align-items: center;
                    background: transparent;
                    border: none;
                    top: -15px;
                }
                .prevButton{
                    position: absolute;
                    left: 0;
                }
                .nextButton{
                    position: absolute;
                    right: 0;
                }
                .name{
                    margin: 0;
                    grid-column: 2/3;
                    align-self: start;
                    font-size: 40px;
                    position: absolute;
                    top: 25px;
                    font-weight: 700;
                    color: var(--normal-purple);
                    text-transform: capitalize;
                }
                .price{
                    margin: 0;
                    grid-column: 2/3;
                    position: absolute;
                    bottom: 20px;
                    align-self: end;
                    font-size: 30px;
                    font-weight: 700;
                    color: var(--normal-purple);
                }
            `}</style>
        </section>
    );
};

export default DescriptionCard;