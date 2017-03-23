var Generator = require('yeoman-generator')
var _ = require('lodash')

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts)
  }

  prompting () {
    return this.prompt([{
      type: 'input',
      name: 'componentName',
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
    }]).then((answers) => {
      this.answers = answers
    })
  }

  writing () {
    var componentName = this.answers.componentName
    var componentNameKebab = _.kebabCase(componentName)
    var componentNameLower = _.camelCase(componentName)

    for (var file of this.answers.files) {
      this.fs.copyTpl(
        this.templatePath(file),
        this.destinationPath(componentName + '/' + file),
        {
          componentName: componentName,
          componentNameKebab: componentNameKebab,
          componentNameLower: componentNameLower
        }
      )
    }
  }
}
