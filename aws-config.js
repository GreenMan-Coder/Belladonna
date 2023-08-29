require("dotenv").config();

const AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: 'AKIAZ7EIG4J4AIJ3DXUC',
  secretAccessKey: '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',
  region: 'us-east-1',
});

const s3 = new AWS.S3();

module.exports = {
  s3,
  AWS,
};
