"use strict";

require("core-js/modules/es.number.constructor.js");
var _require = require('mongoose'),
  model = _require.model,
  Schema = _require.Schema;
var tagSchema = new Schema({
  token: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  verses: [{
    chapter: Number,
    verse: Number
  }]
});
module.exports = model('Tag', tagSchema);