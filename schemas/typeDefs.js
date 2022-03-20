const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Gardener {
    _id: ID!
    name: String!
    email: String!
    password: String!
    plantCount: Int
    plants: [Plant]!
  }

  type Plant {
    _id: ID
    species: String
    plantIcon: String
    category: String
    nickname: String
    dateAdded: Int
    watered: Boolean
    fertilized: Boolean
    waterFrequency: Int
    fertilizeFrequency: Int
    lastWaterDate: Int
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
    plant(_id: ID!): Plant
    me: Gardener
  }

  type Mutation {
    addGardener(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    adoptPlant( species: String!, plantIcon: String!, category: String!, nickname: String, watered: Boolean!, fertilized: Boolean, waterFrequency: Int!, fertilizeFrequency: Int, lastWaterDate: Int!, lastFertilizeDate: Int): Plant
    killPlant(_id: ID!): Plant
    updatePlant( _id: ID!, waterFrequency: Int, lastWaterDate: Int, watered: Boolean, fertilized: Boolean): Plant
  }
`;

module.exports = typeDefs;