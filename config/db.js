const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

// Attempt to connect to database using connection string/mongoURI from config folder
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log("Successfully connected to MongoDB database...");
  } catch (err) {
    console.log(err.message);

    // Exit connection process with failure code
    process.exit(1);
  }
};

module.exports = connectDB;
