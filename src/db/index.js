import mongoose from 'mongoose';
import {DB_NAME} from '../constants.js';

async function connectDB() {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`MongoDB connected!! DB Host: ${connectionInstance.connection.host}`); // check this on console
  } catch(e) {
    console.log("MongoDB Connection Failed: ", e);
    process.exit(1); // read about this in documentation
  }
}

export default connectDB;