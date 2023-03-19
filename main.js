
//unit test
//ififif
// const content = document.getElementById("main-content")

//Just normal function that checks condition and return true or false
const Rover = require('./Rover');
const RoverTrip = require('./RoverTrip');
const RoverTripV2 = require('./RoverTripV2');
const Position = require('./Position');
const Obstacles = require('./Obstacles');

// const command = "FLFFFFRFLB";
const obstaclesData = [[1, 4], [3, 5], [7, 4]]
const obstacle = new Obstacles(obstaclesData);
const position = new Position(0, 0, 1, 1);
const rover = new Rover(position);
const roverTrip = new RoverTrip(rover , obstacle);
// const roverTrip = new RoverTripV2(obstacle, rover, 3,6);

roverTrip.beginTrip("FFFLFFFFLFRFFRF");
// roverTrip.findValidPaths();

//max (x obstc)
// [
//     [0,0,0,0,0,0,0],
//     [0,0,0,0,1,0,0],
//     [0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,x],
// ]