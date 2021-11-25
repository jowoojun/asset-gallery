const express = require('express');

const router = express.Router();

const usersRoutes = require('./user');
const newsRoutes = require('./news');
const creatorRoutes = require('./creator');
const analystRoutes = require('./analyst');

router.use('/user', usersRoutes);
router.use('/news', newsRoutes);
router.use('/creator', creatorRoutes);
router.use('/analyst', analystRoutes);

module.exports = router;