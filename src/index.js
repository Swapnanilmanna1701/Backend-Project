
import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
    path: './.env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`App is listen on ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MongoDB connection is failed!!", err);
});



 











/*
import express from "express";
const app = express();

function connectdb(){} // this is an another approach to connect db
connectdb()
(async () => {
  try {
    await mongoose.connect(`$(process.env.MONGODB_URI)/${DB_NAME}`);
    app.on("error", () => {
      console.log("Error: ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listen on ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
})();
*/

