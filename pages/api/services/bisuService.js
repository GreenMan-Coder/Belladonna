require("dotenv").config();
const aws = require("../../../aws-config");
const dynamodb = aws.dynamodb;

class bisuService{

  constructor(){
    this.generate();
  }

  async generate(){
    try {
      const params = {TableName: 'Jewelry'};
      const data = await dynamodb.scan(params).promise();
      return data.Items;
    } catch (error) {
      console.error('Error al obtener las joyas:', error);
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
