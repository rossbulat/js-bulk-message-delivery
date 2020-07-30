const { Connection } = require('../mongo')

module.exports = {

  /* accountsToWelcome
   * collects all accounts that meet this message type requirements.
   */
  accountsToWelcome: async () => {

    const accounts = await Connection.db
      .collection('users')
      .find({
        'meta.sentWelcome': false,
      })
      .toArray();

    if (accounts.length === 0) {
      return [];
    }
    return accounts;
  },

  /* accountsWelcomeSent
   * marks welcome message sent for an account.
   */
  accountsWelcomeSent: async (_id) => {

    await Connection.db
      .collection('users')
      .updateOne({
        _id: _id
      }, {
        $set: {
          'meta.sentWelcome': true,
        }
      });
  }
}