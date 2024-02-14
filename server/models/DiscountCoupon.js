// server/models/DiscountCoupon.js

const mongoose = require('mongoose');

const discountCouponSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true
  },
  discountPercentage: {
    type: Number,
    required: true
  },
  expiresAt: {
    type: Date,
    required: true
  }
});

const DiscountCoupon = mongoose.model('DiscountCoupon', discountCouponSchema);

module.exports = DiscountCoupon;
