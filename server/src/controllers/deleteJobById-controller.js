const postJobModel = require("../models/postJob-model");
const mongoDB = require("mongodb");

const deleteJobById = async(req, res) =>{
    const id = req.params.id;
    const filter = {_id: new mongoDB.ObjectId(id)}

    try{
        const result = await postJobModel.collection.deleteOne(filter);
        res.status(200).json({
            msg: "Job successfully deleted.",
            res: result,
        });
        
    }catch(err){
        res.status(500).json({
            msg: err
        });
    }
}

module.exports = { deleteJobById }