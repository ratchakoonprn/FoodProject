const Restaurant = require('./../models/restaurantModel');
//api 5 ตัว
//get เรียกดูข้อมูลร้านอาหารทั้งหมดที่อยู่ใน database
exports.getAllRestaurant = async(req,res) => {
    try{
        const restaurants = await Restaurant.find();
        res.status(200).json({
            status:'success',
            results: restaurants.length,
            data:{restaurants}
        });
    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
//get
exports.getRestaurant = async(req,res) => {
    try{
        const restaurantId = parseInt(req.params.id);
        const restaurant = await Restaurant.findOne({id:restaurantId});
        if(restaurant){
            res.status(200).json({
                status:'success',
                data: {restaurant}
            });
        }else{
            res.status(404).json({
                status: 'fail',
                message: 'NO ID FOUND'
            });
        }
    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
//post
exports.createRestaurant = async(req,res) => {
    try{
        //const newRestaurant = await Restaurant.create(req.body);
        //เพิ่ม id ให้อัตโนมัติ
        let currentId = await Restaurant.find({}).sort({id:-1}).limit(1).then((lastId)=>{
            return lastId[0].id
        });
        currentId += 1;
        const createNewRes = {
            id: currentId,
            ...req.body
        };
        const newRestaurant = await Restaurant.create(createNewRes);
        res.status(201).json({
            status:'success',
            data:{restaurant: newRestaurant}
        });
    }catch(err){
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};
//put
exports.updateRestaurant = async(req,res) => {
    try{
        const resId = parseInt(req.params.id);
        const restaurant = await Restaurant.findOneAndUpdate(
            {id: resId},req.body,{new:true,runValidators:true}
        );
        if (restaurant){
            res.status(200).json({
                status:'success',
                data: {restaurant}
            });
        }else{
            res.status(404).json({
                status:'fail',
                message: 'NO ID FOUND'
            });
        }

    }catch(err){
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};
//delete
exports.deleteRestaurant = async(req,res) => {
    try{
        const resId  = parseInt(req.params.id);
        const restaurant = await Restaurant.findOneAndDelete(
            {id:resId}
        );
        if(restaurant){
            res.status(200).json({
                status:'success',
                data: null
            });
        }else{
            res.status(404).json({
                status:'fail',
                message: 'NO ID FOUND'
            });
        }

    }catch(err){
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};