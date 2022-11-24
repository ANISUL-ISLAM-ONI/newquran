"use strict";

require("core-js/modules/es.number.constructor.js");
var _require = require('mongoose'),
  model = _require.model,
  Schema = _require.Schema;
var noteSchema = new Schema({
  chapter: Number,
  verse: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  texts: [String],
  tags: [{
    type: Schema.Types.ObjectId,
    ref: 'Tag'
  }]
});
module.exports = model('Note', noteSchema);