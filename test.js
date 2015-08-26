'use strict';

var expect = require('chai').expect;
var spy = require('sinon').spy;
var webpackTargetElectronRenderer = require('./');
var webpack = require('webpack');
var JsonpTemplatePlugin = webpack.JsonpTemplatePlugin;
var FunctionModulePlugin = require('webpack/lib/FunctionModulePlugin');
var NodeTargetPlugin = require('webpack/lib/node/NodeTargetPlugin');
var ExternalsPlugin = webpack.ExternalsPlugin;
var LoaderTargetPlugin = webpack.LoaderTargetPlugin;


it('should return a function', function() {
  expect(webpackTargetElectronRenderer({})).to.be.a('function');
});

it('should apply plugins to compiler', function() {
  var _apply = spy();
  var compiler = {
    apply: _apply
  };

  webpackTargetElectronRenderer({
    output: {}
  })(compiler);

  expect(_apply.args[0][0]).to.be.an.instanceof(JsonpTemplatePlugin);
  expect(_apply.args[0][1]).to.be.an.instanceof(FunctionModulePlugin);
  expect(_apply.args[0][2]).to.be.an.instanceof(NodeTargetPlugin);
  expect(_apply.args[0][3]).to.be.an.instanceof(ExternalsPlugin);
  expect(_apply.args[0][4]).to.be.an.instanceof(LoaderTargetPlugin);
});
