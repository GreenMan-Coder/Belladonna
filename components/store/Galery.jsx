import { useState } from "react";

const Galery = ({ items }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <div className="gallery">
            {items.map((item) => (
                <div
                key={item.id}
                className="gallery-item"
                onClick={() => handleImageClick(item.image)}
                >
                    <img src={item.image} alt={item.name} />
                    <div className="gallery-item-name">{item.name}</div>
                    <div className="gallery-item-price">{item.price}</div>
                </div>
            ))}
            {selectedImage && (
                <div className="selected-image">
                    <img src={selectedImage} alt="selected" />
                    <button onClick={() => setSelectedImage(null)}>Cerrar</button>
                </div>
            )}

            <style jsx>{`
            .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            }

            .gallery-item {
            position: relative;
            overflow: hidden;
            cursor: pointer;
            }

            .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease-in-out;
            }

            .gallery-item:hover img {
            transform: scale(1.1);
            }

            .gallery-item-name {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 10px;
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            font-size: 1.2rem;
            font-weight: bold;
            text-align: center;
            }

            .gallery-item-price {
            position: absolute;
            bottom: 0;
            right: 0;
            padding: 10px;
            background-color: rgba(255, 255, 255, 0.7);
            font-size: 1.2rem;
            font-weight: bold;
            }

            .selected-image {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            }

            .selected-image img {
            max-height: 80%;
            max-width: 80%;
            }

            .selected-image button {
            position: absolute;
            top: 10px;
            right: 10px;
            }
            `}</style>
        </div>
    );
};

export default Galery;