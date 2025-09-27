export const typeDefs = `#graphql
type Character {
  id: ID!
  name: String!
  role: String!
  abilities: [String!]!
  episodes: [Episode!]!
}

type Episode {
  id: ID!
  title: String!
  description: String!
  airDate: String!
  characters: [Character!]!
  reviews: [Review!]!
}

type Review {
  id: ID!
  rating: Int!
  content: String!
  episode: Episode!
  viewer: Viewer!
}

type Viewer {
  id: ID!
  name: String!
  favoriteCharacter: String!
  verified: Boolean!
}

type Query {
  characters: [Character!]!
  character(id: ID!): Character

  episodes: [Episode!]!
  episode(id: ID!): Episode

  reviews: [Review!]!
  review(id: ID!): Review

  viewers: [Viewer!]!
  viewer(id: ID!): Viewer
}
`;
