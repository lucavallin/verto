import { dbErrors } from "lib/errors";
import { connect, connection } from "mongoose";

export const connectDB = async () => {
  try {
    if (connection) return connection;

    const uri = process.env.MONGO_URI as string;

    if (!uri || uri.length === 0) throw new Error(dbErrors.missing_uri);
    connect(uri);

    console.log(`MongoDB is up and running`);
  } catch (err) {
    console.error("Couldn't connect to MongodB: ", err);
  }
};
