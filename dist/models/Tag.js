"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("core-js/modules/es.number.constructor.js");
var _mongoose = require("mongoose");
var tagSchema = new _mongoose.Schema({
  token: String,
  user: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  verses: [{
    chapter: Number,
    verse: Number
  }]
});
var _default = (0, _mongoose.model)('Tag', tagSchema);
exports["default"] = _default;