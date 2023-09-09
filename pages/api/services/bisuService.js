require("dotenv").config();
const aws = require("../../../aws-config");
const dynamodb = aws.dynamodb;

class bisuService{

  constructor(){
    this.generate();
  }

  async generate(){
    try {
      const params = {
        TableName: 'Jewelry'
      };
      const data = await dynamodb.query(params).promise();
      console.log("data: ", data);
      return data.Items;
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  }

  create(){

  }

  find(){
    return this.bisuteria;
  }

  findOne(id){
    return this.bisuteria.find(item => item.id === id);
  }

  update(){

  }

  delete(){

  }
}

module.exports = bisuService;
