const Generator = require('yeoman-generator')
const yosay = require('yosay')
const helpers = require('./helpers.js')

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts)
  }

  initializing() {
    helpers.checkValidFlyntDirectory(this)
  }

  prompting() {
    this.log(yosay('Welcome to the neat Flynt generator!'))

    return this.prompt([{
      type: 'list',
      name: 'type',
      message: 'What kind of Flynt content do you want to generate?',
      choices: [
        {
          name: 'Component',
          value: 'component'
        },
        {
          name: 'Feature',
          value: 'feature'
        }
      ]
    }]).then((answers) => {
      this.createType = answers.type
    })
  }

  default() {
    if (this.createType === 'component') {
      this.composeWith(require.resolve('../component'))
    } else if (this.createType === 'feature') {
      this.composeWith(require.resolve('../feature'))
    }
  }
}
