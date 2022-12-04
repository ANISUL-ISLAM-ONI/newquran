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
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("core-js/modules/es.object.define-property.js");
var _note = _interopRequireDefault(require("./note.js"));
var _user = _interopRequireDefault(require("./user.js"));
var _versesbytag = _interopRequireDefault(require("./versesbytag.js"));
var _meta = _interopRequireDefault(require("./meta.js"));
var _suratext = _interopRequireDefault(require("./suratext.js"));
var _translatedsuratext = _interopRequireDefault(require("./translatedsuratext.js"));
var _transliterationsuratext = _interopRequireDefault(require("./transliterationsuratext.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var _default = {
  Query: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _note["default"].Query), _user["default"].Query), _versesbytag["default"].Query), _meta["default"].Query), _suratext["default"].Query), _translatedsuratext["default"].Query), _transliterationsuratext["default"].Query),
  Mutation: _objectSpread(_objectSpread({}, _note["default"].Mutation), _user["default"].Mutation)
};
exports["default"] = _default;