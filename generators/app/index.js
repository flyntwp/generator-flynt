const Generator = require("yeoman-generator");
const yosay = require("yosay");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  default() {
    this.log(yosay("Welcome to the neat Flynt generator!"));
    this.composeWith(require.resolve("../component"));
  }
};
