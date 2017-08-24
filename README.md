btcjs
=======

A pure and powerful JavaScript Bitcoin library.

## Development & Tests

```sh
git clone https://github.com/braydonf/btcjs
cd btcjs
npm install
```

Run all the tests:

```sh
gulp test
```

You can also run just the Node.js tests with `gulp test:node`, just the browser tests with `gulp test:browser`
or create a test coverage report (you can open `coverage/lcov-report/index.html` to visualize it) with `gulp coverage`.

## Building the Browser Bundle

To build a btcjs full bundle for the browser:

```sh
gulp browser
```

This will generate files named `btc.js` and `btc.min.js`.

## License

Code released under [the MIT license](https://github.com/braydonf/btcjs/blob/master/LICENSE).

Copyright 2017 Braydon Fuller

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
