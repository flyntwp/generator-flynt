const Generator = require('yeoman-generator')
const _ = require('lodash')

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  initializing () {
    this.log('Starting Flynt Feature Generator...')
    // TODO: check if path is correct (flynt theme directory)
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
      this.destinationPath(`Features/${this.nameUpperCamelCase}/`),
      {
        namePretty: this.namePretty,
        nameUpperCamelCase: this.nameUpperCamelCase
      }
    )
  }

  end () {
    // TODO: do some checks to be sure that everything went well
    this.log(`Successfully created feature: ${this.nameUpperCamelCase}`)
  }
}
