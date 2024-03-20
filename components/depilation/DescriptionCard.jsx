import { useEffect, useState } from 'react'
import BodyZone from '../depilation/business/BodyZone'
import Static from './Static'
require('dotenv').config()

const bodyZone = [
    {
        id: 1,
        name: 'cuerpo completo',
        price: '$98.000 COP',
        image: 'https://depilation.s3.amazonaws.com/fullbody.png'
    },
    {
        id: 2,
        name: 'rostro completo',
        price: '$45.000 COP',
        image: 'https://depilation.s3.amazonaws.com/rostro-completo.png'
    },
    {
        id: 2,
        name: 'bigote',
        price: '$10.000 COP',
        image: 'https://depilation.s3.amazonaws.com/bigote.png'
    },
    {
        id: 2,
        name: 'cejas',
        price: '$15.000 COP',
        image: 'https://depilation.s3.amazonaws.com/cejas.png'
    },
    {
        id: 2,
        name: 'menton',
        price: '$10.000 COP',
        image: 'https://depilation.s3.amazonaws.com/menton.jpg'
    },
    {
        id: 2,
        name: 'axilas',
        price: '$15.000 COP',
        image: 'https://depilation.s3.amazonaws.com/axilas.jpeg'
    },
    {
        id: 2,
        name: 'brazos',
        price: '$25.000 COP',
        image: 'https://depilation.s3.amazonaws.com/brazos.jpeg'
    },
    {
        id: 3,
        name: 'bikini completo',
        price: '$45.000 COP',
        image: 'https://depilation.s3.amazonaws.com/bikini-completo.jpeg'
    },
    {
        id: 3,
        name: 'bikini parcial',
        price: '$30.000 COP',
        image: 'https://depilation.s3.amazonaws.com/bikini-parcial.png'
    },
    {
        id: 3,
        name: 'gluteos',
        price: '$30.000 COP',
        image: 'https://depilation.s3.amazonaws.com/gluteos.jpeg'
    },
    {
        id: 4,
        name: 'piernas completas',
        price: '$45.000 COP',
        image: 'https://depilation.s3.amazonaws.com/piernas-completas.jpg'
    },
    {
        id: 4,
        name: 'media pierna',
        price: '$30.000 COP',
        image: 'https://depilation.s3.amazonaws.com/media-pierna.jpg'
    }
]

const DescriptionCard = ({ cardSelected }) => {
    const [services, setServices] = useState([])
    const [currentImage, setCurrentImage] = useState(0)

    const handleNextImage = () => {
        setCurrentImage((currentImage + 1) % services.length)
    }

    const handlePrevImage = () => {
        setCurrentImage(currentImage === 0 ? services.length - 1 : currentImage - 1)
    }

    useEffect(() => {
        if (cardSelected !== 0) {
            const serviceSelected = bodyZone.filter((part) => part.id === cardSelected)
            setServices(serviceSelected)
            setCurrentImage(0)
        }
    }, [cardSelected, BodyZone])

    return (<section className="container">
        {services.length === 1
            ? services.map((service, index) => {
                return <Static key={index} service={service}/>
            })
            : services.length === 6
                ? <BodyZone handlePrevImage={handlePrevImage} handleNextImage={handleNextImage} services={services} currentImage={currentImage}/>
                : services.length === 3
                    ? <BodyZone handlePrevImage={handlePrevImage} handleNextImage={handleNextImage} services={services} currentImage={currentImage}/>
                    : services.length === 2
                        ? <BodyZone handlePrevImage={handlePrevImage} handleNextImage={handleNextImage} services={services} currentImage={currentImage}/>
                        : ''}

        <style jsx>{`
            .container {
                grid-column: 1/3;
                justify-self: center;
                width: 100%;
                display: grid;
                justify-items: center;
                align-items: center;
            }
        `}</style>
    </section>
    )
}

export default DescriptionCard
