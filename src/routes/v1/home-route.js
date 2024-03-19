const express = require('express');
const router = express.Router();
const httpStatus = require('http-status');

router.get('/home', (req, res) => {
    res.status(httpStatus.OK).json({
        message:"Server is up and running!!!"
    })
})

module.exports = router;