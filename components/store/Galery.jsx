import { useState } from "react";
import ImageModal from './ImageModal';
require("dotenv").config();

const Gallery = ({items}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (item) =>{
    setSelectedImage(item);
  };
  const handleCloseModal = () => {
    setSelectedImage(null);
  }
  return (
    <div className="gallery">
      {items.map((item) => (
        <div key={item.jewelID} className="item">
          <img src={item.imagenUrl.url} alt={item.image} onClick={() => handleImageClick(item)}/>
          <h3>{item.name}</h3>
        </div>
      ))};
      {selectedImage && (
        <ImageModal imageDetails={selectedImage} onClose={handleCloseModal}/>
      )};



      <style jsx>{`
        .gallery {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          box-sizing: border-box;
          padding-bottom: 1.2%;
        }
        .item {
          position: relative;
          margin: 10px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s;
          width: 20%;
          height: auto;
          display: grid;
          grid-template-rows: 1fr 0.1fr;
          align-items: start;
          justify-items: center;
          border-radius: 5px;
        }
        .item img {
          width: 100%;
          height: 100%;
          transition: transform 0.3s ease;
        }
        .item h3{
          align-self: end;
          text-align: center;
          text-transform: capitalize;
          box-sizing: border-box;
          margin: 0;
          height: 100%;
          width: 100%;
          background-color: var(--light-purple);
          font-weight: 400;
          font-size: 1.08rem;
          color: var(--tone-purple);
        }

        /* Efecto de zoom al hacer hover */
        /* Ingresar de forma automatizada traslateY */
        .item:hover {
          transform: scale(1.1);
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
          z-index: 1;
          background-color: var(--purple-blanco);
        }
      `}
      </style>
    </div>
  );
};

export default Gallery;
