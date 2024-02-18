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
            height: 100%;
            background-image: ${url};
            background-repeat: no-repeat;
            background-size: cover;
            background-attachment: local;
            display: grid;
            justify-items: center;
            align-items: center;
            border-radius: 15px;
            box-shadow: 0 5px 15px 1px var(--dark-purple);
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
            height: 100%;
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
            bottom: 2%;
            grid-row: 1/2;
            align-self: end;
            height: auto;
            font-size: 3.6em;
            font-weight: 700;
            color: var(--purple-blanco);
            z-index: 2;
            transform: translateY(0%);
            transition: transform 0.5s;
            background: var(--tone-purple);
            border-radius: 15px;
            box-sizing: border-box;
            padding: 15px 15px;
            user-select: none;
        }
        .card-content:hover h2{
            transform: translateY(-480%);
            transition: transform 0.5s;
            background: transparent;
        }
        p{
            z-index: 1;
            grid-row: 1/2;
            align-self: center;
            position: relative;
            top: 10%;
            box-sizing: border-box;
            padding: 0 1em;
            transition: grid-row-start 0.5s ease;
            opacity: 0;
            transition: opacity .2s ease-in-out;
            font-size: 2em;
            color: var(--purple-blanco);
            user-select: none;
        }
        .card-content:hover p{
            opacity: 1;
            transition: opacity .6s ease-in-out;
            box-sizing: border-box;
        }

        @media screen and (max-width: 2500px){
        }
        `}</style>
    </section>
}
export default ResourcesCard
