module.exports = {

  /* accountsWelcomeMessage
   * collects all accounts that meet this message type requirements.
   */
  welcomeMessage: async (client) => {

    const accounts = await client
      .db('my-database')
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

  /* accountsWelcomeMessageCompleted
   * marks welcome message sent for an account.
   */
  welcomeMessageCompleted: async (client, _id) => {

    await client
      .db('my-database')
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