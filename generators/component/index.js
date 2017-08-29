const Generator = require('yeoman-generator')
const _ = require('lodash')
const fs = require('fs')
const categories = require('./data/categories.js')
const helpers = require('../app/helpers.js')

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  initializing () {
    helpers.checkValidFlyntDirectory(this)
    this.themePath = helpers.getThemePath(this)
    this.log('Starting Flynt Component Generator...')
  }

  prompting () {
    return this.prompt([
      {
        type: 'list',
        name: 'type',
        message: 'Please select your desired action:',
        choices: [
          {
            name: 'Create a custom component from scratch',
            value: 'custom'
          },
          {
            name: 'Add a template file to an existing component',
            value: 'file'
          }
        ]
      }
    ]).then((answers) => {
      this.type = answers.type
      if (this.type === 'custom') {
        return this._promptCustomComponent().then((answers) => {
          this.name = _.upperFirst(answers.name)
          if (answers.category) {
            this.name = answers.category + this.name
          }
        })
      } else if (this.type === 'file') {
        return this._promptComponentFile()
      }
    })
  }

  _promptCustomComponent() {
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
          const validStringRegEx = /^[A-Z][A-Za-z]*$/g
          if (!validStringRegEx.test(input)) {
            return 'Invalid component name'
          }
          return true
        }
      }
    ])
  }

  _promptComponentFile() {
    const templateFiles = fs.readdirSync(this.templatePath())
    const components = fs.readdirSync(`${this.themePath}/Components`)
      .filter(file => fs.statSync(`${this.themePath}/Components/${file}`).isDirectory())
      .reduce((carry, component) => {
        const existingFiles = fs.readdirSync(`${this.themePath}/Components/${component}`)
        const validFiles = _.differenceWith(
          templateFiles,
          existingFiles,
          (a, b) => a.toLowerCase() === b.toLowerCase()
        )
        if (validFiles.length) {
          carry[component] = validFiles
        }
        return carry
      }, [])
    return this.prompt([
      {
        type: 'list',
        name: 'name',
        message: 'Select a component to add files to',
        choices: Object.keys(components)
      }
    ]).then((answers) => {
      this.name = answers.name
      return this.prompt([
        {
          type: 'checkbox',
          name: 'files',
          message: 'Select the file(s) you would like to generate',
          choices: components[answers.name],
          validate: (answer) => answer.length > 0 || 'Please choose at least one file to add.'
        }
      ])
    }).then((answers) => {
      this.files = answers.files
    })
  }

  writing () {
    this.namePretty = _.startCase(this.name)
    this.nameKebabCase = _.kebabCase(this.name)
    this.nameLowerCamelCase = _.camelCase(this.name)
    this.nameUpperCamelCase = _.upperFirst(this.nameLowerCamelCase)

    if (this.type === 'custom') {
      this._writeCustomComponent()
    } else {
      this._writeComponentFile()
    }
  }

  _writeCustomComponent() {
    this.log('Creating files...')
    
    const destDir = `${this.themePath}/Components/${this.nameUpperCamelCase}/`

    this.fs.copy(
      this.templatePath(`*.jpg`),
      destDir
    )

    this.fs.copyTpl(
      this.templatePath(`!(*.jpg)`),
      destDir,
      {
        namePretty: this.namePretty,
        nameKebabCase: this.nameKebabCase,
        nameUpperCamelCase: this.nameUpperCamelCase,
        nameLowerCamelCase: this.nameLowerCamelCase
      }
    )
  }

  _writeComponentFile() {
    this.log(`Adding ${this.files.join(', ')} to ${this.name}...`)

    const nonTemplateFiles = this.files.filter(file => file.endsWith('.jpg'))
    const templateFiles = _.difference(this.files, nonTemplateFiles)
    const destDir = `${this.themePath}/Components/${this.name}/`

    if (nonTemplateFiles.length) {
      this.fs.copy(
        this.templatePath(`*(${nonTemplateFiles.join('|')})`),
        destDir
      )
    }

    if (templateFiles.length) {
      this.fs.copyTpl(
        this.templatePath(`*(${templateFiles.join('|')})`),
        destDir,
        {
          namePretty: this.namePretty,
          nameKebabCase: this.nameKebabCase,
          nameUpperCamelCase: this.nameUpperCamelCase,
          nameLowerCamelCase: this.nameLowerCamelCase
        }
      )
    }
  }

  end () {
    if (this.type === 'custom') {
      this.log(`Successfully created component: ${this.nameUpperCamelCase}`)
    } else if (this.type === 'file') {
      this.log('File generation successful')
    }
  }
}
