class <%= elementName %> extends window.HTMLDivElement {
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
    console.log('module <%= elementName %> connected', this)
  }
}

window.customElements.define('flynt-<%= elementNameKebab %>', <%= elementName %>, {extends: 'div'})
