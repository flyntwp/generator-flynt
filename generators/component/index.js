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
    // TODO: automate this, take all files in directory
    const files = [
      'README.md',
      'SNIPPETS.md',
      'fields.json',
      'functions.php',
      'index.twig',
      'preview-desktop.jpg',
      'preview-mobile.jpg',
      'script.js',
      'style.styl'
    ]

    for (const file of files) {
      if (_.endsWith(file, '.jpg')) {
        this.fs.copy(
          this.templatePath(file),
          this.destinationPath('Components/' + this.name + '/' + file)
        )
      } else {
        this.fs.copyTpl(
          this.templatePath(file),
          this.destinationPath('Components/' + this.name + '/' + file),
          {
            name: this.name,
            nameKebab: this.nameKebab,
            nameCamel: this.nameCamel
          }
        )
      }
    }
  }
}
