const Tonic = require('@optoolco/tonic')
const tape = require('tape')
const { qs } = require('qs')

class ComponentContainer extends Tonic {
  click () {
    this.reRender()
  }

  render () {
    return this.html`
      ${this.childNodes}
    `
  }
}

Tonic.add(ComponentContainer)

tape('{{tabs-3}} has correct default state', t => {
  const container = qs('component-container')

  t.ok(container, 'rendered')
  t.end()
})
