const express = require("express");
const router = new express.Router();

const JobPortalCollection = require("../models/JobPortalCollections");


// =========read/get users data==========

router.get("/post-job", async(req, res) =>{
    try{
        const getJobs =  await JobPortalCollection.find();
        if(!getJobs){
            res.status(404).send();
        }else{
            res.status(201).send(getJobs);
        }
    }catch(err){
        res.status(404).send(err);
    }
});




module.exports = router;