# Browser Builds
btcjs works in the browser, thanks to [browserify](http://browserify.org/).

The easiest and recommended way to use them, is via [Bower](http://bower.io/), a browser package manager, and get the release bundles. For example, when building an app that uses `btcjs`, you do:

```sh
bower install btcjs
```

You can also use a `bower.json` file to store the dependencies of your project:

```json
{
  "name": "Your app name",
  "version": "0.0.1",
  "license": "MIT",
  "dependencies": {
    "btcjs": "^1.0.0-beta",
  }
}
```

and run `bower install` to install the dependencies.

After this, you can include the bundled release versions in your HTML file:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <script src="bower_components/btc/btc.min.js"></script>
</head>

<body>

  <script type="text/javascript">
    var btc = require('btcjs');
    // etc...
  </script>

</body>

</html>
```
