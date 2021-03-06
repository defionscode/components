class TonicDialog extends Tonic.Dialog {
  click (e) {
    if (!Tonic.match(e.target, '#update')) return

    this.reRender(props => ({
      ...props,
      message: `Date stamp ${Date.now()}`
    }))
  }

  render () {
    return `
      <header>Dialog</header>
      <main>
        ${this.props.message}
      </main>
      <footer>
        <tonic-button id="update">Update</tonic-button>
      </footer>
    `
  }
}

Tonic.add(TonicDialog)

const link = document.getElementById('example-dialog-link')
const dialog = document.getElementById('example-dialog')

link.addEventListener('click', e => dialog.show())
