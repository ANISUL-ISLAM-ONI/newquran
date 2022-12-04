"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var BASE = './src/quranfiles/texts/';
var quran_simple_clean = BASE + 'quran-simple-clean.json';
var quran_simple_min = BASE + 'quran-simple-min.json';
var quran_simple_plain = BASE + 'quran-simple-plain.json';
var quran_simple = BASE + 'quran-simple.json';
var quran_uthmani_min = BASE + 'quran-uthmani-min.json';
var quran_uthmani = BASE + 'quran-uthmani.json';
var _default = {
  'simple': quran_simple,
  'simple clean': quran_simple_clean,
  'simple min': quran_simple_min,
  'simple plain': quran_simple_plain,
  'uthmani': quran_uthmani,
  'uthmani min': quran_uthmani_min
};
exports["default"] = _default;