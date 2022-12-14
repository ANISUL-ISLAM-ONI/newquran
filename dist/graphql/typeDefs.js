"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = "#graphql\n\ntype Sura {\n\tayas: Int\n\tstart: Int\n\tname: String\n\ttname: String\n\tename: String\n\ttype: String\n\torder: Int\n\trukus: Int\n}\ntype Flag {\n    sura: Int\n    aya: Int\n}\ntype Sajda {\n    sura: Int\n    aya: Int\n    type: String\n}\ntype Meta {\n    suras: [Sura]\n    juzs: [Flag]\n    hizbs: [Flag]\n    manzils: [Flag]\n    rukus: [Flag]\n    pages: [Flag]\n    sajdas: [Sajda]\n}\ntype Ayatext {\n    text: String\n}\ntype Suratext {\n    name: String\n    aya: [Ayatext]\n}\ntype Verse {\n    chapter: Int\n    verse: Int\n}\ntype Tag {\n    token: String\n    verses: [Verse]\n}\ntype Note {\n    chapter: Int\n    verse: Int\n    texts: [String]\n    tags: [Tag]\n}\ntype User {\n    username: String\n    firstname: String\n    lastname: String\n    email: String\n    isstaff: Boolean\n}\ntype Query {\n    notes(chapter: Int, verse: Int, username: String): [Note]\n    versesbytag(token: String!, username: String): [Verse]\n    user(username: String!): User\n    metadata: Meta\n    suratext(type: String): [Suratext]\n    translatedsuratext(type: String): [Suratext]\n    transliterationsuratext(type: String): [Suratext]\n}\ntype Mutation {\n    createNote(chapter: Int, verse: Int, text: String!, username: String!): Note\n    createUser(username: String, firstname: String, lastname: String, email: String, isstaff: Boolean) : User\n}\n";
exports["default"] = _default;