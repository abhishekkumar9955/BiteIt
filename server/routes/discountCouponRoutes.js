// server/routes/discountCouponRoutes.js

const express = require('express');
const router = express.Router();
const discountCouponController = require('../controllers/discountCouponController');

router.post('/', discountCouponController.createDiscountCoupon);

module.exports = router;
