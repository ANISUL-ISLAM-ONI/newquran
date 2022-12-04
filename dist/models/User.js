"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var userSchema = new _mongoose.Schema({
  username: String,
  firstname: String,
  lastname: String,
  email: String,
  isstaff: Boolean
});
var _default = (0, _mongoose.model)('User', userSchema);
exports["default"] = _default;