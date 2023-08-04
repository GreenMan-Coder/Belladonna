const { User, UserSchema } = require('./userModel');

function setupModels(sequelize){
  User.init(UserSchema, User.confing(sequelize));
}


module.exports = setupModels;
