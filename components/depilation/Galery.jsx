
const Galery = ({ key, services, currentImage }) => {
    return <ul className="imageGallery">

        <img src={services[currentImage].image} alt={services[currentImage].name} />
        <style jsx>{`
            .imageGallery {
                grid-column: 1/2;
                grid-row: 1/3;
                justify-self: center;
                align-self: center;
                width: 100%;
                height: 100%;
                display: grid;
                justify-items: end;
                align-items: center;
            }
            img{
                width: 30em;
                object-fit: cover;
                box-shadow: 0px 4px 20px -2px rgba(0, 0, 0, 0.5);
            }

            @media screen and (max-width: 1200px){
                .imageGallery {
                    font-size: 15px;
                }
            }

            @media screen and (max-width: 1090px){
                .imageGallery {
                    font-size: 13px;
                }
            }

            @media screen and (max-width: 960px){
                .imageGallery {
                    font-size: 12px;
                }
            }

            @media screen and (max-width: 910px){
                .imageGallery {
                    font-size: 11px;
                }
            }

            @media screen and (max-width: 700px){
                .imageGallery {
                    font-size: 10px;
                }
            }

            @media screen and (max-width: 645px){
                .imageGallery {
                    font-size: 9px;
                }
            }
        `}</style>
    </ul>
}
export default Galery
