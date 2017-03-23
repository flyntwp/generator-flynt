class <%= componentName %> extends window.HTMLDivElement {
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
    console.log('module <%= componentName %> connected', this)
  }
}

window.customElements.define('flynt-<%= componentNameKebab %>', <%= componentName %>, {extends: 'div'})
