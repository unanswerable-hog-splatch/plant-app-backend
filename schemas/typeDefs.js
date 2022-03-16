const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Gardener {
    _id: ID!
    name: String!
    email: String!
    password: String!
    plants: [Plant]
  }

  type Plant {
    _id: ID
    plantType: String
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
    plant(plantId: ID!): Plant
    me: Gardener
  }

  type Mutation {
    addGardener(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    adoptPlant( plantType: String!, plantIcon: String!, category: String!, nickname: String, dateAdded: Int!, watered: Boolean!, fertilized: Boolean, waterFrequency: Int!, fertilizeFrequency: Int, lastWaterDate: Int!, lastFertilizeDate: Int): Gardener
    killPlant(_id: ID!): Plant
    updateFrequency(_id: ID!, waterFrequency: Int!): Plant
    updateWaterDate(_id: ID!, lastWaterDate: Int!): Plant
  }

`;


// input plantInput {
//   gardenerId: ID
//   plantType: String
//   category: String
//   nickname: String
//   dateAdded: Int
//   watered: Boolean
//   fertilized: Boolean
//   waterFrequency: Int
//   fertilizeFrequency: Int
//   lastWaterDate: Int
//   lastFertilizeDate: Int
// }

module.exports = typeDefs;