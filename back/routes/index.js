const { Router } = require('express');
const googleAuthRoutes = require('./googleAuth');
const facebookAuthRoutes = require('./facebookAuth');
const apiRoutes = require('./api');

const router = Router();

router.use('/auth', googleAuthRoutes);
router.use('/auth', facebookAuthRoutes);
router.use('/api', apiRoutes);
// fallback 404
router.use('/api', (req, res) => res.status(404).json('No route for this path'));

module.exports = router;