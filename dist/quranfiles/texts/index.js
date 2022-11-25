"use strict";

var quran_simple_clean = require('./quran-simple-clean.json');
var quran_simple_min = require('./quran-simple-min.json');
var quran_simple_plain = require('./quran-simple-plain.json');
var quran_simple = require('./quran-simple.json');
var quran_uthmani_min = require('./quran-uthmani-min.json');
var quran_uthmani = require('./quran-uthmani.json');
module.exports = {
  'simple': quran_simple,
  'simple clean': quran_simple_clean,
  'simple min': quran_simple_min,
  'simple plain': quran_simple_plain,
  'uthmani': quran_uthmani,
  'uthmani min': quran_uthmani_min
};