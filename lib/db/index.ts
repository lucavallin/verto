import { dbErrors } from "lib/errors";
import mongoose from "mongoose";

const uri = process.env.MONGO_URI as string;

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { connection: null, promise: null };
}

const connect = async () => {
  try {
    if (cached.connection) return cached.connection;

    if (!uri || uri.length === 0) throw new Error(dbErrors.missing_uri);
    if (!cached.promise) {
      cached.promise = mongoose
        .connect(uri, {
          bufferCommands: false
        })
        .then(() => mongoose);
    }
    cached.connection = await cached.promise;

    console.log(`MongoDB is up and running`);
    return cached.connection;
  } catch (err) {
    console.error("Couldn't connect to MongodB: ", err);
  }
};

const disconnect = async () => {
  await mongoose.disconnect();
};

const db = { connect, disconnect };
export default db;
