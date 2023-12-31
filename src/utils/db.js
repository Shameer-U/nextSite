import mongoose from "mongoose";

const connect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); 
    console.log(`MOngoDB connected; ${conn.connection.host}`);
  } catch (error) {
    console.log(`MongoDB connection error ${error}`)
    throw new Error("Connection failed!");
  }
};

export default connect;
