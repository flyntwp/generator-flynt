const Generator = require('yeoman-generator')
const _ = require('lodash')
const prompts = require('./prompts.js')

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  initializing () {
    this.log('Starting Flynt Component Generator...')
    // TODO: check if path is correct (flynt theme directory)
  }

  prompting () {
    return this.prompt(prompts).then((answers) => {
      // TODO: use base component selection and auto prepend that component's category, use this for custom components only
      const name = answers.category ? answers.category + answers.name : answers.name

      this.nameKebabCase = _.kebabCase(name)
      this.nameLowerCamelCase = _.camelCase(name)
      this.nameUpperCamelCase = _.upperFirst(this.nameLowerCamelCase)
      this.template = 'custom'
    })
  }

  writing () {
    this.log('Creating files...')

    const destDir = 'Components/' + this.nameUpperCamelCase + '/'

    this.fs.copy(
      this.templatePath(this.template + '/*.jpg'),
      this.destinationPath(destDir)
    )

    this.fs.copyTpl(
      this.templatePath(this.template + '/!(*.jpg)'),
      this.destinationPath(destDir),
      {
        name: this.nameUpperCamelCase,
        nameKebab: this.nameKebabCase,
        nameCamel: this.nameLowerCamelCase
      }
    )
  }

  end () {
    this.log(`Successfully created component: ${this.nameUpperCamelCase}`)
  }
}
