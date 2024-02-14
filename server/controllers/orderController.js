// server/controllers/orderController.js

const Order = require('../models/Order');

// Controller to create a new order
exports.createOrder = async (req, res) => {
  try {
    const { items, total } = req.body;
    const order = new Order({ items, total });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};
