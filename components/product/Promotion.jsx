const Promotion = () => {
    
    return <section className="container">
        <h1>Depila más de 3 zonas y recibe un descuento del 10% en el total de tu servicio.</h1>
        <a href="https://wa.me/message/D4KMZ4C5TFU5N1" rel="noopener noreferrer" target="_blank">
            <div className="child">
                <svg viewBox="0 0 448 512"> <path color="green" fill="currentcolor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
            </div>
            <h3>reservar</h3>
        </a>

        <style jsx>{`
            .container{
                grid-row: 5/6;
                grid-column: 4/5;
                justify-self: flex-start;
                display: grid;
                text-align: center;
                color: #f27b14;
                font-weight: 900;
                font-size: 30px;
                justify-items: center;
                align-items: center;
                box-sizing: border-box;
                margin-bottom: 20px;
            }

            a{
                text-decoration: none;
                cursor: pointer;
                width: 170px;
                height: 45px;
                border: 0;
                outline: 0;
                box-sizing: border-box;
                background: linear-gradient(to bottom, #f0acaa 0%,#db99e2 100%);
                border-radius: 10px;
                line-height: 0;
                font-size: 15px;
                transition: all 0.2s ease-in-out;
                display: grid;
                grid-template-columns: 0.3fr 1fr;
                grid-column-gap: 8px;
                justify-items: center;
                align-items: center;
            }
            a:hover{
                box-shadow: 0px 0px 5px #c4b78c, 0px 0px 5px #968c6c;
            }
            a:active {
                box-shadow: inset 1px 1px 2px #968c6c, inset -1px -1px 2px #c4b78c;
            }
            .child{
                width: 27px;
                box-sizing: border-box;
                margin-left: 13px;
            }
            a h3{
                text-transform: uppercase;
                font-weight: 800;
                justify-self: flex-start;
                color: #fefae0;
            }

            @media (max-width: 1086px){
                .container{
                    grid-row: 4/5;
                    grid-column: 1/5;
                    grid-template-columns: 1fr 0.3fr;
                    grid-template-rows: 1fr;
                }
                h1{
                    grid-column: 1/2;
                    font-size: 27px;
                }
            }
            @media (max-width: 1069px){
                h1{
                    font-size: 24px;
                }
            }
            @media (max-width: 829px){
                h1{
                    font-size: 20px;
                }
            }

            @media (max-width: 780px){
                .container{
                    grid-template-columns: 0.8fr 0.5fr;
                    height: 100%;
                }
                h1{
                    font-size: 25px;
                }
            }
            @media (max-width: 629px){
                h1{
                    font-size: 21px;
                }
            }
            @media (max-width: 568px){
                .container{
                    align-items: flex-end;
                }
                h1{
                    padding: 0;
                    margin: 0;
                    font-size: 16px;
                }
            }
            @media (max-width: 456px){
                a{
                    width: 100px;
                    height: 35px;
                    grid-template-columns: 1fr;
                    justify-items: center;
                    padding: 0;
                    margin: 0;
                }
                h1{
                    font-size: 12px;
                }
                h3{
                    visibility: hidden;
                    overflow: hidden;
                    padding: 0;
                    margin: 0;
                }
                .child{
                    box-sizing: border-box;
                    margin: 0;
            }
            }
        `}</style>
    </section>
}

export default Promotion
