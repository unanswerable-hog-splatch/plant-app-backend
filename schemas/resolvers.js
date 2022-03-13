const { AuthenticationError } = require('apollo-server-express');
const { Gardener, Plant, Task } = require('../models')

const resolvers = {
  Query: {
    gardeners: async () => {
      return Gardener.find().populate('plants');
    },
    gardener: async (parent, { name }) => {
      return Gardener.findOne({ name }).populate('plants');
    },
    plants: async (parent, { name }) => {
      const params = name ? { name } : {};
      return Plant.find(params).sort({ createdAt: -1 });
    },
    plant: async (parent, { plantId }) => {
      return Thought.findOne({ _id: plantId });
    },
    // tasks: async (parent, { nickname }) => {
    //   const params = nickname ? { nickname } : {};
    //   return Task.find(params).sort({ createdAt: -1 });
    // },
    me: async (parent, args, context) => {
      if (context.user) {
        return Gardener.findOne({ _id: context.gardener._id }).populate('plants');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  
  Mutation: {
    addGardener: async (parent, { name, email, password }) => {
      const gardener = await Gardener.create({ name, email, password });
      const token = signToken(gardener);
      return { token, gardener };
    },
    login: async (parent, { email, password }) => {
      const gardener = await Gardener.findOne({ email });

      if (!gardener) {
        throw new AuthenticationError('No gardener with that email/password found in our garden!');
      }

      const correctPw = await gardener.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('No gardener with that email/password found in our garden!');
      }

      const token = signToken(gardener);

      return { token, gardener };
    },

    adoptPlant: async (parent, args, context) => {
      if (context.gardener) {
        const plant = await Plant.create({
          // plantType,
          // category,
          // nickname,
          // dateAdded,
          // fertilized,
          // tasks
          args
        });

        await Gardener.findOneAndUpdate(
          { _id: context.gardener._id },
          { $addToSet: { plants: plant._id } }
        );

        return plant;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    killPlant: async (parent, { plantId }, context) => {
      if (context.gardener) {
        const plant = await Plant.findOneAndDelete({
          _id: plantId,
        });
        await Gardener.findOneAndUpdate(
          { _id: context.gardener._id },
          { $pull: { plants: plant._id } }
        );
        return plant;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
    
  }


module.exports = resolvers;