//Elastic Cliente Bağlanıyoruz

const es = require('elasticsearch');
const config = require('../config');
config();
const esClient = new es.Client({
  host: process.env.ELASTICSEARCH_DB_HOST,
  log: 'trace',
});

module.exports = { esClient };
