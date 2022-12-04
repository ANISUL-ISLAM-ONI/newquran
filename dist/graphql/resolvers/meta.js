"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _qurandata = _interopRequireDefault(require("../../quranfiles/qurandata.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = {
  Query: {
    metadata: function metadata() {
      return {
        "suras": _qurandata["default"].quran.suras.sura,
        "juzs": _qurandata["default"].quran.juzs.juz,
        "hizbs": _qurandata["default"].quran.hizbs.quarter,
        "manzils": _qurandata["default"].quran.manzils.manzil,
        "rukus": _qurandata["default"].quran.rukus.ruku,
        "pages": _qurandata["default"].quran.pages.page,
        "sajdas": _qurandata["default"].quran.sajdas.sajda
      };
    }
  }
  // Mutation: {

  // }
};
exports["default"] = _default;