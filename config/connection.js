const { connect, connection } = require("mongoose");

// creates a connection string for connecting to the social network database
// will connect locally if there is no heroku link
const connectionString =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/socialNetworkDB";

connect(connectionString);

module.exports = connection;
