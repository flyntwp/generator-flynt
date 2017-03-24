var Generator = require('yeoman-generator')
var _ = require('lodash')

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts)
  }

  prompting () {
    return this.prompt([{
      type: 'list',
      name: 'type',
      message: 'What kind of Flynt content do you want to generate?',
      choices: [
        {
          name: 'Component',
          value: 'Components'
        },
        {
          name: 'Feature',
          value: 'Features'
        }
      ]
    }]).then((answers) => {
      this.contentType = answers.type
      var contentPrompt = require('./prompts/' + answers.type + '.js')

      return this.prompt(contentPrompt).then((answers) => {
        this.answers = answers
      })
    })
  }

  writing () {
    var elementName = this.answers.elementName
    var elementNameKebab = _.kebabCase(elementName)
    var elementNameCamel = _.camelCase(elementName)

    for (var file of this.answers.files) {
      this.fs.copyTpl(
        this.templatePath(this.contentType + '/' + file),
        this.destinationPath(this.contentType + '/' + elementName + '/' + file),
        {
          elementName: elementName,
          elementNameKebab: elementNameKebab,
          elementNameCamel: elementNameCamel
        }
      )
    }
  }
}
