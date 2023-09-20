import { useEffect, useState } from "react"
require("dotenv").config();

const Gallery = ({items}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalOpen(false);
  };

  return (
    <div className="gallery">
      {items.map((item) => (
        <div key={item.jewelID} className="item" onClick={() => openModal(item)} // Abre el modal al hacer clic en una imagen.
        >
          <img src={item.imagenUrl.url} alt={item.image} />
          <h3>{item.name}</h3>
        </div>
      ))}
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            {selectedItem && (
              <div>
                <img src={selectedItem.image} alt={selectedItem.name} />
                <h3>{selectedItem.name}</h3>
                <p>{selectedItem.description}</p>
              </div>
            )}
          </div>
        </div>
      )}
      <style jsx>{`
        .gallery {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        .item {
          position: relative;
          margin: 10px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s;
          width: 30%;
          height: auto;
          display: grid;
          align-items: start;
          justify-items: center;
          border-radius: 5px;
        }

        .item img {
          width: 100%;
          height: auto;
          transition: transform 0.3s ease;
        }

        /* Efecto de zoom al hacer hover */
        /* Ingresar de forma automatizada traslateY */
        .item:hover {
          transform: scale(1.1);
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
          z-index: 1;
          background-color: var(--purple-blanco);
        }

        /* Estilo del div que se muestra al hacer clic */
        .modal {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          justify-content: center;
          align-items: center;
          z-index: 999;
        }

        .modal-content {
          background-color: white;
          padding: 20px;
          max-width: 80%;
          max-height: 80%;
          overflow: auto;
          position: relative;
          text-align: center;
          border-radius: 5px;
        }

        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          cursor: pointer;
        }

        /* Estilo de la imagen en el modal */
        .modal-content img {
          max-width: 100%;
          max-height: 100%;
        }

        /* Estilo de la información en el modal */
        .modal-content h3,
        .modal-content p {
          margin: 10px 0;
        }
      `}
      </style>
    </div>
  );
};

export default Gallery;
