class TonicAccordion extends Tonic { /* global Tonic */
  defaults () {
    return {
      multiple: false
    }
  }

  stylesheet () {
    return `
      tonic-accordion {
        display: block;
        border: 1px solid var(--tonic-border);
      }
    `
  }

  qs (s) {
    return this.root.querySelector(s)
  }

  qsa (s) {
    return [...this.root.querySelectorAll(s)]
  }

  click (e) {
    const trigger = Tonic.match(e.target, '.tonic--accordion-header')
    if (!trigger) return

    e.preventDefault()

    const allowMultiple = this.root.hasAttribute('data-allow-multiple')
    const isExpanded = trigger.getAttribute('aria-expanded') === 'true'

    if (!isExpanded && !allowMultiple) {
      const triggers = this.qsa('.tonic--accordion-header')
      const panels = this.qsa('.tonic--accordion-panel')

      triggers.forEach(trigger => {
        trigger.setAttribute('aria-expanded', 'false')
      })

      panels.forEach(panel => {
        panel.setAttribute('hidden', '')
      })
    }

    const id = trigger.getAttribute('aria-controls')

    if (isExpanded) {
      trigger.setAttribute('aria-expanded', 'false')
      const currentPanel = this.qs(`#${id}`)
      currentPanel.setAttribute('hidden', '')
    } else {
      trigger.setAttribute('aria-expanded', 'true')
      const currentPanel = this.qs(`#${id}`)
      currentPanel.removeAttribute('hidden')
    }
  }

  keydown (e) {
    const trigger = Tonic.match(e.target, 'button.title')
    if (!trigger) return

    const CTRL = e.ctrlKey
    const PAGEUP = e.code === 'PageUp'
    const PAGEDOWN = e.code === 'PageDown'
    const UPARROW = e.code === 'ArrowUp'
    const DOWNARROW = e.code === 'ArrowDown'
    const END = e.metaKey && e.code === 'ArrowDown'
    const HOME = e.metaKey && e.code === 'ArrowUp'

    const ctrlModifier = CTRL && (PAGEUP || PAGEDOWN)
    const triggers = this.qsa('button.title')

    if ((UPARROW || DOWNARROW) || ctrlModifier) {
      const index = triggers.indexOf(e.target)
      const direction = (PAGEDOWN || DOWNARROW) ? 1 : -1
      const length = triggers.length
      const newIndex = (index + length + direction) % length

      triggers[newIndex].focus()
      e.preventDefault()
    }

    if (HOME || END) {
      switch (e.key) {
        case HOME:
          triggers[0].focus()
          break
        case END:
          triggers[triggers.length - 1].focus()
          break
      }
      e.preventDefault()
    }
  }

  render () {
    const {
      multiple
    } = this.props

    if (multiple) this.root.setAttribute('data-allow-multiple', '')

    return this.html`
      ${this.childNodes}
    `
  }
}

Tonic.add(TonicAccordion)

class TonicAccordionSection extends Tonic {
  stylesheet () {
    return `
      tonic-accordion-section {
        display: block;
      }

      tonic-accordion-section:not(:last-of-type) {
        border-bottom: 1px solid var(--tonic-border);
      }

      tonic-accordion-section h4 {
        margin: 0;
      }

      tonic-accordion-section .tonic--accordion-header {
        display: flex;
      }

      tonic-accordion-section button {
        font-size: 14px;
        text-align: left;
        padding: 20px;
        position: relative;
        background: transparent;
        border: 0;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        outline: none;
        width: 100%;
      }

      tonic-accordion-section button:focus {
        outline: none;
      }

      tonic-accordion-section button:focus .tonic--label {
        border-bottom: 3px solid Highlight;
      }

      tonic-accordion-section [hidden] {
        display: none;
      }

      tonic-accordion-section .tonic--accordion-panel {
        padding: 10px 50px 20px 20px;
      }

      tonic-accordion-section .tonic--accordion-header .tonic--arrow {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 50px;
      }

      tonic-accordion-section .tonic--accordion-header .tonic--arrow:before {
        content: "";
        width: 8px;
        height: 8px;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translateY(-50%) translateX(-50%) rotate(135deg);
        -moz-transform: translateY(-50%) translateX(-50%) rotate(135deg);
        transform: translateY(-50%) translateX(-50%) rotate(135deg);
        border-top: 1px solid var(--tonic-primary);
        border-right: 1px solid var(--tonic-primary);
      }

      tonic-accordion-section .tonic--accordion-header[aria-expanded="true"] .tonic--arrow:before {
        -webkit-transform: translateY(-50%) translateX(-50%) rotate(315deg);
        -moz-transform: translateY(-50%) translateX(-50%) rotate(315deg);
        transform: translateY(-50%) translateX(-50%) rotate(315deg);
        margin-top: 3px;
      }
    `
  }

  render () {
    const {
      id,
      name,
      label
    } = this.props

    return this.html`
      <h4
        class="tonic--accordion-header"
        id="tonic--accordion-header-${id}"
        name="${name}"
        role="heading"
        aria-expanded="false"
        aria-controls="tonic--accordion-panel-${id}">
        <button class="tonic--title">
          <span class="tonic--label">${label}</span>
          <span class="tonic--arrow"></span>
        </button>
      </h4>
      <div
        class="tonic--accordion-panel"
        id="tonic--accordion-panel-${id}"
        aria-labelledby="tonic--accordion-header-${id}"
        role="region"
        hidden>
        ${this.childNodes}
      </div>
    `
  }
}

Tonic.add(TonicAccordionSection)