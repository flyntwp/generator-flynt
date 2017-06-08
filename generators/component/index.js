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
      this.name = answers.name
      if (answers.category) {
        // TODO: instead of prepending this name, use base component selection and let them choose the name themselves 
        this.name = answers.category + this.name
      }
      this.nameKebab = _.kebabCase(this.name)
      this.nameCamel = _.camelCase(this.name)
    })
  }

  writing () {
    this.log('Creating files...')

    this.fs.copy(
      this.templatePath('*.jpg'),
      this.destinationPath('Components/' + this.name + '/')
    )

    this.fs.copyTpl(
      [
        this.templatePath('*'),
        '!' + this.templatePath('*.jpg')
      ],
      this.destinationPath('Components/' + this.name + '/'),
      {
        name: this.name,
        nameKebab: this.nameKebab,
        nameCamel: this.nameCamel
      }
    )
  }

  end () {
    this.log(`Successfully created component: ${this.name}`)
  }
}
