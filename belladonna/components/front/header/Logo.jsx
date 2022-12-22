const Logo = ({col}) => {
    return <div className="container">

        <img src="./img/header/belladonnaLogo2.png" alt="bellaDonna" />

        <style jsx>{`

            .container {
                grid-column: ${col};
                justify-self: center;
                align-self: center;
            }

            img{
                height: 9rem;
                width: 14rem;
            }

        `}</style>
    </div>
}

export default Logo