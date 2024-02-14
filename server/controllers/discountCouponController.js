// server/controllers/discountCouponController.js

const DiscountCoupon = require('../models/DiscountCoupon');

// Controller to create a new discount coupon
exports.createDiscountCoupon = async (req, res) => {
  try {
    const { code, discountPercentage, expiresAt } = req.body;
    const discountCoupon = new DiscountCoupon({ code, discountPercentage, expiresAt });
    await discountCoupon.save();
    res.status(201).json(discountCoupon);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};
