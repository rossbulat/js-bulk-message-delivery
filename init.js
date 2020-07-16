const mongo = require('./mongo');
const Service_AutoMessages = require('./services/auto-messages');

async function init () {

  const client = await mongo.client();

  Service_AutoMessages.init(client);
}

init();