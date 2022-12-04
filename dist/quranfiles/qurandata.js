"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var raw = _fs["default"].readFileSync('./src/quranfiles/quran-data.json');
var _default = JSON.parse(raw);
exports["default"] = _default;