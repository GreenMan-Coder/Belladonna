import SocialNetButtons from "./SocialNetButtons"
import WhatsappButton from "./WhatsappButton"

const Jewelry = () => {
    return <div className="container">

            <div className="course-preview">
                <h2>Joyería Belladonna</h2>
            </div>

            <h3 className="goldStore">Oro Plata</h3>
            <SocialNetButtons col="2/3" color="#dd5348" href="https://instagram.com/bella_donnajoyas?igshid=ZDdkNTZiNTM=">
                <svg viewBox="0 0 448 512"> <path color="#f5c25d" fill="currentcolor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
            </SocialNetButtons>

            <h3 className="bronceStore"> Acero Inoxidable</h3>
            <SocialNetButtons col="3/4" color="#89929f" href="http://antojateaqui.com">
                <svg viewBox="0 0 640 512"> <path color="#b6c1d2" fill="currentcolor" d="M36.8 192H603.2c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224V384v80c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V384 224H320V384H128V224H64zm448 0V480c0 17.7 14.3 32 32 32s32-14.3 32-32V224H512z"/></svg>
            </SocialNetButtons>

            <h3 className="contact">¡Haz tu pedido!</h3>
            <WhatsappButton color="green" href="https://wa.me/message/D4KMZ4C5TFU5N1">
            <svg viewBox="0 0 448 512"> <path color="green" fill="currentcolor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
            </WhatsappButton>
        
        <style jsx>{`
            .container {
                grid-row: 3/4;
                align-self: center;
                justify-self: center;
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 0px 15px rgba(0, 0, 0, 0.2);
                display: grid;
                grid-template-columns: 220px 200px 200px;
                grid-template-rows: 1fr 1fr;
                width: auto;
                height: 245px;
            }

            .course-preview {
                grid-column: 1/2;
                grid-row: 1/3;
                background-color: #f7ea8a;
                color: black;
                padding: 0;
                text-align: center;
                max-width: 250px;
                display: grid;
                justify-items: center;
                align-items: center;
                letter-spacing: 1px;
                font-size: 1.4rem;
            }

            h2{
                font-weight: 900;
            }

            .goldStore{
                grid-column: 2/3;
                grid-row: 1/2;
                margin: 0;
                padding: 5px 3.35rem;
                justify-self: center;
                align-self: flex-start;
                border-radius: 0px 0px 5px 5px;
                background-color: #f7e28b;
                font-weight: 700;
            }
            .bronceStore{
                grid-column: 3/4;
                grid-row: 1/2;
                padding: 5px 1.4rem;
                margin: 0;
                justify-self: center;
                align-self: flex-start;
                border-radius: 0px 5.5px 5px 5px;
                background-color: #f7e28b;
                font-weight: 700;
            }
            .contact{
                grid-column: 2/4;
                grid-row: 2/3;
                padding: 5px 8rem;
                margin: 0;
                margin-top: 10px;
                justify-self: center;
                align-self: flex-start;
                border-radius: 0px 0px 5px 5px;
                background-color: #f7e28b;
                font-weight: 700;
            }
            
            @media (max-width: 1212px){
                .container{
                    grid-row: 4/5;
                    grid-column: 1/3;
                    align-self: flex-start;
                }
            }

        `}</style>
    </div>
}
export default Jewelry