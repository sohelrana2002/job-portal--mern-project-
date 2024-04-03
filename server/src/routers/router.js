// const express = require("express");
// const router = new express.Router();
// const postJob = require("../models/postJob-model");


// // ===========post user data============
// router.post("/post-job", async (req, res) =>{
//     try{
//         const body = req.body;
//         body.createAt = new Date();
//         // console.log(body);
//         const result = await postJob.insertOne(body);
//         if(!result.insertedId){
//             res.status(404).send({
//                 message: "try again"
//             });
//         }else{
//             res.status(201).send(result);
//         }
//     }catch(err){
//         res.status(404).send({
//             message: "try again try"
//         });
//     }
// })

// // =========read/get users data==========
// router.get("/all-jobs", async(req, res) =>{
//     try{
//         const getAllJobs =  await JobPortalCollection.find({}).toArray();
//         if(!getAllJobs){
//             res.status(404).send();
//         }else{
//             res.status(201).send(getAllJobs);
//         }
//     }catch(err){
//         res.status(404).send(err);
//     }
// });



// module.exports = router;