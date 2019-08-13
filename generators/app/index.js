const Generator = require("yeoman-generator");
const yosay = require("yosay");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  prompting() {
    this.log(yosay("Welcome to the neat Flynt generator!"));

    return this.prompt([
      {
        type: "list",
        name: "type",
        message: "What kind of Flynt content do you want to generate?",
        choices: [
          {
            name: "Component",
            value: "component",
          },
        ],
      },
    ]).then(answers => {
      this.createType = answers.type;
    });
  }

  default() {
    if (this.createType === "component") {
      this.composeWith(require.resolve("../component"));
    }
  }
};
