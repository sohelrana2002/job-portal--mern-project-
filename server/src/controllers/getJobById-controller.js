const postJobModel = require("../models/postJob-model");

const getJobById = async (req, res) =>{
    try{
        // console.log(req.params.id);
        const result = await postJobModel.findById(req.params.id);
        res.status(200).json(result);
        // console.log("get jobs: ",result);
    }catch(err){
        res.status(500).json({
            msg: err
        });
    }
}


module.exports = { getJobById }