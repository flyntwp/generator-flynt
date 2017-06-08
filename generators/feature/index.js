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
      default: 'NewFeature'
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
    this.log(`Successfully created feature: ${this.nameUpperCamelCase}`)
  }
}
