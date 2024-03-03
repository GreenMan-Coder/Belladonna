import { useEffect, useState } from 'react'
import { s3 } from '../../aws-config'
import BodyZone from '../depilation/business/BodyZone'
import Static from './Static'
require('dotenv').config()

const bodyZone = [
    {
        id: 1,
        name: 'cuerpo completo',
        price: '$98.000 COP',
        image: ''
    },
    {
        id: 2,
        name: 'rostro completo',
        price: '$45.000 COP',
        image: ''
    },
    {
        id: 2,
        name: 'bigote',
        price: '$10.000 COP',
        image: ''
    },
    {
        id: 2,
        name: 'cejas',
        price: '$15.000 COP',
        image: ''
    },
    {
        id: 2,
        name: 'menton',
        price: '$10.000 COP',
        image: ''
    },
    {
        id: 2,
        name: 'axilas',
        price: '$15.000 COP',
        image: ''
    },
    {
        id: 2,
        name: 'brazos',
        price: '$25.000 COP',
        image: ''
    },
    {
        id: 3,
        name: 'bikini completo',
        price: '$45.000 COP',
        image: ''
    },
    {
        id: 3,
        name: 'bikini parcial',
        price: '$30.000 COP',
        image: ''
    },
    {
        id: 3,
        name: 'gluteos',
        price: '$30.000 COP',
        image: ''
    },
    {
        id: 4,
        name: 'piernas completas',
        price: '$45.000 COP',
        image: ''
    },
    {
        id: 4,
        name: 'media pierna',
        price: '$30.000 COP',
        image: ''
    }
]

const DescriptionCard = ({ cardSelected }) => {
    const [services, setServices] = useState([])
    const [currentImage, setCurrentImage] = useState(0)
    const [updateBodyZone, setUpdateBodyZone] = useState([])

    useEffect(() => {
        async function fetchImageUrls () {
            try {
                const bucketName = 'depilation'
                const objects = await s3.listObjectsV2({ Bucket: bucketName }).promise()
                function matchingObject (keyValue, obj) {
                    let imageName = ''
                    const matchingImage = objects.Contents.find((object) => {
                        if (object.Key.includes(keyValue) && object.Key.endsWith('.png')) {
                            imageName = keyValue.concat('.png')
                            console.log(imageName)
                            return true
                        } else if (object.Key.includes(keyValue) && object.Key.endsWith('.jpg')) {
                            imageName = keyValue.concat('.jpg')
                            console.log(imageName)
                            return true
                        } else if (object.Key.includes(keyValue) && object.Key.endsWith('.jpeg')) {
                            imageName = keyValue.concat('.jpeg')
                            console.log(imageName)
                            return true
                        };
                        return false
                    })
                    if (matchingImage) {
                        const url = s3.getSignedUrl('getObject', {
                            Bucket: bucketName,
                            Key: matchingImage.Key,
                            Expires: 600 * 10
                        })
                        return { ...obj, image: url }
                    };
                    return obj
                }
                const bodyZoneFilter = bodyZone.map((obj) => {
                    if (obj.id === 1) {
                        return matchingObject('fullbody.png', obj)
                    } else if (obj.id === 2 || obj.id === 3 || obj.id === 4) {
                        const nameInBucket = obj.name.split(' ').join('-')
                        return matchingObject(nameInBucket, obj)
                    };
                    return undefined
                })
                setUpdateBodyZone(bodyZoneFilter)
            } catch (error) {
                console.error('Error fetching image URLs:', error)
            }
        }
        fetchImageUrls()
    }, [])

    const handleNextImage = () => {
        setCurrentImage((currentImage + 1) % services.length)
    }

    const handlePrevImage = () => {
        setCurrentImage(currentImage === 0 ? services.length - 1 : currentImage - 1)
    }

    useEffect(() => {
        if (cardSelected !== 0) {
            const serviceSelected = updateBodyZone.filter((part) => part.id === cardSelected)
            setServices(serviceSelected)
            setCurrentImage(0)
        }
    }, [cardSelected, updateBodyZone])

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
