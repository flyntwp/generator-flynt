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
    name: 'Calendar (A table for date related data)',
    value: 'Calendar'
  },
  {
    name: 'Document',
    value: 'Document'
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
    name: 'Layout (Contains different component areas)',
    value: 'Layout'
  },
  {
    name: 'List (Items in a horizontal or vertical list)',
    value: 'List'
  },
  {
    name: 'Map',
    value: 'Map'
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
    name: 'Sidebar',
    value: 'Sidebar'
  },
  {
    name: 'Slider',
    value: 'Slider'
  },
  {
    name: 'Table',
    value: 'Table'
  },
  {
    name: 'Tabs',
    value: 'Tabs'
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
