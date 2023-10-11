const JewelryService = require('../../../../backend/services/JewelryService');
const service = new JewelryService();

const handler = async (req, res) =>{
  if (req.method === 'GET'){
    try{
      const data = await service.goldSilver();
      res.json(data);
    } catch (error){
      res.json({
        message: "Error al traer imagenes oro y plata"
      });
    }
  }
}

export default handler
