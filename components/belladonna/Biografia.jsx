import SocialNet from "./SocialNet"

const Biografia = () => {
    return <section className="container">
        
        <hgroup>
            <h1>¡Hola, soy Marta!</h1>
            <hr />
            <h3>Experta en depilación femenina con más de 30 años de experiencia.</h3>

            <p>
                Durante mi carrera, he ayudado a muchas personas a lograr una piel suave y libre de vello no deseado.  Mi enfoque en ofrecer soluciones personalizadas y eficaces para cada uno de mis clientes ha llevado a una base de usuarios leales y satisfechos. 
                Además de mi práctica clínica,  también he desarrollado habilidades sobresalientes en otros aspectos de la belleza como el cuidado de la piel, tratamientos para el cabello y más. <br/><br/>
                Estoy verdaderamente emocionada de compartir mi pasión y conocimientos en belleza a través de mi blog y redes sociales. Me siento afortunada de poder conectar con mujeres que comparten mi amor por cuidarse y verse bien.
            </p>
        </hgroup>

        <div className="socialNetworks">
            <SocialNet text="Facebook" color="#65b6f5" href="https://www.facebook.com/profile.php?id=100074125141678&mibextid=ZbWKwL">
                <svg viewBox="0 0 512 512"> <path color="#0f91f3" fill="currentcolor"d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
            </SocialNet>
            <SocialNet text="Instagram" color="#dd5348" href="https://instagram.com/belladonna_depilacion?igshid=ZDdkNTZiNTM=">
                <svg viewBox="0 0 448 512"> <path color="#f5c25d" fill="currentcolor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
            </SocialNet>
            <SocialNet text="Blog" color="#fff" href="https://belladonnaTips.blogspot.com">
            <svg viewBox="0 0 448 512"> <path color="#ff9e11" fill="currentcolor" d="M162.4 196c4.8-4.9 6.2-5.1 36.4-5.1 27.2 0 28.1.1 32.1 2.1 5.8 2.9 8.3 7 8.3 13.6 0 5.9-2.4 10-7.6 13.4-2.8 1.8-4.5 1.9-31.1 2.1-16.4.1-29.5-.2-31.5-.8-10.3-2.9-14.1-17.7-6.6-25.3zm61.4 94.5c-53.9 0-55.8.2-60.2 4.1-3.5 3.1-5.7 9.4-5.1 13.9.7 4.7 4.8 10.1 9.2 12 2.2 1 14.1 1.7 56.3 1.2l47.9-.6 9.2-1.5c9-5.1 10.5-17.4 3.1-24.4-5.3-4.7-5-4.7-60.4-4.7zm223.4 130.1c-3.5 28.4-23 50.4-51.1 57.5-7.2 1.8-9.7 1.9-172.9 1.8-157.8 0-165.9-.1-172-1.8-8.4-2.2-15.6-5.5-22.3-10-5.6-3.8-13.9-11.8-17-16.4-3.8-5.6-8.2-15.3-10-22C.1 423 0 420.3 0 256.3 0 93.2 0 89.7 1.8 82.6 8.1 57.9 27.7 39 53 33.4c7.3-1.6 332.1-1.9 340-.3 21.2 4.3 37.9 17.1 47.6 36.4 7.7 15.3 7-1.5 7.3 180.6.2 115.8 0 164.5-.7 170.5zm-85.4-185.2c-1.1-5-4.2-9.6-7.7-11.5-1.1-.6-8-1.3-15.5-1.7-12.4-.6-13.8-.8-17.8-3.1-6.2-3.6-7.9-7.6-8-18.3 0-20.4-8.5-39.4-25.3-56.5-12-12.2-25.3-20.5-40.6-25.1-3.6-1.1-11.8-1.5-39.2-1.8-42.9-.5-52.5.4-67.1 6.2-27 10.7-46.3 33.4-53.4 62.4-1.3 5.4-1.6 14.2-1.9 64.3-.4 62.8 0 72.1 4 84.5 9.7 30.7 37.1 53.4 64.6 58.4 9.2 1.7 122.2 2.1 133.7.5 20.1-2.7 35.9-10.8 50.7-25.9 10.7-10.9 17.4-22.8 21.8-38.5 3.2-10.9 2.9-88.4 1.7-93.9z"/></svg>
            </SocialNet>
            <SocialNet text="Whatsapp" color="#37ac37" href="https://wa.me/message/D4KMZ4C5TFU5N1">
            <svg viewBox="0 0 448 512"> <path color="green" fill="currentcolor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
            </SocialNet>
        </div>

        <style jsx>{`
            .container {
                grid-row: 3/4;
                height: 100vh;
                width: 100%;
                display: grid;
                grid-template-rows: auto 0.6fr;
            }
            hgroup{
                margin: 1rem auto;
                padding: 2rem;
                display: grid;
                grid-template-rows: 0.3fr 0.2fr auto;
                text-align: justify;
                box-sizing: border-box;
            }
            h1{
                font-weight: 900;
                font-size: 60px;
                color: #f3b436;
                text-align: center;
                margin: 0;
                box-sizing: border-box;
            }

            h3{
                font-size: 25px;
                text-align: center; 
                letter-spacing: 0.3px;
                word-spacing: 2px;
                color: #363636;
                text-shadow: -1px -1px #fdf09a, 1px 1px #f5c25d;
            }

            hr{
                width:200px;
                border: none;
                border-bottom: 1px solid #f5c25d;
            }

            p{
                line-height: 1.5;
                letter-spacing: 0.3px;
                word-spacing: 2px;
                box-sizing: border-box;
                padding: 0 40px;
            }

            p:first-letter{
                color:#f3b436;
                font-weight: bold;
                font-size: 70px;
                float: left;
                line-height: 60px;
                padding-right: 8px;
                margin-top: -3px;
            }

            .socialNetworks{
                justify-self: center;
                background-color: #494949;
                height: 100%;
                width: 95%;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                border-radius: 15px 15px 0 0;
            }

            @media (max-width: 390px){
                .container {
                    height: 32vh;
                    background-size: 100%;
                    background-position: top;
                }
                h1{
                    font-size: 35px;
                }
                h3{
                    font-size: 15px;
                }
                p{
                    padding: 0 10px;
                }
            }
        `}</style>
    </section>
}
export default Biografia