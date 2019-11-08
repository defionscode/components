
    module.exports = Tonic => {
      
        //
        // ./src/badge/readme.js
        //
        if (document.body.dataset.page === 'examples') {
          const add = document.getElementById('add-notification')
const subtract = document.getElementById('subtract-notification')
const tonicBadge = document.querySelector('tonic-badge')

add.addEventListener('click', (e) => {
  tonicBadge.setState(state => ({
    ...state,
    count: ++state.count
  }))

  tonicBadge.reRender()
})

subtract.addEventListener('click', e => {
  tonicBadge.setState(state => {
    let count = state.count

    return {
      ...state,
      count: count > 0 ? --count : count
    }
  })

  tonicBadge.reRender()
})

        }
      

        //
        // ./src/button/readme.js
        //
        if (document.body.dataset.page === 'examples') {
          const button = document.getElementById('tonic-button-example')
button.addEventListener('click', e => {
  setTimeout(() => {
    button.loading(false)
  }, 3e3)
})

        }
      

        //
        // ./src/dialog/readme.js
        //
        if (document.body.dataset.page === 'examples') {
          class TonicDialog extends Tonic.Dialog { /* global Tonic */
  async click (e) {
    if (Tonic.match(e.target, 'tonic-button')) {
      this.state.message = Date.now()
      this.reRender()
    }
  }

  body () {
    return `
      <header>Dialog</header>
      <main>
        ${this.state.message || 'Ready'}
      </main>
      <footer>
        <tonic-button id="update">Update</tonic-button>
      </footer>
    `
  }

  loading () {
    this.state.loaded = true

    return `
      <h3>Loading...</h3>
    `
  }

  async * render () {
    if (!this.state.loaded) {
      yield this.loading()
    }

    return this.body()
  }
}

Tonic.add(TonicDialog)

const link = document.getElementById('example-dialog-link')
const dialog = document.getElementById('example-dialog')

link.addEventListener('click', e => dialog.show())

        }
      

        //
        // ./src/input/readme.js
        //
        if (document.body.dataset.page === 'examples') {
          const input = document.getElementById('tonic-input-example')
const span = document.getElementById('tonic-input-state')

const listener = e => {
  const state = input.getState()
  span.textContent = `Value: "${state.value || 'Empty'}", Focus: ${state.focus}`
}

input.addEventListener('input', listener)
input.addEventListener('blur', listener)
input.addEventListener('focus', listener)

        }
      

        //
        // ./src/panel/readme.js
        //
        if (document.body.dataset.page === 'examples') {
          const fetch = require('node-fetch')

class TonicPanel extends Tonic.Panel { /* global Tonic */
  async getArticle (title) {
    try {
      const res = await fetch(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=${title}&origin=*`)
      return Object.values((await res.json()).query.pages)[0]
    } catch (err) {
      return { title: 'Error', extract: err.message }
    }
  }

  async click (e) {
    if (e.target.value === 'close') {
      return this.hide()
    }

    if (e.target.value === 'get') {
      const page = await this.getArticle('HTML')

      this.reRender(props => ({
        ...props,
        ...page
      }))
    }
  }

  async * render () {
    return `
      <div class="tonic--header">Panel Example</div>
      <div class="tonic--main">
        <h3>${this.props.title || 'Hello'}
        <p>${this.props.extract || 'Click "get" to fetch the content from Wikipedia.'}</p>
      </div>
      <div class="tonic--footer">
        <tonic-button value="close">Close</tonic-button>
        <tonic-button value="get" async="true">Get</tonic-button>
      </div>
    `
  }
}

Tonic.add(TonicPanel)

//
// For this example, a button element will trigger the
// `.show()` method on the panel when it is clicked.
//
const panelLink = document.getElementById('content-panel-link-example')
const panel = document.getElementById('content-panel-example')

panelLink.addEventListener('click', e => panel.show())

        }
      

        //
        // ./src/profile-image/readme.js
        //
        if (document.body.dataset.page === 'examples') {
          const profile = document.getElementById('profile-image-example-editable')

profile.addEventListener('change', e => console.log(e.data))
profile.addEventListener('error', e => console.log(e.message))

        }
      

        //
        // ./src/progress-bar/readme.js
        //
        if (document.body.dataset.page === 'examples') {
          let percentage = 0
let interval = null

const progressBar = document.getElementById('progress-bar-example')

document.getElementById('start-progress').addEventListener('click', e => {
  clearInterval(interval)
  interval = setInterval(() => {
    progressBar.setProgress(percentage++)
    if (progressBar.value >= 100) percentage = 0
  }, 128)
})

document.getElementById('stop-progress').addEventListener('click', e => {
  clearInterval(interval)
})

        }
      

        //
        // ./src/router/readme.js
        //
        if (document.body.dataset.page === 'examples') {
          const select = document.getElementById('tonic-router-select')
const page2 = document.getElementById('page2')

select.addEventListener('change', e => {
  window.history.pushState({}, '', select.value)
})

page2.addEventListener('match', () => {
  const { number } = page2.getState()
  const el = document.getElementById('page2-number')
  el.textContent = number
})

        }
      

        //
        // ./src/select/readme.js
        //
        if (document.body.dataset.page === 'examples') {
          const select = document.getElementById('options-example-1')
const notification = document.getElementsByTagName('tonic-toaster')[0]

select.addEventListener('change', ({ target }) => {
  notification.create({
    type: 'success',
    message: `Selected option was "${select.value}".`,
    title: 'Selection',
    duration: 2000
  })
})

        }
      

        //
        // ./src/toaster/readme.js
        //
        if (document.body.dataset.page === 'examples') {
          const notification = document.querySelector('tonic-toaster')

document
  .getElementById('tonic-toaster-example')
  .addEventListener('click', e => notification.create({
    type: 'success',
    title: 'Greetings',
    message: 'Hello, World'
  }))

        }
      

        //
        // ./src/toaster-inline/readme.js
        //
        if (document.body.dataset.page === 'examples') {
          const toaster1 = document.getElementById('toaster-1')
const toasterLink1 = document.getElementById('toaster-link-1')

toasterLink1.addEventListener('click', e => toaster1.show())

        }
      

        //
        // ./src/windowed/readme.js
        //
        if (document.body.dataset.page === 'examples') {
          class TonicWindowed extends Tonic.Windowed { /* global Tonic */
  async click (e) {
    const row = Tonic.match(e.target, '[data-id]')

    if (row) {
      console.log(await this.getRow(+row.dataset.id))
    }
  }

  updateRow (row, index, element) {
    element.setAttribute('data-updated', true)
    return element
  }

  renderRow (row, index) {
    return `
      <div class="tr" data-id="${row.id}">
        <div class="td">${row.title}</div>
        <div class="td">${row.date}</div>
        <div class="td">${row.random}</div>
      </div>
    `
  }

  render () {
    return `
      <div class="th">
        <div class="td">Title</div>
        <div class="td">Date</div>
        <div class="td">Random</div>
      </div>
      ${super.render()}
    `
  }
}

Tonic.add(TonicWindowed)

//
// This demo generates the data after you click the overlay instead of
// on page load since 500K rows of data can take a few seconds to create.
//
const windowed = document.getElementsByTagName('tonic-windowed')[0]
const overlay = document.getElementById('click-to-load')

overlay.addEventListener('click', e => {
  const rows = []

  for (let i = 1; i < 500001; i++) {
    rows.push({
      id: i - 1,
      title: `Row #${i}`,
      date: String(new Date()),
      random: Math.random().toString(16).slice(2)
    })
  }

  overlay.classList.add('hidden')
  windowed.load(rows)
})

        }
      
    }
  