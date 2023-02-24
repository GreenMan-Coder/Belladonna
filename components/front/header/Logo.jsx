const Logo = ({image, tam}) => {

    return <div className="container">

        {image === "one" ? <img src="/img/header/Logo.png" alt="bellaDonna" /> : <img src="/img/header/Logo2.png" alt="bellaDonna" />}
        

        <style jsx>{`

            .container {
                grid-row: 1/2;
                justify-self: center;
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
