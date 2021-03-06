// Default inline toaster
const toasterInlineDefault = document.getElementById('tonic-toasterinline-default')
const toasterInlineDefaultButton = document.getElementById('tonic-toasterinline-default-button')

toasterInlineDefaultButton.addEventListener('click', e => {
  toasterInlineDefault.create()
})

// Inline toaster w/ id
const toasterInlineId = document.getElementById('tonic-toasterinline-id')
const toasterInlineIdButton = document.getElementById('tonic-toasterinline-id-button')

toasterInlineIdButton.addEventListener('click', e => {
  toasterInlineId.create()
})

// Inline toaster w/ name
const toasterInlineName = document.getElementById('tonic-toasterinline-name')
const toasterInlineNameButton = document.getElementById('tonic-toasterinline-name-button')

toasterInlineNameButton.addEventListener('click', e => {
  toasterInlineName.create()
})

// Inline toaster w/ title
const toasterInlineTitle = document.getElementById('tonic-toasterinline-title')
const toasterInlineTitleButton = document.getElementById('tonic-toasterinline-title-button')

toasterInlineTitleButton.addEventListener('click', e => {
  toasterInlineTitle.create({
    title: 'Once upon a time'
  })
})

// Inline toaster w/ inline title
const toasterInlineInlineTitle = document.getElementById('tonic-toasterinline-inline-title')
const toasterInlineInlineTitleButton = document.getElementById('tonic-toasterinline-inline-title-button')

toasterInlineInlineTitleButton.addEventListener('click', e => {
  toasterInlineInlineTitle.create()
})

// Inline toaster w/ message
const toasterInlineMessage = document.getElementById('tonic-toasterinline-message')
const toasterInlineMessageButton = document.getElementById('tonic-toasterinline-message-button')

toasterInlineMessageButton.addEventListener('click', e => {
  toasterInlineMessage.create({
    message: 'I am a message!'
  })
})

// Inline toaster w/ title & message
const toasterInlineTitleMessage = document.getElementById('tonic-toasterinline-title-message')
const toasterInlineTitleMessageButton = document.getElementById('tonic-toasterinline-title-message-button')

toasterInlineTitleMessageButton.addEventListener('click', e => {
  toasterInlineTitleMessage.create({
    title: 'Hello',
    message: 'How are you doing today?'
  })
})

// Inline toaster w/ type success
const toasterInlineSuccess = document.getElementById('tonic-toasterinline-type-success')
const toasterInlineSuccessButton = document.getElementById('tonic-toasterinline-type-success-button')

toasterInlineSuccessButton.addEventListener('click', e => {
  toasterInlineSuccess.create({
    type: 'success'
  })
})

// Inline toaster w/ type warning
const toasterInlineWarning = document.getElementById('tonic-toasterinline-type-warning')
const toasterInlineWarningButton = document.getElementById('tonic-toasterinline-type-warning-button')

toasterInlineWarningButton.addEventListener('click', e => {
  toasterInlineWarning.create({
    type: 'warning'
  })
})

// Inline toaster w/ type danger
const toasterInlineDanger = document.getElementById('tonic-toasterinline-type-danger')
const toasterInlineDangerButton = document.getElementById('tonic-toasterinline-type-danger-button')

toasterInlineDangerButton.addEventListener('click', e => {
  toasterInlineDanger.create({
    type: 'danger'
  })
})

// Inline toaster w/ type info
const toasterInlineInfo = document.getElementById('tonic-toasterinline-type-info')
const toasterInlineInfoButton = document.getElementById('tonic-toasterinline-type-info-button')

toasterInlineInfoButton.addEventListener('click', e => {
  toasterInlineInfo.create({
    type: 'info'
  })
})

// Inline toaster w/ type & title
const toasterInlineTypeTitle = document.getElementById('tonic-toasterinline-type-title')
const toasterInlineTypeTitleButton = document.getElementById('tonic-toasterinline-type-title-button')

toasterInlineTypeTitleButton.addEventListener('click', e => {
  toasterInlineTypeTitle.create({
    dismiss: false,
    type: 'info',
    title: 'For your information'
  })
})

// Inline toaster w/ type & message
const toasterInlineTypeMessage = document.getElementById('tonic-toasterinline-type-message')
const toasterInlineTypeMessageButton = document.getElementById('tonic-toasterinline-type-message-button')

toasterInlineTypeMessageButton.addEventListener('click', e => {
  toasterInlineTypeMessage.create({
    type: 'success',
    message: 'You are truly a success!'
  })
})

// Inline toaster w/ type & title & message
const toasterInlineTypeTitleMessage = document.getElementById('tonic-toasterinline-type-title-message')
const toasterInlineTypeTitleMessageButton = document.getElementById('tonic-toasterinline-type-title-message-button')

toasterInlineTypeTitleMessageButton.addEventListener('click', e => {
  toasterInlineTypeTitleMessage.create({
    type: 'danger',
    title: 'Watch out',
    message: 'You are in serious danger'
  })
})

// Inline toaster w/ duration
const toasterInlineDuration = document.getElementById('tonic-toasterinline-duration')
const toasterInlineDurationButton = document.getElementById('tonic-toasterinline-duration-button')

toasterInlineDurationButton.addEventListener('click', e => {
  toasterInlineDuration.create({
    duration: 3e3,
    message: 'Duration 3 seconds'
  })
})

// Inline toaster w/out duration
const toasterInlineNoDuration = document.getElementById('tonic-toasterinline-no-duration')
const toasterInlineNoDurationButton = document.getElementById('tonic-toasterinline-no-duration-button')

toasterInlineNoDurationButton.addEventListener('click', e => {
  toasterInlineNoDuration.create({
    message: 'No Duration'
  })
})

// Inline toaster w/ dismiss w/ duration
const toasterInlineDismissDuration = document.getElementById('tonic-toasterinline-dismiss-duration')
const toasterInlineDismissDurationButton = document.getElementById('tonic-toasterinline-dismiss-duration-button')

toasterInlineDismissDurationButton.addEventListener('click', e => {
  toasterInlineDismissDuration.create({
    dismiss: true,
    duration: 3e3,
    message: 'Dismiss me or I will disappear!'
  })
})

// Inline toaster w/out dismiss w/ duration
const toasterInlineNoDismissDuration = document.getElementById('tonic-toasterinline-no-dismiss-duration')
const toasterInlineNoDismissDurationButton = document.getElementById('tonic-toasterinline-no-dismiss-duration-button')

toasterInlineNoDismissDurationButton.addEventListener('click', e => {
  toasterInlineNoDismissDuration.create({
    dismiss: false,
    duration: 3e3,
    message: 'I will disappear when I am ready!'
  })
})

// Inline toaster w/ theme light
const toasterInlineThemeLight = document.getElementById('tonic-toasterinline-theme-light')
const toasterInlineThemeLightButton = document.getElementById('tonic-toasterinline-theme-light-button')

toasterInlineThemeLightButton.addEventListener('click', e => {
  toasterInlineThemeLight.create({
    theme: 'light',
    message: 'I am a light theme'
  })
})

// Inline toaster w/ theme dark
const toasterInlineThemeDark = document.getElementById('tonic-toasterinline-theme-dark')
const toasterInlineThemeDarkButton = document.getElementById('tonic-toasterinline-theme-dark-button')

toasterInlineThemeDarkButton.addEventListener('click', e => {
  toasterInlineThemeDark.create({
    theme: 'dark',
    message: 'I am a dark theme'
  })
})

// Inline toaster w/ all js attributes
const toasterInlineJs = document.getElementById('tonic-toasterinline-js')
const toasterInlineJsButton = document.getElementById('tonic-toasterinline-js-button')

toasterInlineJsButton.addEventListener('click', e => {
  toasterInlineJs.create({
    title: 'I am the title',
    message: 'This is the message',
    type: 'danger',
    dismiss: false,
    duration: 3e3,
    theme: 'dark'
  })
})
