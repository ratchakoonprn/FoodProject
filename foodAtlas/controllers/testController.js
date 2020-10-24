const Test = require('./../models/testModel');

exports.getTest = async(req,res)=>{
    try{
        const test = await Test.find();
        res.status(200).json({
            status:'success',
            data:{test}
        });
    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}