const MongoClient = require('mongodb').MongoClient;

module.exports = {

  client: async () => {
    const client = await MongoClient.connect(
      'mongodb://' + escape(process.env.MONGO_USERNAME) + ':' + escape(process.env.MONGO_PASSWORD) + '@' + escape(process.env.MONGO_HOST) + ':27017/',
      {
        useUnifiedTopology: true,
      });
    return client;
  }
};