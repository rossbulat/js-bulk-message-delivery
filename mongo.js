const MongoClient = require('mongodb').MongoClient
const conf = require('./confidential');

class Connection {

  static connectToMongo = async () => {
    if (this.db)
      return this.db;
    this.client = await MongoClient.connect(this.url, this.options);
    this.db = this.client.db('my-database');
    return this.db;
  }
}

Connection.client = null;
Connection.db = null;
Connection.url = 'mongodb://' + escape(process.env.MONGO_USERNAME) + ':' + escape(process.env.MONGO_PASSWORD) + '@' + escape(process.env.MONGO_HOST) + ':27017/';
Connection.options = {
  useUnifiedTopology: true,
}

module.exports = { Connection }