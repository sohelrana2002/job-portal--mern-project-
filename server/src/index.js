const express = require("express");
require("./db/connection");
require("dotenv").config();
const port = process.env.PORT;
const authRouter = require("./routers/auth-router");
const postJobRouter = require('./routers/postJob-router');
const getAllJobsRouter = require("./routers/getAllJobs-router");
const getJobByIdRouter = require("./routers/getJobById-router");
const getJobByEmailRouter = require("./routers/getJobByEmail-router");
const cors = require('cors');
const app = express();

var corsOptions = {
    origin: 'http://localhost:5173',
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
    // optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
// ====middleware===
app.use(express.json());
app.use("/api/auth", authRouter);
app.use(
  "/api",
  postJobRouter,
  getAllJobsRouter,
  getJobByIdRouter,
  getJobByEmailRouter
);
// app.use("/api", getAllJobsRouter);



app.listen(port, () =>{
    console.log(`Listen from port: ${port}`);
});