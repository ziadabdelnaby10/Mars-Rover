const Obstacles = require('./Obstacles')
const Position = require('./Position')
const Rover = require('./Rover')
const RoverTrip = require('./RoverTrip')
const RoverTripV2 = require('./RoverTripV2')

test('Assure that the trip works fine with no obstacle', () => {
    const obstaclesData = [[1, 4], [3, 5], [7, 4]];
    const obstacle = new Obstacles(obstaclesData);
    const position = new Position(0, 0, 1, 1);
    const rover = new Rover(position);
    let roverTrip = new RoverTrip(rover, obstacle);
    let roverTripV2 = new RoverTripV2(obstacle , rover , 1 , 3);
    let res = roverTripV2.findValidPaths();
    expect(roverTrip.beginTrip(res)).toBe("1 , 5  EAST");
    roverTrip = new RoverTrip(rover, obstacle);
    roverTripV2 = new RoverTripV2(obstacle , rover , 2 , 30);
    res = roverTripV2.findValidPaths();
    expect(roverTrip.beginTrip(res)).toBe("2 , 30  NORTH");
});

test('Assure that the trip works fine with obstacle', () => {
    const obstaclesData = [[1, 4], [3, 5], [7, 4]];
    const obstacle = new Obstacles(obstaclesData);
    const position = new Position(0, 0, 1, 1);
    const rover = new Rover(position);
    let roverTrip;
    let roverTripV2 = new RoverTripV2(obstacle , rover , 1 , 4);
    let res = roverTripV2.findValidPaths();
    expect(res).toBe("No Solution");
    roverTrip = new RoverTrip(rover, obstacle);
    roverTripV2 = new RoverTripV2(obstacle , rover , 3 , 6);
    res = roverTripV2.findValidPaths();
    expect(roverTrip.beginTrip(res)).toBe("3 , 6  EAST");
});