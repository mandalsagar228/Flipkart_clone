import mongoose from "mongoose";

const Connection = async (username, password) => {
  URL = `mongodb+srv://${username}:${password}@flipkartclone.ijk6zj8.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log(
      "Getting error while connecting to the database",
      error.message
    );
  }
};

export default Connection;
