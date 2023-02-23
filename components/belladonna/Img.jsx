const Img = () => {
    return <div className="container">

        <img src="./img/bella.png" alt="Enid" />

        <p> Belladonna</p>

        <style jsx>{`
            .container {
                grid-column: 1/2;
                align-self: center;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 25px 0 rgba(0, 0, 0, 0.19);
                border-radius: 10px;
                display: grid;
                grid-template-rows: 26.5rem 3.2rem;
                height: 31rem;
            }
            img{
                width: auto;
                height: 450px;
                border-radius: 10px;
                grid-row: 1/2;
            }

            p{
                grid-row: 2/3;
                box-sizing: border-box;
                height: 100%;
                background-color: #fefae0;
                color: #111;
                font-weight: 600;
                font-size: 1.3rem;
                text-align: center;
                padding: 1rem;
                border-radius: 0 0 10px 10px;
            }
        `}</style>
    </div>
    
}
export default Img