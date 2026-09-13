const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://svivek908_db_user:puZDA98WrPXhAwgg@nodejs.dhgvs49.mongodb.net/devTinder",
  );
};

module.exports = connectDB;
