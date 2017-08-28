const Generator = require('yeoman-generator')
const _ = require('lodash')
const categories = require('./data/categories.js')

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  initializing () {
    this.log('Starting Flynt Component Generator...')
    // TODO: check if path is correct (flynt theme directory)
  }

  prompting () {
    return this.prompt([
      {
        type: 'list',
        name: 'category',
        message: 'What category does your new component fit best?',
        choices: categories
      },
      {
        type: 'input',
        name: 'name',
        message: 'Name of the new component in UpperCamelCase',
        validate: function (input) {
          if (!input.length) {
            return 'Please enter a name!'
          }
          return true
        }
      }
    ]).then((answers) => {
      let name = _.upperFirst(answers.name)

      if (answers.category) {
        name = answers.category + name
      }

      this.namePretty = _.startCase(name)
      this.nameKebabCase = _.kebabCase(name)
      this.nameLowerCamelCase = _.camelCase(name)
      this.nameUpperCamelCase = _.upperFirst(this.nameLowerCamelCase)
      this.template = 'custom'
    })
  }

  writing () {
    this.log('Creating files...')

    const destDir = `Components/${this.nameUpperCamelCase}/`

    this.fs.copy(
      this.templatePath(`${this.template}/*.jpg`),
      this.destinationPath(destDir)
    )

    this.fs.copyTpl(
      this.templatePath(`${this.template}/!(*.jpg)`),
      this.destinationPath(destDir),
      {
        namePretty: this.namePretty,
        nameKebabCase: this.nameKebabCase,
        nameUpperCamelCase: this.nameUpperCamelCase,
        nameLowerCamelCase: this.nameLowerCamelCase
      }
    )
  }

  end () {
    // TODO: do some checks to be sure that everything went well
    this.log(`Successfully created component: ${this.nameUpperCamelCase}`)
  }
}
