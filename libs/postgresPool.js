const { Pool } = require('pg');
const { config } = require('../config/config');
const { CONFIG_FILES } = require('next/dist/shared/lib/constants');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const pool = new Pool({ connectionString: URI });

module.exports = pool;
