class <%= nameUpperCamelCase %> extends window.HTMLDivElement {
  constructor (self) {
    self = super(self)
    self.$ = $(self)
    self.resolveElements()
    return self
  }

  resolveElements () {
    this.$element = $('.element', this)
  }

  connectedCallback () {
    console.log('module <%= namePretty %> connected', this)
  }
}

window.customElements.define('flynt-<%= nameKebabCase %>', <%= nameUpperCamelCase %>, {extends: 'div'})
