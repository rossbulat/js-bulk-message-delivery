module.exports = {
  generate: (name) => ({
    subject: `A Warm Welcome!`,
    message: `Hello ${name !== '' ? ` ${name},` : `!`}

## Thank you for signing up!

If you have any queries or concerns about the app, if something does not work, or if you have [feedback](https://my-domain.com/contact) for improvements, please feel free to contact us.

### From Everyone at App Team`
  })
};