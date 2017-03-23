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
          value: 'generateMarkup',
          checked: true
        },
        {
          name: 'Styling (style.styl)',
          value: 'generateStyles',
          checked: true
        },
        {
          name: 'Script (script.js)',
          value: 'generateScript',
          checked: false
        },
        {
          name: 'Functions (functions.php)',
          value: 'generateFunctions',
          checked: false
        },
        {
          name: 'Fields (fields.json)',
          value: 'generateFields',
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

    if (this.answers.files.indexOf('generateMarkup') > -1) {
      this.fs.copyTpl(
        this.templatePath('index.twig'),
        this.destinationPath(componentName + '/index.twig'),
        {
          componentName: componentName,
          componentNameKebab: componentNameKebab,
          componentNameLower: componentNameLower
        }
      )
    }

    if (this.answers.files.indexOf('generateStyles') > -1) {
      this.fs.copyTpl(
        this.templatePath('style.styl'),
        this.destinationPath(componentName + '/style.styl'),
        {
          componentName: componentName,
          componentNameKebab: componentNameKebab,
          componentNameLower: componentNameLower
        }
      )
    }

    if (this.answers.files.indexOf('generateScript') > -1) {
      this.fs.copyTpl(
        this.templatePath('script.js'),
        this.destinationPath(componentName + '/script.js'),
        {
          componentName: componentName,
          componentNameKebab: componentNameKebab,
          componentNameLower: componentNameLower
        }
      )
    }

    if (this.answers.files.indexOf('generateFields') > -1) {
      this.fs.copyTpl(
        this.templatePath('fields.json'),
        this.destinationPath(componentName + '/fields.json'),
        {
          componentName: componentName,
          componentNameKebab: componentNameKebab,
          componentNameLower: componentNameLower
        }
      )
    }

    if (this.answers.files.indexOf('generateFunctions') > -1) {
      this.fs.copyTpl(
        this.templatePath('functions.php'),
        this.destinationPath(componentName + '/functions.php'),
        {
          componentName: componentName,
          componentNameKebab: componentNameKebab,
          componentNameLower: componentNameLower
        }
      )
    }
  }
}
