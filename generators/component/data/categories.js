const inquirer = require('inquirer')

module.exports = [
  {
    name: 'Accordion',
    value: 'Accordion'
  },
  {
    name: 'Block (A component without any further specification)',
    value: 'Block'
  },
  {
    name: 'Form',
    value: 'Form'
  },
  {
    name: 'Grid (Specific count of items per row)',
    value: 'Grid'
  },
  {
    name: 'Hero (Large section header)',
    value: 'Hero'
  },
  {
    name: 'List (Items in a horizontal or vertical list)',
    value: 'List'
  },
  {
    name: 'Modal',
    value: 'Modal'
  },
  {
    name: 'Navigation',
    value: 'Navigation'
  },
  {
    name: 'Slider',
    value: 'Slider'
  },
  {
    name: 'Video',
    value: 'Video'
  },
  {
    name: 'Custom (Manually specify a category within the component name)',
    value: false
  },
  new inquirer.Separator()
]
