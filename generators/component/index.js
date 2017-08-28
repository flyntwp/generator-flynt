const Generator = require('yeoman-generator')
const _ = require('lodash')
const categories = require('./data/categories.js')
const fs = require('fs')

// TODO: separate type choices into seperate imports / files

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
          return true
        }
      }
    ])
  }

  _promptComponentFile() {
    const templateFiles = fs.readdirSync(this.templatePath())
    const components = fs.readdirSync(this.destinationPath('Components'))
      .filter(file => fs.statSync(this.destinationPath(`Components/${file}`)).isDirectory())
      .reduce((carry, component) => {
        const existingFiles = fs.readdirSync(this.destinationPath(`Components/${component}`))
        const validFiles = _.difference(templateFiles, existingFiles)
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
    
    const destDir = `Components/${this.nameUpperCamelCase}/`

    this.fs.copy(
      this.templatePath(`*.jpg`),
      this.destinationPath(destDir)
    )

    this.fs.copyTpl(
      this.templatePath(`!(*.jpg)`),
      this.destinationPath(destDir),
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
    const destDir = `Components/${this.name}/`

    if (nonTemplateFiles.length) {
      this.fs.copy(
        this.templatePath(`*(${nonTemplateFiles.join('|')})`),
        this.destinationPath(destDir)
      )
    }

    if (templateFiles.length) {
      this.fs.copyTpl(
        this.templatePath(`*(${templateFiles.join('|')})`),
        this.destinationPath(destDir),
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
