const homeRoute = require('./home-route');
const airplaneRoute =require('./airplane-route');
const router = require('express').Router();


router.use('/v1', homeRoute);
router.use('/v1', airplaneRoute);


module.exports = router;
