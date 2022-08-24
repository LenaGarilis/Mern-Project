const express = require("express");
const app = express();
//Task: Add .env config here so later we can use it
require("dotenv").config();
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const cors = require("cors");
const indexRouter = require("./routes/index.js");

// connect DB
// task: ADD YOUR DB LINK FROM .env
mongoose
  .connect(process.env.DB_LINK)
  .then(() => {
    console.log("My Database is connected");
  })
  .catch((error) => console.log("DB is not connected"));

app.use(express.json()); // get file from req body

// Task: add cors settings here to remove cors authetication problem
app.use(cors());
// Task : add all API routes setup here

/**
 * task : Initial testing link.
 * Please remove this it test code if its okay
 * and add index.js router for landing page routes
 */
//add separate routes inside this file
app.use("/", indexRouter);

/**
 * task : create index, user, product routes inside routes folder
 * and import all of them here
 * e.g routes paths:
 * 1. app.get('/') landing page
 * 2. app.get('/user/add')
 * 3. app.get('/product/add')
 */

app.listen(PORT, () => {
  console.log(`The Server is running Successfully in ${PORT} .....`);
});
