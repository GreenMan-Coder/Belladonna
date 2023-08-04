const { resolve } = require("path");

const sequelize = require('../../../libs/sequelize')

class JewelService{

  constructor(){
    }

  async create() {
    //await
  }

  async find(){
    const query = 'SELECT * FROM task';
    const [data, metadata] = await sequelize.query(query);
    return data;
  }

  findOne(){

  }

  update(){

  }

  async delete(){

  }
}


module.exports = JewelService;
