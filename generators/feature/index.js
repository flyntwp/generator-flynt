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
      this.name = answers.name
      this.namePretty = _.startCase(this.name)
      this.nameUpperCamelCase = _.upperFirst(_.camelCase(this.name))
    })
  }

  writing () {
    // TODO: automate this, take all files in directory
    const files = [
      'README.md',
      'SNIPPETS.md',
      'functions.php',
      'fields.json'
    ]

    this.log('Creating files...')

    for (const file of files) {
      this.fs.copyTpl(
        this.templatePath(file),
        this.destinationPath('Features/' + this.nameUpperCamelCase + '/' + file),
        {
          namePretty: this.namePretty,
          nameUpperCamelCase: this.nameUpperCamelCase
        }
      )
    }
  }

  end () {
    this.log(`Successfully created feature: ${this.namePretty}`)
  }
}
