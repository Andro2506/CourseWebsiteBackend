import { app } from "./app.js";
import {connectDB} from './config/database.js';
import cloudinary from 'cloudinary';
import Razorpay from 'razorpay';
import NodeCron from 'node-cron';
import { Stats } from "./models/stats.js";
import mongoose from "mongoose";
mongoose.set('strictQuery', true);

connectDB();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

NodeCron.schedule("0 0 0 1 * *", async()=>{
  try{
    await Stats.create({});
  }catch(error){
    console.log(error);
  }
})

app.listen(process.env.PORT, () => {
    console.log(
      `Server listening on port: ${process.env.PORT}`
    );
  });