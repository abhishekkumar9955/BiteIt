// server/routes/menuItemRoutes.js

const express = require('express');
const router = express.Router();
const menuItemController = require('../controllers/menuItemController');

router.post('/', menuItemController.createMenuItem);

module.exports = router;
