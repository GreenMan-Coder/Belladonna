require("dotenv").config();
const aws = require("../../aws-config");
const dynamodb = aws.dynamodb;
const s3 = aws.s3;

class jewelryService{
  constructor(){

  }

  async generate(){
    try {
      const keyValue = 'bisu';
      const params = {TableName: 'Jewelry', FilterExpression: 'category = :value', ExpressionAttributeValues: {':value': keyValue,},};
      const data = await dynamodb.scan(params).promise();
      const paramS3 = {Bucket: 'belladonna-store'};
      const objects = await s3.listObjectsV2(paramS3).promise();
      const imageUrls = objects.Contents.map((object) => {
        const url = `https://${paramS3.Bucket}.s3.amazonaws.com/${object.Key}`;
        const name = object.Key;
        return { url, name };
      });
      function matchingObject(){
        const dataWithUrl = data.Items.map((object) => {
          const urlImage = imageUrls.find((obj) => {
            if (obj.url.includes(object.image)){
              return { url: obj.url, jewelID: obj.jewelID };
            }else{
              console.log("Buscando");
            };
          });
        return { ...object, imagenUrl: urlImage };
        });
        return dataWithUrl;
      }
      const dataWithUrl = matchingObject();
      return dataWithUrl;
    } catch (error) {
      console.error('Error al obtener las joyas:', error);
    }
  }

  async goldSilver(){
    try {
      const keyValue = 'joyas';
      const params = {TableName: 'Jewelry', FilterExpression: 'category = :value', ExpressionAttributeValues: {':value': keyValue,},};
      const data = await dynamodb.scan(params).promise();
      const paramS3 = {Bucket: 'belladonna-store'};
      const objects = await s3.listObjectsV2(paramS3).promise();
      const imageUrls = objects.Contents.map((object) => {
        const url = `https://${paramS3.Bucket}.s3.amazonaws.com/${object.Key}`;
        const name = object.Key;
        return { url, name };
      });
      function matchingObject(){
        const dataWithUrl = data.Items.map((object) => {
          const urlImage = imageUrls.find((obj) => {
            if (obj.url.includes(object.image)){
              return { url: obj.url, jewelID: obj.jewelID };
            }else{
              console.log("Buscando");
            };
          });
        return { ...object, imagenUrl: urlImage };
        });
        return dataWithUrl;
      }
      const dataWithUrl = matchingObject();
      return dataWithUrl;
    } catch (error) {
      console.error('Error al obtener las joyas:', error);
    }
  }

  create(){

  }

  findOne(id){
    return this.bisuteria.find(item => item.id === id);
  }

  update(){

  }

  delete(){

  }
}

module.exports = jewelryService;
