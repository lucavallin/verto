import mongoose from "mongoose";

import { getMongoUri } from "lib/env";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { connection: null, promise: null };
}

const connect = async (): Promise<mongoose.Mongoose> => {
  if (cached.connection) return cached.connection;

  const uri = getMongoUri();

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(uri, {
        bufferCommands: false,
      })
      .then(() => mongoose);
  }
  cached.connection = await cached.promise;

  console.log(`MongoDB is up and running`);
  return cached.connection;
};

const disconnect = async () => {
  await mongoose.disconnect();
};

const db = { connect, disconnect };
export default db;
