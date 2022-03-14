const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Gardener {
    name: String!
    email: String!
    password: String!
    plants: [Plant]
  }

  type Plant {
    plantType: String!
    category: String!
    nickname: String
    dateAdded: Int!
    watered: Boolean!
    fertilized: Boolean
    waterFrequency: Int!
    fertilizeFrequency: Int
    lastWaterDate: Int!
    lastFertilizeDate: Int
  }

  type Auth {
    token: ID!
    gardener: Gardener
  }

  type Query {
    gardeners: [Gardener]
    gardener(name: String!): Gardener
    plants(name: String): [Plant]
    plant(plantId: ID!): Plant
    me: Gardener
  }

  type Mutation {
    addGardener(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    adoptPlant(plant: plantInput!): Gardener
    killPlant(_id: ID!): Plant
  }

  input plantInput {
    plantType: String!
    category: String!
    nickname: String
    dateAdded: Int!
    watered: Boolean!
    fertilized: Boolean
    waterFrequency: Int!
    fertilizeFrequency: Int
    lastWaterDate: Int!
    lastFertilizeDate: Int
  }
`;

module.exports = typeDefs;