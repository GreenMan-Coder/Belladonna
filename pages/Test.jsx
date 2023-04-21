import React, { useState } from "react";

const Test = ({ zone }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const handleNextImage = () => {
        setCurrentImage((currentImage + 1) % zone.length);
    };

    const handlePrevImage = () => {
        setCurrentImage(
        currentImage === 0 ? zone.length - 1 : currentImage - 1
        );
    };

    return (
        <div className="imageGallery">
            <button className="prevButton" onClick={handlePrevImage}>
            Izquierda
            </button>
            <button className="nextButton "onClick={handleNextImage}>
                Derecha
            </button>
            <div className="imageContainer">
                <img src={zone[currentImage].image} alt={zone[currentImage].name} />
            </div>

            <style jsx>{`
            .imageGallery {
                position: relative;
                margin: 0;
                height: 100%;
                border: 1px solid green;
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: auto 1fr;
                justify-content: center;
                align-items: center;
            }

            .imageContainer {
                width: 100%;
                height: 100%;
                position: relative;
                border: 1px solid blue;
            }

            .imageContainer img {
                position: absolute;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .prevButton,
            .nextButton {
                padding: 0.5rem 1rem;
                font-size: 1.2rem;
                border-radius: 0.5rem;
                border: none;
                background-color: #eee;
                cursor: pointer;
            }

            .prevButton {
                grid-row: 1 / 2;
                grid-column: 1 / 2;
                justify-self: start;
            }

            .nextButton {
                grid-row: 1 / 2;
                grid-column: 1 / 2;
                justify-self: end;
            }
            `}</style>
        </div>
    );
};

export default Test;