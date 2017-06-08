class <%= name %> extends window.HTMLDivElement {
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
    console.log('module <%= name %> connected', this)
  }
}

window.customElements.define('flynt-<%= nameKebab %>', <%= name %>, {extends: 'div'})
