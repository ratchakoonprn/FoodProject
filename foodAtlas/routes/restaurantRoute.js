const express = require('express');
const router = express.Router();

const restaurantController = require('./../controllers/restaurantController');

//เรียกใช้ api
router
.route('/')
.get(restaurantController.getAllRestaurant)
.post(restaurantController.createRestaurant);

router
.route('/:id')
.get(restaurantController.getRestaurant)
.put(restaurantController.updateRestaurant)
.delete(restaurantController.deleteRestaurant);

module.exports = router;