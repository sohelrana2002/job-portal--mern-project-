const postJobModel = require("../models/postJob-model");

const postAJob = async (req, res) =>{
    try{
        const response = req.body;
        response.createAt  = new Date();
        const result = await postJobModel.collection.insertOne(response);
        if(result.insertedId){
            return res.status(200).json({
                msg: "Job posting successfully"
            });
        }else{
            return res.status(404).json({
                msg: "Can't posting the job"
            });
        }
    }catch(err){
        res.status(500).json({
            msg: err
        });
    }
}


module.exports = { postAJob }