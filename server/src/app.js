const express = require("express");
require("./db/connection");
require("dotenv").config();
const port = process.env.PORT;
// const router = require("./routers/router");
const postJobRouter = require('./routers/postJob-router');
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
app.use("/api", postJobRouter);



app.listen(port, () =>{
    console.log(`Listen from port: ${port}`);
});