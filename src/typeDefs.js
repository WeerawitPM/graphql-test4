import { gql } from 'apollo-server';

export const typeDefs = gql`

  type Query {
    getMovies: [Movie!]!,
    getMovie(id: ID!): Movie!
  }

  type Mutation {
    createMovie(title: String!, rating: Float!, year: Int!): Movie!,
    deleteMovie(id: ID!): DeleteMovie!,
    updateMovie(id: ID!, input: UpdateMovie!): Movie!
  }

  type Movie {
    _id: ID!
    title: String!
    rating: Float!
    year: Int!
  }

  input DeleteMovie {
    id: ID!
  }

  type DeleteMovie {
    _id: ID!
  }

  input UpdateMovie {
    title: String!
    rating: Float!
    year: Int!
  }

`;
