const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    const dbName = conn.connection.name; // ✅ This returns the DB name
    console.log(`MongoDB connected to database: ${dbName}`);
  } catch (error) {
    console.error("Connection failed", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
