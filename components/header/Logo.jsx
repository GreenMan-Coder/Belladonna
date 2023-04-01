const Logo = ({tam}) => {

    return <div className="container">

        <img src="/img/header/Logo5.png" alt="bellaDonna" />
        

        <style jsx>{`

            .container {
                grid-row: 1/2;
                justify-self: start;
                padding: 0;
                margin: 0;
                margin-left: 3em;
            }

            img{
                height: ${tam};
                width: auto;
            }

        `}</style>
    </div>
}

export default Logo
