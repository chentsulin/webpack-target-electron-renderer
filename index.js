'use strict';

var webpack = require('webpack');
var JsonpTemplatePlugin = webpack.JsonpTemplatePlugin;
var FunctionModulePlugin = require('webpack/lib/FunctionModulePlugin');
var NodeTargetPlugin = require('webpack/lib/node/NodeTargetPlugin');
var ExternalsPlugin = webpack.ExternalsPlugin;
var LoaderTargetPlugin = webpack.LoaderTargetPlugin;

module.exports = function(options) {
  return function webpackTargetElectronRenderer(compiler) {
    compiler.apply(
      new JsonpTemplatePlugin(options.output),
      new FunctionModulePlugin(options.output),
      new NodeTargetPlugin(),
      new ExternalsPlugin('commonjs', [
        'desktop-capturer',
        'electron',
        'ipc',
        'ipc-renderer',
        'native-image',
        'remote',
        'web-frame',
        'clipboard',
        'crash-reporter',
        'screen',
        'shell'
      ]),
      new LoaderTargetPlugin(options.target)
    );
  };
};
