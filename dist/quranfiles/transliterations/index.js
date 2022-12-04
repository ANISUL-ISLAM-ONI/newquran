"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var BASE = './src/quranfiles/transliterations/';
var en_transliteration = BASE + 'en.transliteration.json';
var tr_transliteration = BASE + 'tr.transliteration.json';
var _default = {
  'English : English Transliteration': en_transliteration,
  'Turkish : Muhammet Abay': tr_transliteration
};
exports["default"] = _default;