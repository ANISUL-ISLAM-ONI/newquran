"use strict";

require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/es.object.get-own-property-descriptors.js");
require("core-js/modules/es.object.define-properties.js");
require("core-js/modules/es.object.define-property.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var noteResolvers = require('./note');
var userResolvers = require('./user');
var versesbytagResolvers = require('./versesbytag');
var metaResolvers = require('./meta');
var textResolvers = require('./suratext');
var translatedsuratextResolver = require('./translatedsuratext');
var transliterationsuratextResolver = require('./transliterationsuratext');
module.exports = {
  Query: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, noteResolvers.Query), userResolvers.Query), versesbytagResolvers.Query), metaResolvers.Query), textResolvers.Query), translatedsuratextResolver.Query), transliterationsuratextResolver.Query),
  Mutation: _objectSpread(_objectSpread({}, noteResolvers.Mutation), userResolvers.Mutation)
};