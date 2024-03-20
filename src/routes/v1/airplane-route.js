const router = require('express').Router();
const {airplaneController} = require('../../controllers')

router.post('/flights', airplaneController.createAirplane)
router.get('/flights',airplaneController.getAllFlights);

module.exports = router;