require("dotenv").config();

const AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: 'AKIAZ7EIG4J4BQMDQC7A',
  secretAccessKey: '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',
  region: 'us-east-1',
});

const s3 = new AWS.S3();

module.exports = {
  s3,
  AWS,
};
