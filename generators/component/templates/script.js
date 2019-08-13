import $ from 'jquery'

class <%= nameUpperCamelCase %> extends window.HTMLDivElement {
  constructor (...args) {
    const self = super(...args)
    self.init()
    return self
  }

  init () {
    this.$ = $(this)
    this.props = this.getInitialProps()
    this.state = this.getInitialState()
    this.resolveElements()
    this.bindFunctions()
    this.bindEvents()
  }

  getInitialProps () {
    let data = {}
    // try {
    //   data = JSON.parse($('script[type="application/json"]', this).text())
    // } catch (e) {}
    return data
  }

  getInitialState () {
    return {}
  }

  resolveElements () {
  }

  bindFunctions () {
  }

  bindEvents () {
  }

  connectedCallback () {
  }
}

window.customElements.define('flynt-<%= nameKebabCase %>', <%= nameUpperCamelCase %>, { extends: 'div' })
