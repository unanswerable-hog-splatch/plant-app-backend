const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Gardener {
    _id: ID
    name: String!
    email: String!
    password: String!
    plants: [Plant]!
  }

  type Plant {
    _id: ID
    plantType: String!
    category: String!
    nickname: String
    dateAdded: Int!
    fertilized: Boolean
    tasks: [Task]!
  }

  type Task {
    _id: ID
    task: String!
    frequency: Int!
    taskStartDate: String!
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
    adoptPlant(thoughtText: String!): Plant
    killPlant(plantId: ID!): Plant
  }
`;

module.exports = typeDefs;