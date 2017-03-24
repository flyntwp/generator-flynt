module.exports = [{
  type: 'input',
  name: 'elementName',
  message: 'The new components name in upper camelcase',
  default: 'NewComponent'
}, {
  type: 'checkbox',
  name: 'files',
  message: 'What kind of files do you want to generate?',
  choices: [
    {
      name: 'Markup (index.twig)',
      value: 'index.twig',
      checked: true
    },
    {
      name: 'Styling (style.styl)',
      value: 'style.styl',
      checked: true
    },
    {
      name: 'Script (script.js)',
      value: 'script.js',
      checked: false
    },
    {
      name: 'Functions (functions.php)',
      value: 'functions.php',
      checked: false
    },
    {
      name: 'Fields (fields.json)',
      value: 'fields.json',
      checked: false
    }
  ]
}]
