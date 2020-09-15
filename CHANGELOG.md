# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.4.0](https://github.com/flyntwp/generator-flynt/compare/v0.3.0...v0.4.0) (2020-09-15)


### Features

* **generators/component:** use Flynt v1.0.0 syntax ([8fcbd35](https://github.com/flyntwp/generator-flynt/commit/8fcbd353b30408d7a562685270dfae94c7ef53a9))

## [0.3.0](https://github.com/flyntwp/generator-flynt/compare/v0.2.1...v0.3.0) (2019-08-14)


### ⚠ BREAKING CHANGES

* **app:** not checking flynt json anymore since this doesn't exist anymore
* **app:** now relying on theme symlink for component creation

### Bug Fixes

* **generators/component:** add back png file copy ([b66688e](https://github.com/flyntwp/generator-flynt/commit/b66688e))
* **generators/component:** prevent linting errors ([8f1743b](https://github.com/flyntwp/generator-flynt/commit/8f1743b))
* **generators/component:** rename sass file ([fd02769](https://github.com/flyntwp/generator-flynt/commit/fd02769))
* **generators/component:** replace jpg restriction with png ([d66461c](https://github.com/flyntwp/generator-flynt/commit/d66461c))


### Features

* **app:** remove helpers and format scripts ([a4d0c07](https://github.com/flyntwp/generator-flynt/commit/a4d0c07))
* **app:** remove prompting for types ([f2edd0e](https://github.com/flyntwp/generator-flynt/commit/f2edd0e))
* **generator:** changed templates to new flynt stack ([892ebe2](https://github.com/flyntwp/generator-flynt/commit/892ebe2))
* **generators/component:** add back readme and screenshot ([bb05bd3](https://github.com/flyntwp/generator-flynt/commit/bb05bd3))
* **generators/component:** include best practices in template files ([db3b12d](https://github.com/flyntwp/generator-flynt/commit/db3b12d))
* **generators/component:** use new Api class to register fields ([bf895dd](https://github.com/flyntwp/generator-flynt/commit/bf895dd))

<a name="0.2.1"></a>
## [0.2.1](https://github.com/flyntwp/generator-flynt/compare/v0.2.0...v0.2.1) (2018-05-17)


### Bug Fixes

* **generators/component:** remove whitespace and alpha order stylus vars ([6539aa2](https://github.com/flyntwp/generator-flynt/commit/6539aa2))


### Features

* **generators/component:** move asset enqueuing into addComponentData ([c3ba7d0](https://github.com/flyntwp/generator-flynt/commit/c3ba7d0))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/flyntwp/generator-flynt/compare/v0.1.2...v0.2.0) (2018-03-19)


### Bug Fixes

* **generator/component:** update containerPadding variable name ([477d3ca](https://github.com/flyntwp/generator-flynt/commit/477d3ca))
* **generators/component:** use "component" instead of "module" in twig template ([49b0a08](https://github.com/flyntwp/generator-flynt/commit/49b0a08))
* **generators/component:** use correct names for rupture vars and remove unnecessary vars ([#22](https://github.com/flyntwp/generator-flynt/issues/22)) ([1311233](https://github.com/flyntwp/generator-flynt/commit/1311233))


### Features

* **generators/component:** add category name to readme automatically ([1b199c2](https://github.com/flyntwp/generator-flynt/commit/1b199c2))
* **generators/component:** add split pretty name variable ([9f0fb89](https://github.com/flyntwp/generator-flynt/commit/9f0fb89))



<a name="0.1.2"></a>
## [0.1.2](https://github.com/flyntwp/generator-flynt/compare/v0.1.1...v0.1.2) (2017-09-22)



<a name="0.1.1"></a>
## [0.1.1](https://github.com/flyntwp/generator-flynt/compare/v0.1.0...v0.1.1) (2017-08-29)


### Bug Fixes

* **generators:** validate flynt project before starting generators ([#18](https://github.com/flyntwp/generator-flynt/issues/18)) ([690728b](https://github.com/flyntwp/generator-flynt/commit/690728b))
* **generators/component:** update stylus template variables ([#14](https://github.com/flyntwp/generator-flynt/issues/14)) ([63fbf34](https://github.com/flyntwp/generator-flynt/commit/63fbf34))
* **generators/component:** validate component name before creating files ([#17](https://github.com/flyntwp/generator-flynt/issues/17)) ([3425408](https://github.com/flyntwp/generator-flynt/commit/3425408))
* **generators/feature:** validate feature name before creating files ([#19](https://github.com/flyntwp/generator-flynt/issues/19)) ([1ad050a](https://github.com/flyntwp/generator-flynt/commit/1ad050a))


### Features

* **generators/component:** add option for single file generation ([#16](https://github.com/flyntwp/generator-flynt/issues/16)) ([06ba04d](https://github.com/flyntwp/generator-flynt/commit/06ba04d))



<a name="0.1.0"></a>
# 0.1.0 (2017-06-09)


### Bug Fixes

* **generators/component:** correct wrong user input to upper case first letter ([22781d5](https://github.com/flyntwp/generator-flynt/commit/22781d5))
* **README:** Fixed installation notes ([049fe48](https://github.com/flyntwp/generator-flynt/commit/049fe48))


### Features

* **Generator:** Added README, SNIPPET and screenshot placeholder to templates ([dd4d62e](https://github.com/flyntwp/generator-flynt/commit/dd4d62e))
* **generators/component:** show error message on empty name, remove default value ([dc2ad19](https://github.com/flyntwp/generator-flynt/commit/dc2ad19))
* **generators/feature:** validate name, remove default value ([dc72763](https://github.com/flyntwp/generator-flynt/commit/dc72763))
* **Package.json:** Updated Version to 1.0.5 ([57d5585](https://github.com/flyntwp/generator-flynt/commit/57d5585))
* **PHP Template:** Added new Template for PHP Indentation ([8f6ba84](https://github.com/flyntwp/generator-flynt/commit/8f6ba84))
* **README:** Updated README ([e930c34](https://github.com/flyntwp/generator-flynt/commit/e930c34))
* **READMEs:** Updated READMEs to the latest README code standard ([15938e1](https://github.com/flyntwp/generator-flynt/commit/15938e1))
* **Style Template:** Added box-sizing to default stylus template ([99469e2](https://github.com/flyntwp/generator-flynt/commit/99469e2))
* **Yeoman Generator:** Initial Commit ([9256a6f](https://github.com/flyntwp/generator-flynt/commit/9256a6f))
