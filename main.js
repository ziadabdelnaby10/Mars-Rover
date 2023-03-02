
//unit test
//ififif
// const content = document.getElementById("main-content")

//Just normal function that checks condition and return true or false
const Rover = require('./Rover');
const RoverTrip = require('./RoverTrip');
const Position = require('./Position');
const Obstacles = require('./Obstacles');

const command = "FLFFFFRFLB";
const obstaclesData = [[1, 4], [3, 5], [7, 4]]
const obstacle = new Obstacles(obstaclesData);
const position = new Position(0, 0, 1, 1);
const rover = new Rover(position);
const roverTrip = new RoverTrip(rover, obstacle);
console.log(roverTrip.beginTrip(command));