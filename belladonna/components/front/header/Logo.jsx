const Logo = ({image, tam}) => {

    return <div className="container">

        {image === "one" ? <img src="./img/header/logo.png" alt="bellaDonna" /> : <img src="./img/header/logo2.png" alt="bellaDonna" />}
        

        <style jsx>{`

            .container {
                padding: 0;
                margin: 0;
            }

            img{
                height: ${tam};
                width: auto;
            }

        `}</style>
    </div>
}

export default Logo
