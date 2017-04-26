module.exports = [{
  type: 'list',
  name: 'elementCategory',
  message: 'What category does your new component fit best?',
  choices: [
    {
      name: 'Accordion (A accordion component)',
      value: 'Accordion'
    },
    {
      name: 'Block (A block component without any further specification)',
      value: 'Block'
    },
    {
      name: 'Calendar (A table component for date related data)',
      value: 'Calendar'
    },
    {
      name: 'Document (A HTML document component)',
      value: 'Document'
    },
    {
      name: 'Form (A form component)',
      value: 'Form'
    },
    {
      name: 'Grid (A grid component with a specific count of items on one row)',
      value: 'Grid'
    },
    {
      name: 'Hero (A hero component for large section headers)',
      value: 'Hero'
    },
    {
      name: 'Layout (A flynt layout component which contains different component areas)',
      value: 'Layout'
    },
    {
      name: 'List (A list component for items with flexible widths in a horizontal or vertical list)',
      value: 'List'
    },
    {
      name: 'Map (A map component)',
      value: 'Map'
    },
    {
      name: 'Modal (A modal component)',
      value: 'Modal'
    },
    {
      name: 'Navigation (A navigation component)',
      value: 'Navigation'
    },
    {
      name: 'Sidebar (A sidebar component)',
      value: 'Sidebar'
    },
    {
      name: 'Slider (A slider component)',
      value: 'Slider'
    },
    {
      name: 'Table (A table component)',
      value: 'Tabs'
    },
    {
      name: 'Tabs (A tabbed component)',
      value: 'Tabs'
    },
    {
      name: 'Video (A Video component)',
      value: 'Video'
    },
    {
      name: 'Other (Define a Category by yourself inside the ComponentName)',
      value: false
    },
    {
      name: ' ',
      value: false
    },
    {
      name: '--------------',
      value: false
    },
    {
      name: ' ',
      value: false
    }
  ]
}, {
  type: 'input',
  name: 'elementName',
  message: 'The new components name in upper camelcase',
  default: 'Component'
}, {
  type: 'checkbox',
  name: 'files',
  message: 'What kind of files do you want to generate?',
  choices: [
    {
      name: 'Markup (index.twig)',
      value: 'index.twig',
      checked: true
    },
    {
      name: 'Styling (style.styl)',
      value: 'style.styl',
      checked: true
    },
    {
      name: 'Script (script.js)',
      value: 'script.js',
      checked: false
    },
    {
      name: 'Functions (functions.php)',
      value: 'functions.php',
      checked: false
    },
    {
      name: 'Fields (fields.json)',
      value: 'fields.json',
      checked: false
    }
  ]
}]
