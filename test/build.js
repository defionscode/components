const fs = require('fs')
const path = require('path')

const root = `${__dirname}/src/`

const paths = fs
  .readdirSync(root)
  .filter(f => f !== 'index.js')

const sections = paths
  .map(f => '      ' + fs.readFileSync(path.join(root, f, 'index.html'), 'utf8'))
  .join('\n')

const index = `
  <!DOCTYPE html>
    <head>
      <title>Tonic - Component Based Architecture</title>
      <link href="index.css" rel="stylesheet">
      <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
      <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96">
      <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="120x120">
      <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="128x128">
      <link rel="apple-touch-icon" type="image/png" href="favicon-152x152.png" sizes="152x152">
      <link rel="apple-touch-icon" type="image/png" href="favicon-167x167.png" sizes="167x167">
      <link rel="apple-touch-icon" type="image/png" href="favicon-180x180.png" sizes="180x180">
      <meta http-equiv="Content-Type" charset="utf-8" content="text/html">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1 user-scalable=no">
      <meta name="description" content="Component Based Architecture">
      <meta property="og:site_name", content="ConductorLab">
      <meta property="og:title", content="Tonic Components">
      <meta property="og:description" content="Component Based Architecture">
      <meta property="og:type", content="website">
      <meta property="og:url", content="https://hxoht.github.io/components">
      <meta property="og:image", content="https://hxoht.github.io/components/tonic_preview.png">
      <meta name="twitter:card", content="summary">
      <meta name="twitter:site", content="@conductorlab">
      <meta name="twitter:image", content="https://hxoht.github.io/components/tonic_preview.png">
      <meta
        http-equiv="Content-Security-Policy"
        content="
          default-src 'self';
          font-src 'self' https:;
          img-src 'self' http: https: data:;
          style-src 'self' 'unsafe-inline' https:;
          script-src 'self' 'nonce-U29tZSBzdXBlciBzZWNyZXQ=';
          connect-src 'self' https:;">
    </head>
    <body data-page="test" id="test">
      <main>
        ${sections}
      </main>
      <script nonce="U29tZSBzdXBlciBzZWNyZXQ=" crossorigin="anonymous" src="bundle.js"></script>
      <script src="bundle.js"></script>
    </body>
  </html>
`

fs.writeFileSync(path.join(__dirname, 'build', 'index.html'), index)
