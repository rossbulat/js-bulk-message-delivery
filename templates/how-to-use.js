module.exports = {
  generate: (name) => ({
    subject: `How to Use This App`,
    message: `${name !== '' ? `Dear ${name}` : `您好`},

This message outlines ways you can use this app to further your Chinese revision and overall productivity. 

From Everyone at App Team`
  }),
};