import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "dotenv";
import ErrorMiddleware from "./middlewares/Error.js";

config({
    path: "./config/config.env",
  });


export const app = express();


// Using Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({
  extended: true,
}));
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
}))


app.get("/", (req, res) => {
    res.send(`<h1>Site is working properly. Click <a href=${process.env.FRONTEND_URL}>here</a> to visit frontend.</h1>`);
  });

// importing & using routes
import course from './routes/courseRoutes.js';
import user from './routes/userRoutes.js';
import payment from './routes/paymentRoutes.js';
import other from './routes/otherRoutes.js';

app.use("/api/v1", course);
app.use("/api/v1", user);
app.use("/api/v1", payment);
app.use("/api/v1", other);



app.use(ErrorMiddleware);