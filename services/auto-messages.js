const moment = require('moment');
const Accounts = require('../data/Accounts');
const Template_Welcome = require('../templates/welcome');
const Template_HowTo = require('../templates/how-to-use');

// interval duration
const interval = 60 * 1000 * 30; // 30 minutes

module.exports = {

  generateWelcomeMessages: async function (client) {
    try {
      // get accounts that need welcome messages
      const accounts = await Accounts.accountsToWelcome(client);
      if (accounts.length === 0) {
        return;
      }

      // generate messages
      for (let i = 0; i < accounts.length; i++) {

        let firstName = accounts[i].name.replace(/ .*/, '');
        let templates = [
          Template_HowTo.generate(firstName),
          Template_Welcome.generate(firstName)
        ];

        // insert messages
        for (let template of templates) {
          await client
            .db('my-database')
            .collection('messages')
            .insertOne({
              user_id: accounts[i]._id,
              subject: template.subject,
              message: template.message,
              createdAt: moment().unix(),
              processed: false,
              read: false,
              archived: false,
            });
        }

        // update to completed
        await Accounts.accountsWelcomeSent(client, accounts[i]._id);
      }
    } catch (e) {
    }
  },

  init: async function (client) {
    module.exports.generateWelcomeMessages(client);
    setInterval(async function () {
      module.exports.generateWelcomeMessages(client);
    }, interval)
  }
};