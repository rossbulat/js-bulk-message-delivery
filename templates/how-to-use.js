module.exports = {
  generate: (name) => ({
    subject: `How to Use This App`,
    message: `${name !== '' ? `Dear ${name},` : `Hello!`}

This message outlines ways you can use this app. 

### From Everyone at App Team`
  }),
};