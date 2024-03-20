const { AirplaneRepository } = require("../repositories");

const airplaneRepositoy = new AirplaneRepository();


async function createAirplane(data){
    try{
        const airplaneCreated = await airplaneRepositoy.create(data);
        return airplaneCreated;
    }catch(err){
        console.log(err);
        throw err;
    }
} 


async function getAllAirplane(){
    try{
        const allAirplanes = await airplaneRepositoy.getAll();
        return allAirplanes;
    }catch(err){
        console.log(err);
        throw err;
    }
}

async function getAirplaneDetails(data){
    try{
        const airplaneInfo = await airplaneRepositoy.get(data);
        return airplaneInfo;
    }catch(err){
        throw err;
    }
}


module.exports = {
    createAirplane,
    getAllAirplane,
    getAirplaneDetails
}