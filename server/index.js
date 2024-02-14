// server/server.js

const express = require('express');
const connectDB = require('./utils/db');
const orderRoutes = require('./routes/orderRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');
const discountCouponRoutes = require('./routes/discountCouponRoutes');
// const { errorHandler } = require('./utils/errorHandler');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/orders', orderRoutes);
app.use('/api/menuItems', menuItemRoutes);
app.use('/api/discountCoupons', discountCouponRoutes);

// Error handler
// app.use(errorHandler);

// Connect to MongoDB
connectDB().then(() => {
  // Start the server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
