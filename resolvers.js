import { characters, episodes, reviews, viewers } from "./db.js";

export const resolvers = {
  Query: {
    characters() {
      return characters;
    },
    character(parent, args) {
      return characters.find((ch) => ch.id === args.id);
    },
    episodes() {
      return episodes;
    },
    episode(parent, args) {
      return episodes.find((ep) => ep.id === args.id);
    },
    reviews() {
      return reviews;
    },
    review(parent, args) {
      return reviews.find((rev) => rev.id === args.id);
    },
    viewers() {
      return viewers;
    },
    viewer(parent, args) {
      return viewers.find((v) => v.id === args.id);
    },
  },

  Character: {
    episodes(parent) {
      return parent.episodes
        .map((epId) => episodes.find((ep) => ep.id === epId))
        .filter(Boolean); // Filter out null/undefined episodes to avoid errors
    },
  },

  Episode: {
    characters(parent) {
      return parent.characters
        .map((chId) => characters.find((ch) => ch.id === chId))
        .filter(Boolean);
    },
    reviews(parent) {
      return reviews.filter((rev) => rev.episodeId === parent.id);
    },
  },

  Review: {
    episode(parent) {
      return episodes.find((ep) => ep.id === parent.episodeId);
    },
    viewer(parent) {
      return viewers.find((v) => v.id === parent.viewerId);
    },
  },
};
