"use strict";

var _require = require('mongoose'),
  model = _require.model,
  Schema = _require.Schema;
var userSchema = new Schema({
  username: String,
  firstname: String,
  lastname: String,
  email: String,
  isstaff: Boolean
});
module.exports = model('User', userSchema);