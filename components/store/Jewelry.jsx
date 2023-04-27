
import WhatsappButton from "./WhatsappButton"

const Jewelry = ({row}) => {
    return <div className="container">

            <div className="tittle">
                <h2>belladonna</h2>
            </div>

            <h3 className="goldStore">Oro Plata</h3>

            <h3 className="bronceStore"> Acero Inoxidable</h3>

            <h3 className="contact">¡Haz tu pedido!</h3>
            <WhatsappButton col="1/3" row ="3/4" color="green" href="https://wa.me/message/D4KMZ4C5TFU5N1">
            <svg viewBox="0 0 448 512"> <path color="green" fill="currentcolor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
            </WhatsappButton>
        
        <style jsx>{`
            .container {
                position: relative;
                grid-row: ${row};
                justify-self: center;
                align-self: flex-start;
                box-sizing: border-box;
                margin-top: 4.5em;
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 0px 15px rgba(0, 0, 0, 0.2);
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 0.2fr 0.9fr 0.5fr;
                grid-gap: 10px;
                width: 90%;
                height: 95%;
            }

            .tittle {
                grid-column: 1/3;
                grid-row: 1/2;
                background-color: #f7e28b;
                color: black;
                text-align: center;
                letter-spacing: 1px;
                font-size: 1.5rem;
                text-transform: capitalize;
            }
            h2{
                font-weight: 900;
            }
            .goldStore{
                box-sizing: border-box;
                grid-column: 1/2;
                grid-row: 2/3;
                width: 100%;
                margin: 0;
                padding: 20px 0;
                justify-self: center;
                align-self: flex-start;
                border-radius: 0px 0px 5px 5px;
                background-color: #f7e28b;
                font-size: 1.3rem;
                font-weight: 900;
                text-align: center;
            }
            .bronceStore{
                grid-column: 2/3;
                grid-row: 2/3;
                width: 100%;
                box-sizing: border-box;
                margin: 0;
                padding: 20px 0;
                justify-self: center;
                align-self: flex-start;
                border-radius: 0px 5.5px 5px 5px;
                background-color: #f7e28b;
                font-size: 1.3rem;
                font-weight: 900;
                text-align: center;
            }
            .contact{
                grid-column: 1/3;
                grid-row: 3/4;
                width: 100%;
                margin: 0;
                padding: 20px 0;
                justify-self: center;
                align-self: flex-start;
                border-radius: 0px 0px 5px 5px;
                background-color: #f7e28b;
                font-size: 1.3rem;
                font-weight: 900;
                text-align: center;
            }
            
            @media (max-width: 1280px){
                .container{
                    margin-top: 0;
                    height: 103%;
                }
                .tittle {
                    font-size: 2rem;
                }
                .goldStore{
                    font-size: 1.8rem;
                }
                .bronceStore{
                    font-size: 1.8rem;
                }
                .contact{
                    font-size: 1.8rem;
                }
            }
            @media (max-width: 1024px){
                .container{
                    margin-top: 3.5em;
                    height: 100%;
                }
            }
            @media (max-width: 618px){
                .container{
                    margin-top: 3em;
                    height: 92%;
                }
            }
            @media (max-width: 586px){
                .container{
                    margin-top: 1em;
                    height: 100%;
                }
                .tittle {
                    font-size: 1.5rem;
                }
                .goldStore{
                    font-size: 1.4rem;
                }
                .bronceStore{
                    font-size: 1.4rem;
                }
                .contact{
                    font-size: 1.4rem;
                }
            }
            @media (max-width: 440px){
                .container{
                    grid-template-rows: 0.1fr 33% 35%;
                    height: 100%;
                }
                .tittle {
                    font-size: 1.3rem;
                }
                .goldStore{
                    font-size: 1.2rem;
                }
                .bronceStore{
                    font-size: 1.2rem;
                }
                .contact{
                    font-size: 1.2rem;
                }
            }

            @media (max-width: 414px){
                .container{
                    grid-template-rows: 0.1fr 0.1fr 0fr;
                    margin-top: 2em;
                    height: 85%;
                }
                .tittle {
                    font-size: 1.5rem;
                }
                .goldStore{
                    font-size: 1.1rem;
                }
                .bronceStore{
                    font-size: 1.1rem;
                }
                .contact{
                    font-size: 1.1rem;
                }
            }

        `}</style>
    </div>
}
export default Jewelry