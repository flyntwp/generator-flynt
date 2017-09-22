import $ from 'jquery'

class <%= nameUpperCamelCase %> extends window.HTMLDivElement {
  constructor (self) {
    self = super(self)
    self.$ = $(self)
    self.resolveElements()
    return self
  }

  resolveElements () {
  }

  connectedCallback () {
  }
}

window.customElements.define('flynt-<%= nameKebabCase %>', <%= nameUpperCamelCase %>, {extends: 'div'})
