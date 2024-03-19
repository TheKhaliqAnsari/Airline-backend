const homeRoute = require('./home-route');
const router = require('express').Router();


router.use('/api', homeRoute);


module.exports = router;
