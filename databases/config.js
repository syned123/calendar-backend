const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mern_calendar");
    console.log("DB Online");
  } catch (error) {
    console.log(error);
    throw new Error("error en la conexion");
  }
};

module.exports = {
  dbConnection,
};
  