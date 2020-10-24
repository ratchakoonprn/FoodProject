const express = require('express');
const router = express.Router();

const testController = require('./../controllers/testController');
//เรียกใช้ api
router
.route('/')
.get(testController.getTest);

module.exports = router;