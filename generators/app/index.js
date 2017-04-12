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
        },
        {
          name: 'Page Template',
          value: 'templates'
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
    this.extraFiles = []
    var elementName = this.answers.elementName
    var elementNameKebab = _.kebabCase(elementName)
    var elementNameCamel = _.camelCase(elementName)

    switch (this.contentType) {
      case 'Components':
        this.extraFiles.push('preview-desktop.jpg', 'preview-mobile.jpg')
        this.answers.files.push('README.md', 'SNIPPETS.md')
        break
      case 'Features':
        this.answers.files.push('README.md', 'SNIPPETS.md')
        break
      case 'templates':
        this.extraFiles.push('page-templateName.php')
    }

    if (this.answers.files) {
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

    for (var file of this.extraFiles) {
      if (this.contentType === 'templates') {
        const newFile = file.replace('templateName', _.kebabCase(this.answers.templateName))
        this.fs.copyTpl(
          this.templatePath(this.contentType + '/' + file),
          this.destinationPath(this.contentType + '/' + newFile),
          {
            templateName: this.answers.templateName
          }
        )
      } else {
        this.fs.copy(
          this.templatePath(this.contentType + '/' + file),
          this.destinationPath(this.contentType + '/' + elementName + '/' + file)
        )
      }
    }
  }
}
