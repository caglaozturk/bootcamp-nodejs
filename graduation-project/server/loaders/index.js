const { esClient } = require('./elasticsearch');

const connectDB = async () => {
  await esClient.ping(
    {
      requestTimeout: 1000,
    },
    function (error) {
      if (error) {
        console.trace("Elasticsearch'e erişilmiyor!");
      } else {
        console.log('Elasticsearch ayakta :)');
      }
    }
  );
};

module.exports = () => {
  connectDB();
};
