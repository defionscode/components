const Tonic = require('@optoolco/tonic')

class TonicRange extends Tonic {
  defaults () {
    return {
      width: '250px',
      disabled: false,
      min: '0',
      max: '100',
      value: '50'
    }
  }

  get value () {
    return this.state.value
  }

  set value (value) {
    this.querySelector('input').value = value
    this.setValue(value)
  }

  setValue (value) {
    const min = this.props.min
    const max = this.props.max

    const input = this.querySelector('input')

    if (this.props.label) {
      const label = this.querySelector('label')
      label.textContent = this.getLabelValue(value)
    }

    input.style.backgroundSize = (value - min) * 100 / (max - min) + '% 100%'

    this.setState(state => Object.assign({}, state, { value }))
  }

  input (e) {
    this.setValue(e.target.value || this.props.value)
  }

  stylesheet () {
    return `
      tonic-range  {
        position: relative;
        display: -webkit-flex;
        display: flex;
        height: 50px;
        padding: 20px 0;
      }

      tonic-range label {
        font: 13px var(--tonic-subheader);
        letter-spacing: 1px;
        text-align: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
      }

      tonic-range input[type="range"] {
        margin: auto;
        padding: 0;
        width: 50%;
        height: 4px;
        background-color: var(--tonic-background);
        background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, var(--tonic-accent)), color-stop(100%, var(--tonic-accent)));
        background-image: -webkit-linear-gradient(var(--tonic-accent), var(--tonic-accent));
        background-image: -moz-linear-gradient(var(--tonic-accent), var(--tonic-accent));
        background-image: -o-linear-gradient(var(--tonic-accent), var(--tonic-accent));
        background-image: linear-gradient(var(--tonic-accent), var(--tonic-accent));
        background-size: 50% 100%;
        background-repeat: no-repeat;
        border-radius: 0;
        cursor: pointer;
        -webkit-appearance: none;
      }

      tonic-range input[type="range"]:disabled {
        background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, var(--tonic-border)), color-stop(100%, var(--tonic-border)));
        background-image: -webkit-linear-gradient(var(--tonic-border), var(--tonic-border));
        background-image: -moz-linear-gradient(var(--tonic-border), var(--tonic-border));
        background-image: -o-linear-gradient(var(--tonic-border), var(--tonic-border));
        background-image: linear-gradient(var(--tonic-border), var(--tonic-border));
      }

      tonic-range input[type="range"]::-webkit-slider-runnable-track {
        box-shadow: none;
        border: none;
        background: transparent;
        -webkit-appearance: none;
      }

      tonic-range input[type="range"]::-moz-range-track {
        box-shadow: none;
        border: none;
        background: transparent;
      }

      tonic-range input[type="range"]::-moz-focus-outer {
        border: 0;
      }

      tonic-range input[type="range"]::-webkit-slider-thumb {
        width: 18px;
        height: 18px;
        border: 0;
        background: #fff;
        border-radius: 100%;
        box-shadow: 0 0 3px 0px rgba(0,0,0,0.25);
        -webkit-appearance: none;
      }

      tonic-range input[type="range"]::-moz-range-thumb {
        width: 18px;
        height: 18px;
        border: 0;
        background: #fff;
        border-radius: 100%;
        box-shadow: 0 0 1px 0px rgba(0,0,0,0.1);
      }
    `
  }

  getLabelValue (value) {
    if (this.setLabel) {
      return this.setLabel(value)
    } else if (this.props.label) {
      return this.props.label.replace(/%\w/, value)
    } else {
      return value
    }
  }

  renderLabel () {
    if (!this.props.label) return ''
    const value = this.props.value
    return `<label>${this.getLabelValue(value)}</label>`
  }

  styles () {
    const {
      width
    } = this.props

    return {
      width: {
        width
      }
    }
  }

  connected () {
    this.setValue(this.state.value)
  }

  render () {
    if (!this.props.id) {
      console.warn('In tonic the "id" attribute is used to persist state')
      console.warn('You forgot to supply the "id" attribute.')
      console.warn('')
      console.warn('For element : ')
      console.warn(`${this.outerHTML}`)
      throw new Error('id attribute is mandatory on tonic-range')
    }

    const {
      width,
      height,
      disabled,
      theme,
      min,
      max,
      step,
      id,
      tabindex
    } = this.props

    const disabledAttr = disabled && disabled === 'true' ? 'disabled="true"' : ''
    const minAttr = min ? `min="${min}"` : ''
    const maxAttr = max ? `max="${max}"` : ''
    const stepAttr = step ? `step="${step}"` : ''

    if (width) this.style.width = width
    if (height) this.style.width = height
    if (theme) this.classList.add(`tonic--theme--${theme}`)
    if (tabindex) this.removeAttribute('tabindex')

    const value = this.props.value || this.state.value
    const valueAttr = value && value !== 'undefined' ? `value="${value}"` : ''
    const tabAttr = tabindex ? `tabindex="${tabindex}"` : ''

    this.setState(state => Object.assign({}, state, { value }))

    const attributes = [
      valueAttr,
      minAttr,
      maxAttr,
      stepAttr,
      disabledAttr,
      tabAttr
    ].join(' ')

    return `
      ${this.renderLabel()}
      <div class="tonic--wrapper" styles="width">
        <input type="range" styles="width" id="${id}" ${attributes}/>
      </div>
    `
  }
}

module.exports = { TonicRange }
