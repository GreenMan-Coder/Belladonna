const Logo = ({col}) => {
    return <div className="container">

        <img src="./img/header/belladonnaLogoWhite.png" alt="bellaDonna" />

        <style jsx>{`

            .container {
                grid-row: ${col};
                justify-self: center;
                align-self: center;
                padding-top: 15px;
            }

            img{
                height: 8rem;
                width: auto;
            }

        `}</style>
    </div>
}

export default Logo