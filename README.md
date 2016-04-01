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

## How this module works

There are some built-in webpack [build targets](http://webpack.github.io/docs/configuration.html#target), such as `'web'`, `'node'`, `'electron'`, includes some important modules and global variables resolving rules and templates for chunk and hot-update functionalities.

In electron, there are two different kinds of processes: `main` and `renderer`. `electron-main` is almost the same as node environment and just need to set all of [electron bulit-in modules](https://github.com/webpack/webpack/blob/3d5dc1a7bf8c7e44acb89d3f0c4b357df6a0ac0a/lib/WebpackOptionsApply.js#L122) as externals. However, `electron-renderer` is a little bit different, it's just like a mix environment between browser and node. So we need to provide a target using `JsonpTemplatePlugin`, `FunctionModulePlugin` for browser environment and `NodeTargetPlugin` and `ExternalsPlugin` for commonjs and electron bulit-in modules. 

Below is the code about how webpack apply target option:

```js
// webpack/WebpackOptionsApply.js

WebpackOptionsApply.prototype.process = function(options, compiler) {
  ...
  if(typeof options.target === "string") {
		switch(options.target) {
			case "web":
				...
			case "webworker":
				...
			case "node":
			case "async-node":
				...
			case "node-webkit":
				...
			case "atom":
			case "electron":
				...
			default:
				throw new Error("Unsupported target '" + options.target + "'.");
		}
	} else if(options.target !== false) {
		options.target(compiler);
	} else {
		throw new Error("Unsupported target '" + options.target + "'.");
	}
	...
}

```

As you can see, we can provide a function as target and then it will go into this `else if` branch:

```js
} else if(options.target !== false) {
  options.target(compiler);
} else {
```

That's it! This is the basic 
mechanism about how this module works.

[source node](https://github.com/chentsulin/webpack-target-electron-renderer/blob/master/index.js) is only 32 LoC now, so should not so hard to understand.



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

