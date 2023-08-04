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

            @media (max-width: 1280px){
                .container {
                    height: 75vh;
                    background-size: 60%;
                    background-position: center;
                }
            }
            @media (max-width: 912px){
                .container {
                    height: 75vh;
                    background-size: 60%;
                    background-position: center;
                }
            }
            @media (max-width: 804px){
                .container {
                    height: 75vh;
                    background-size: 100%;
                    background-position: center;
                }
            }
            @media (max-width: 540px){
                .container {
                    height: 60vh;
                    background-size: 100%;
                    background-position: top;
                }
            }
            @media (max-width: 414px){
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