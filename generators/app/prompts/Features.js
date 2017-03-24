module.exports = [{
  type: 'input',
  name: 'elementName',
  message: 'The new features name in upper camelcase',
  default: 'NewFeature'
}, {
  type: 'checkbox',
  name: 'files',
  message: 'What kind of files do you want to generate?',
  choices: [
    {
      name: 'Functions (functions.php)',
      value: 'functions.php',
      checked: true
    },
    {
      name: 'Fields (fields.json)',
      value: 'fields.json',
      checked: false
    }
  ]
}]
