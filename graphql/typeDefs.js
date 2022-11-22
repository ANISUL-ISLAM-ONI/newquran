const { gql } = require('apollo-server');

module.exports = gql`
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
    versebytag(token: String!, username: String): [Verse]
    user(username: String!): User
}
type Mutation {
    createNote(chapter: Int, verse: Int, text: String!, username: String!): Note
    createUser(username: String, firstname: String, lastname: String, email: String, isstaff: Boolean) : User
}
`;