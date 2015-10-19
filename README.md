# webpack-target-electron-renderer

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david_img]][david_site]

> webpack target function for electron renderer


## Install

```
$ npm install webpack-target-electron-renderer
```


## Usage

```js
var webpackTargetElectronRenderer = require('webpack-target-electron-renderer');

var options = {
  entry: entry,
  output: output,
  module: {
    loaders: loaders
  },
  devtool: opts.devtool,
  resolve: {
    extensions: extensions,
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
  }
}

options.target = webpackTargetElectronRenderer(options)

```

See also [electron-react-boilerplate](https://github.com/chentsulin/electron-react-boilerplate/blob/master/webpack.config.development.js).


## API

### webpackTargetElectronRenderer(options)

#### options

*Required*
Type: `object`

just like the object that you used to export by `webpack.config.js`.


## License

MIT © [C.T. Lin](http://webpack-target-electron-renderer)

[npm-image]: https://badge.fury.io/js/webpack-target-electron-renderer.svg
[npm-url]: https://npmjs.org/package/webpack-target-electron-renderer
[travis-image]: https://travis-ci.org/chentsulin/webpack-target-electron-renderer.svg
[travis-url]: https://travis-ci.org/chentsulin/webpack-target-electron-renderer
[coveralls-image]: https://coveralls.io/repos/chentsulin/webpack-target-electron-renderer/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/r/chentsulin/webpack-target-electron-renderer?branch=master
[david_img]: https://david-dm.org/chentsulin/webpack-target-electron-renderer.svg
[david_site]: https://david-dm.org/chentsulin/webpack-target-electron-renderer

