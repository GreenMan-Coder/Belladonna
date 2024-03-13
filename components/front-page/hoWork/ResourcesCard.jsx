const ResourcesCard = ({ url, title, text }) => {
    return <section className="container">
        <div className="card-content">
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
        <style jsx>{`
        .container {
            position: relative;
            width: 95%;
            height: 90%;
            background-image: ${url};
            background-repeat: no-repeat;
            background-size: cover;
            background-attachment: local;
            display: grid;
            justify-items: center;
            align-items: center;
            border-radius: 15px;
        }
        .card-content{
            box-sizing: border-box;
            display: grid;
            grid-template-rows: 1fr;
            justify-items: center;
            align-items: end;
        }
        .card-content::after{
            content: '';
            position: absolute;
            top: 0;
            width: 101%;
            height: 101%;
            border-radius: 15px;
            opacity: 0;
            transition: opacity 0.2s ease-in-out;
        }
        .card-content:hover::after{
            background: var(--normal-purple);
            opacity: 0.9;
            transition: opacity 0.5s ease-in-out;
            transition: background 0.7s ease-in-out;
        }
        h2{
            position: absolute;
            bottom: 15%;
            grid-row: 1/2;
            align-self: end;
            font-size: 1.4em;
            font-weight: 700;
            color: var(--purple-blanco);
            z-index: 1;
            transform: translateY(0%);
            transition: transform 0.5s;
            background: var(--normal-purple);
            border-radius: 15px;
            box-sizing: border-box;
            padding: 30px 15px;
            user-select: none;
        }
        .card-content:hover h2{
            transform: translateY(-240%);
            background: transparent;
            transition: transform 0.5s, background 0.85s;
        }
        p{
            z-index: 1;
            grid-row: 1/2;
            align-self: center;
            box-sizing: border-box;
            position: relative;
            top: 10%;
            padding: 0 1em;
            opacity: 0;
            transition: opacity .2s ease-in-out;
            font-size: 1.4em;
            color: var(--purple-blanco);
            user-select: none;
        }
        .card-content:hover p{
            opacity: 1;
            transition: opacity .6s ease-in-out;
            box-sizing: border-box;
        }

        @media screen and (max-width: 1640px){
        .card-content:hover h2{
            transform: translateY(-230%);
        }
        }

        @media screen and (max-width: 1475px){
        h2{
            padding: 20px 15px;
        }
        .card-content:hover h2{
            transform: translateY(-280%);
        }
        }

        @media screen and (max-width: 1475px){
        .card-content:hover h2{
            transform: translateY(-250%);
        }
        }

        @media screen and (max-width: 1170px){
        .card-content:hover h2{
            transform: translateY(-220%);
        }
        }

        @media screen and (max-width: 1060px){
        .card-content:hover h2{
            transform: translateY(-200%);
        }
        }

        @media screen and (max-width: 950px){
        .card-content:hover h2{
            transform: translateY(-180%);
        }
        }

        @media screen and (max-width: 870px){
        h2{
            padding: 10px 15px;
            bottom: 25%;
        }
        .card-content:hover h2{
            transform: translateY(0%);
            opacity: 0;
            transition: opacity .2s ease-in-out;
        }
        }
        `}</style>
    </section>
}
export default ResourcesCard
