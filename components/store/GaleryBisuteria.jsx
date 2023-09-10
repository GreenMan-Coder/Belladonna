import { useEffect, useState } from "react"
require("dotenv").config();
import { s3 } from '../../aws-config'

const GaleryBisuteria = ({items}) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    async function fetchImageUrls(){

      try {
        const bucketName = 'belladonna-store';
        const objects = await s3.listObjectsV2({ Bucket: bucketName}).promise();
        console.log("joyas:::::  ",items);
        console.log("OBJETOS::::: ", objects);
        function matchingImage(){
          objects.Contents.forEach((object) => {
            const matchingImage = items.Contents.find((obj) =>{
              console.log("object.Key:::: ", object.Key);
              console.log("items.image:::: ", obj.image);
              if (object.Key === obj.image){
                const url = `https://${bucketName}.s3.amazonaws.com/${object.Key}`;
                console.log("URL:::: ", url);
              };
            });
          });
        };
      } catch (error) {

      }
    }
    fetchImageUrls();
  }, [])



  return <article className="container">
    <style jsx>{`
      .container {
      }
    `}</style>
  </article>
}
export default GaleryBisuteria
