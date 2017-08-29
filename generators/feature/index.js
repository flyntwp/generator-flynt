const Generator = require('yeoman-generator')
const _ = require('lodash')
const helpers = require('../app/helpers.js')

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  initializing () {
    helpers.checkValidFlyntDirectory(this)
    this.themePath = helpers.getThemePath(this)
    this.log('Starting Flynt Feature Generator...')
  }

  prompting () {
    return this.prompt({
      type: 'input',
      name: 'name',
      message: 'Name of the new feature in UpperCamelCase',
      validate: function (input) {
        if (!input.length) {
          return 'Please enter a name!'
        }
        return true
      }
    }).then((answers) => {
      const name = answers.name
      this.namePretty = _.startCase(name)
      this.nameUpperCamelCase = _.upperFirst(_.camelCase(name))
    })
  }

  writing () {
    this.log('Creating files...')

    this.fs.copyTpl(
      this.templatePath('*'),
      `${this.themePath}/Features/${this.nameUpperCamelCase}/`,
      {
        namePretty: this.namePretty,
        nameUpperCamelCase: this.nameUpperCamelCase
      }
    )
  }

  end () {
    this.log(`Successfully created feature: ${this.nameUpperCamelCase}`)
  }
}
