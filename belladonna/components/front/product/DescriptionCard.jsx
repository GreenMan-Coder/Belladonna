import { useEffect, useState } from "react";

const parts = [
    {
        id: 1,
        services: [
        "Bikini parcial",
        "Bikini completo",
        "Brasilero",
        "Zona interglutea",
        "glúteos",
    ],
    },
    {
        id: 2,
        services: [
        "Rostro completo",
        "Cejas",
        "Bozo",
        "Mentón",
        "Axilas",
        "Brazos",
        "Abdomen",
        "Espalda",
    ],
    },
    {
        id: 3,
        services: ["Pierna completa", "Media pierna"],
    },
    ]


const DescriptionCard = ({ zone, cardSelected }) => {
    const [services, setservices] = useState([]);

    useEffect(() => {
    if (cardSelected != 0){
        let serviceSelected = parts.find((part) => part.id === cardSelected);
        setservices(serviceSelected.services);
    }
    }, [cardSelected]);

    return (
    <section className="container">
        <div className="header">zonas del cuerpo</div>
        <div className={zone}>
            {services.map((service, index) => {
            return <ul key={index}>{service}</ul>;
            })}
        </div>

        <style jsx>{`
            .container {
            grid-column: 2/3;
            grid-row: 3/6;
            height: 98%;
            width: 80%;
            background: #fff;
            display: grid;
            font-family: "Karla", sans-serif;
            }

            .header {
            height: 45px;
            background: #fff;
            border-bottom: 1px solid #ccc;
            display: grid;
            justify-content: center;
            align-items: center;
            text-transform: uppercase;
            font-weight: 900;
            color: #e7822f;
            }

            .prueba {
            background: green;
            width: 100px;
            height: 100px;
            }

            .prueba1 {
            background: black;
            width: 100px;
            height: 100px;
            }
            .prueba2 {
            background: yellow;
            width: 100px;
            height: 100px;
            }
            li {
            border: 1px solid red;
            width: 100px;
            height: 100px;
            }
        `}</style>
    </section>
    );
};

export default DescriptionCard;
