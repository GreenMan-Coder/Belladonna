const Img = () => {
    return <div className="container">

        <style jsx>{`
            .container {
                height: 90vh;
                background-image: url(/img/Bella.png);
                background-repeat: no-repeat;
                background-position: center;
                background-size: 45%;
                background-attachment: fixed; 
                background-color: #573f11;
            }

            @media (max-width: 390px){
                .container {
                    height: 32vh;
                    background-size: 100%;
                    background-position: top;
                }
            }
        `}</style>
    </div>
    
}
export default Img