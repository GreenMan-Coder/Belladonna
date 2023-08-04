const Logo = ({tam, deactivated}) => {

    return <div className="container">

        <img src="/img/header/Logo5.png" alt="bellaDonnaLogo" />
        

        <style jsx>{`

            .container {
                justify-self: center;
                align-self: center;
                opacity: ${deactivated === 'true' ? '0' : '1'};
                grid-column: 1/2;
                padding: 0;
                margin: 0;
                width: auto;
            }

            img{
                height: ${tam};
                width: auto;
            }
        `}</style>
    </div>
}

export default Logo
