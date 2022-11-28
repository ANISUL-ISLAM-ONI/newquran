module.exports = `#graphql

type Sura {
	ayas: Int
	start: Int
	name: String
	tname: String
	ename: String
	type: String
	order: Int
	rukus: Int
}
type Flag {
    sura: Int
    aya: Int
}
type Sajda {
    sura: Int
    aya: Int
    type: String
}
type Meta {
    suras: [Sura]
    juzs: [Flag]
    hizbs: [Flag]
    manzils: [Flag]
    rukus: [Flag]
    pages: [Flag]
    sajdas: [Sajda]
}
type Ayatext {
    text: String
}
type Suratext {
    name: String
    aya: [Ayatext]
}
type Verse {
    chapter: Int
    verse: Int
}
type Tag {
    token: String
    verses: [Verse]
}
type Note {
    chapter: Int
    verse: Int
    texts: [String]
    tags: [Tag]
}
type User {
    username: String
    firstname: String
    lastname: String
    email: String
    isstaff: Boolean
}
type Query {
    notes(chapter: Int, verse: Int, username: String): [Note]
    versesbytag(token: String!, username: String): [Verse]
    user(username: String!): User
    metadata: Meta
    suratext(type: String): [Suratext]
    translatedsuratext(type: String): [Suratext]
    transliterationsuratext(type: String): [Suratext]
}
type Mutation {
    createNote(chapter: Int, verse: Int, text: String!, username: String!): Note
    createUser(username: String, firstname: String, lastname: String, email: String, isstaff: Boolean) : User
}
`;
