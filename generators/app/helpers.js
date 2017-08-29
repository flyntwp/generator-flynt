const _ = require('lodash')

module.exports = {
  checkValidFlyntDirectory: function (generator) {
    const dest = generator.destinationPath()
    if (!generator.fs.exists('.flynt.json')) {
      generator.log('Please make sure to run this generator in a valid Flynt project.')
      generator.env.error('.flynt.json not found!');
    }
  },
  getThemePath: function (generator) {
    // read theme name from .flynt.json
    const config = generator.fs.readJSON(generator.destinationPath('.flynt.json'))
    if (_.isEmpty(config) || _.isEmpty(config.themeName)) {
      generator.env.error('Theme name not found in .flynt.json!');
    }
    return generator.destinationPath(`web/app/themes/${config.themeName}/`)
  }
}
