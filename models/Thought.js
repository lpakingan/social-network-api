const { Schema, model } = require("mongoose");
// use dayjs for formatting the date queries
const dayjs = require("dayjs");

// schema for the reactions that will be called in Thought model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => dayjs(date).format("MM/DD/YYYY"),
    },
  },
  {
    // include virtuals in the response
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => dayjs(date).format("MM/DD/YYYY"),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    // include virtuals in the response
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

// retrieves the length of the reaction array field on query
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// initializes the thought model
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
