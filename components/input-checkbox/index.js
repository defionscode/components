const Tonic = typeof require === 'function'
  ? require('tonic') : window.Tonic

class InputCheckbox extends Tonic {
  constructor () {
    super()
    this.stylesheet = `
      `
  }

  render () {
    return `
      <div class="wrapper">
        <input type="checkbox"/>
      </div>
    `
  }
}

Tonic.add(InputCheckbox, { shadow: true })
