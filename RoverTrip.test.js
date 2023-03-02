const Obstacles = require('./Obstacles')
const Position = require('./Position')
const Rover = require('./Rover')
const RoverTrip = require('./RoverTrip')

test('Assure that the command is within the known commands (f-b-l-r)', () => {
    const obstaclesData = [[1, 4], [3, 5], [7, 4]]
    const obstacle = new Obstacles(obstaclesData);
    const position = new Position(0, 0, 1, 1);
    const rover = new Rover(position);
    const roverTrip = new RoverTrip(rover, obstacle);
    expect(roverTrip.checkCommand('f')).toBe(true);
    expect(roverTrip.checkCommand('s')).toBe(false);
})

test('Assure that the command functions working as suppose', () => {
    const obstaclesData = [[1, 4], [3, 5], [7, 4]]
    const obstacle = new Obstacles(obstaclesData);
    const position = new Position(0, 0, 1, 1);
    const rover = new Rover(position);
    const roverTrip = new RoverTrip(rover, obstacle);
    roverTrip.onCommand('f');
    expect(roverTrip.rover.position.x).toBe(1);
    roverTrip.onCommand('b');
    expect(roverTrip.rover.position.y).toBe(0);
    roverTrip.onCommand('l');
    expect(roverTrip.rover.position.direction).toBe("NORTH");
    roverTrip.onCommand('r');
    expect(roverTrip.rover.position.direction).toBe("EAST");
    expect(roverTrip.onCommand('s')).toBe(false);
});

test('Assure that the trip works fine with no obstacle', () => {
    let command = "FLFFFRFLB";
    const obstaclesData = [[1, 4], [3, 5], [7, 4]]
    const obstacle = new Obstacles(obstaclesData);
    const position = new Position(0, 0, 1, 1);
    const rover = new Rover(position);
    const roverTrip = new RoverTrip(rover, obstacle);
    expect(roverTrip.beginTrip(command)).toBe("2 , 2  NORTH");
});
test('Assure that the trip works fine with obstacle', () => {
    let command = "FLFFFFRFLB";
    const obstaclesData = [[1, 4], [3, 5], [7, 4]]
    const obstacle = new Obstacles(obstaclesData);
    const position = new Position(0, 0, 1, 1);
    const rover = new Rover(position);
    const roverTrip = new RoverTrip(rover, obstacle);
    expect(roverTrip.beginTrip(command)).toBe("1 , 3  NORTH STOPPED");
});
test('Assure that the trip works fine with obstacle 2', () => {
    let command = "BFLFFFFRFLB";
    const obstaclesData = [[-1, 0], [1, 4], [3, 5], [7, 4]]
    const obstacle = new Obstacles(obstaclesData);
    const position = new Position(0, 0, 1, 1);
    const rover = new Rover(position);
    const roverTrip = new RoverTrip(rover, obstacle);
    expect(roverTrip.beginTrip(command)).toBe("0 , 0  EAST STOPPED");
});

