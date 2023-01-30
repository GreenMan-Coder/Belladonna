import { useEffect, useState } from "react";

const bodyZone = [
    {
        id: 1,
        name: "Bikini parcial",
        price: "$40.000",
    },
    {
        id: 1,
        name: "Bikini completo",
        price: "$80.000",
    },
    {
        id: 1,
        name: "Zona interglutea",
        price: "$50.000",
    },
    {
        id: 1,
        name: "Glúteos",
        price: "$60.000" 
    },
    {
        id: 2,
        name: "Rostro completo",
        price: "$60.000",
    },
    {
        id: 2,
        name: "Cejas",
        price: "$60.000",
    },
    {
        id: 2,
        name: "Bozo",
        price: "$60.000",
    },
    {
        id: 2,
        name: "Mentón",
        price: "$60.000",
    },
    {
        id: 2,
        name: "Axilas",
        price: "$60.000",
    },
    {
        id: 2,
        name: "Brazos",
        price: "$60.000",
    },
    {
        id: 2,
        name: "Abdomen",
        price: "$60.000",
    },
    {
        id: 2,
        name: "Espalda",
        price: "$60.000",
    },
    {
        id: 3,
        name: "Pierna completa",
        price: "$60.000",
    },
    {
        id: 3,
        name: "Media pierna",
        price: "60.000",
    },
    ]


const DescriptionCard = ({ zone, cardSelected }) => {
    const [services, setservices] = useState([]);

    useEffect(() => {
    if (cardSelected != 0){
        let serviceSelected = bodyZone.filter((part) => part.id === cardSelected);
        setservices(serviceSelected);
    }
    }, [cardSelected]);

    return (
    <section className="container">
        <h1>zonas del cuerpo</h1>
        <div className="zone">
            {services.map((service, index ) => {
            return <ul key={index}>
                <li className="list1">{service.name}</li>
                <li className="list2">{service.price}</li>
                </ul>
            })}
        </div>

        <style jsx>{`
            .container {
                grid-column: 1/4;
                grid-row: 4/5;
                height: 90%;
                width: 80%;
                background: #fff;
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 0.33fr 1fr;
                justify-content: center;
                border-radius: 15px;
            }

            h1{
                grid-row: 1/2;
                background: #fff;
                text-transform: uppercase;
                border-bottom: 1px solid #ccc;
                font-weight: 900;
                color: #e7822f;
                text-align: center;
                box-sizing: border-box;
                margin-top: 15px;
            }

            .zone{
                grid-row: 2/3;
                height: 95%;
                width: auto;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                grid-template-rows: 100px 100px;
            }
            
            ul{
                margin: 0;
            }

            li {
                list-style: none;
                text-align: center;
                padding-bottom: 5px;
                box-sizing: border-box;
            }
            .list1{
                list-style: circle;
                font-weight: 600;
            }
            .list2{
                color: #e7822f;
                font-weight: 400;
            }
        `}</style>
    </section>
    );
};

export default DescriptionCard;