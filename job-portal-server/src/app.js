const express = require("express");
require("./db/connection");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5000;

// ====middleware===
app.use(express.json());
app.use(cors());


app.get('/', (req, res) =>{
    res.send("Hello developer");
})


app.listen(port, "192.168.0.110", () =>{
    console.log(`Listen from port: ${port}`);
});