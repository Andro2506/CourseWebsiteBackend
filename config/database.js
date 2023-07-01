import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      throw new Error("MongoDB connection URI is missing. Make sure to set the MONGO_URI environment variable.");
    }

    const options = {
      dbName: "CourseWebsite",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    const { connection } = await mongoose.connect(uri, options);

    console.log(`Server connected to database ${connection.host}`);
  } catch (error) {
    console.log("Some Error Occurred", error);
    process.exit(1);
  }
};
