"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("core-js/modules/es.number.constructor.js");
var _mongoose = require("mongoose");
var noteSchema = new _mongoose.Schema({
  chapter: Number,
  verse: Number,
  user: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  texts: [String],
  tags: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Tag'
  }]
});
var _default = (0, _mongoose.model)('Note', noteSchema);
exports["default"] = _default;