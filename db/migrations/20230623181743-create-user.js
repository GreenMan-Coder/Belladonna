'use strict';

const { UserSchema, USER_TABLE } = require('../models/userModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.drop(USER_TABLE);
  }
};
