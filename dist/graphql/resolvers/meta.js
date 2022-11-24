"use strict";

var data = require('../../quranfiles/quran-data.json');
module.exports = {
  Query: {
    metadata: function metadata() {
      return {
        "suras": data.quran.suras.sura,
        "juzs": data.quran.juzs.juz,
        "hizbs": data.quran.hizbs.quarter,
        "manzils": data.quran.manzils.manzil,
        "rukus": data.quran.rukus.ruku,
        "pages": data.quran.pages.page,
        "sajdas": data.quran.sajdas.sajda
      };
    }
  }
  // Mutation: {

  // }
};