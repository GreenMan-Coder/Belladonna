const Logo = ({col}) => {
    return <div className="container">

        <img src="./img/header/belladonnaLogo.png" alt="bellaDonna" />

        <style jsx>{`

            .container {
                grid-column: ${col};
                justify-self: center;
                align-self: center;
            }

            img{
                height: 6rem;
                width: auto;
            }

        `}</style>
    </div>
}

export default Logo