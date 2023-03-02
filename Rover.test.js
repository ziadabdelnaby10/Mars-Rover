const Rover = require('./Rover');
const Position = require('./Position');

test('Assure that the current data are printed', () => {
    const position = new Position(0, 0, 1, 1);
    const rover = new Rover(position);
    expect(rover.printResult()).toEqual("0 , 0  EAST");
});
test('Assure that the current data are printed when can\'t move', () => {
    const position = new Position(0, 0, 1, 1);
    const rover = new Rover(position);
    rover.canMove = false;
    expect(rover.printResult()).toEqual("0 , 0  EAST STOPPED");
});

test('Assure that the given position is setted to the rover object', () => {
    const position = new Position(0, 0, 1, 1);
    const rover = new Rover(position);
    rover.setNewPosition(3, 5);
    expect(rover.position.x).toBe(3);
    expect(rover.position.y).toBe(5);
});

test('Assure That the direction is setted to the right', () => {
    const position = new Position(0, 0, 1, 1);
    const rover = new Rover(position);
    rover.turnRight();
    expect(rover.position.direction).toBe("South".toUpperCase());
})

test('Assure That the direction is setted to the left', () => {
    const position = new Position(0, 0, 1, 1);
    const rover = new Rover(position);
    rover.turnLeft();
    expect(rover.position.direction).toBe("North".toUpperCase());
})

test('Assure That the direction is setted to forward', () => {
    const position = new Position(0, 0, 1, 1);
    const rover = new Rover(position);
    const newPos = rover.moveForward();
    expect(newPos.newX).toBe(1);
})
test('Assure That the direction is setted to backward', () => {
    const position = new Position(0, 0, 1, 1);
    const rover = new Rover(position);
    const newPos = rover.moveBackward();
    expect(newPos.newX).toBe(-1);
})
