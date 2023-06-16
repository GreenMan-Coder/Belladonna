const { resolve } = require("path");

class JewelService{

  constructor(){

  }

  async create() {
    //await
  }

  find(){
    return new promise((resolve, reject) => {
      setTimeout(()=>{
        resolve(this.products);
      }, 5000);
    })
  }

  findOne(){

  }

  update(){

  }

  async delete(){

  }
}


module.exports = JewelService;
