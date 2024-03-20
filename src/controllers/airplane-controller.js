const {airplaneService} = require('../services/index')
const httpStatus = require('http-status');


async function createAirplane(req, res){
    try{
        const {capacity, modelNumber} = req.body;
        const response = await airplaneService.createAirplane({modelNumber, capacity});
        return res.status(httpStatus.CREATED).json({
            success: true, 
            message: "Successfully created an airplane",
            data: response,
            error: {}
        })
    }catch(err){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            success: false, 
            message: "Error while creating an airplane",
            data: {},
            error: err
        })
    }
}

async function getAllFlights(req, res) {
    try{
        const flightInfo = await airplaneService.getAllAirplane();
        return res.status(httpStatus.OK).json({
            success: true, 
            message: "Successfully retrived flights data.",
            data: flightInfo,
            error: {}
        })

    }catch(err){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            success: false, 
            message: "Error while retriving data.",
            data: {},
            error: err
        })
    }
}


module.exports = {
    createAirplane,
    getAllFlights
}