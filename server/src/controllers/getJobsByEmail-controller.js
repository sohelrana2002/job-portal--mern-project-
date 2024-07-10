const postJobModel = require("../models/postJob-model");

const getJobByEmail = async (req, res) =>{
    // console.log(req.params.email, "req.params.email");
    try {
        const result = await postJobModel.find({email: req.params.email});

        res.status(200).json({
            status: "success",
            length: result.length,
            jobsByEmail: result
        });
        // console.log(result);
    } catch (error) {
        res.status(500).json({
            msg: error
        })
    }
}

module.exports = { getJobByEmail }