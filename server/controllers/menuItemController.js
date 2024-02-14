// server/controllers/menuItemController.js

const MenuItem = require('../models/MenuItem');

// Controller to create a new menu item
exports.createMenuItem = async (req, res) => {
  try {
    const { name, price, category, description } = req.body;
    const menuItem = new MenuItem({ name, price, category, description });
    await menuItem.save();
    res.status(201).json(menuItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};
