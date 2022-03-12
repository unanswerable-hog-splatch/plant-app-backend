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
    dateAdded: Date!
    fertilized: Boolean
    tasks: [Task]!
  }

  type Task {
    _id: ID
    task: String!
    frequency: Number!
    taskStartDate: String!
  }
`;

module.exports = typeDefs;