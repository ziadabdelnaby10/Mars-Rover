const Position = require('./Position')

test('Assure That the direction is setted to the right when set to east', () => {
    const position = new Position(0, 0, 1, 1);
    position.onChangeRDirection();
    expect(position.direction).toBe("South".toUpperCase());
})
test('Assure That the direction is setted to the right when set to west', () => {
    const position = new Position(0, 0, 3, 1);
    position.onChangeRDirection();
    expect(position.direction).toBe("North".toUpperCase());
})

test('Assure That the direction is setted to the left when set to east', () => {
    const position = new Position(0, 0, 1, 1);
    position.onChangeLDirection();
    expect(position.direction).toBe("North".toUpperCase());
})
test('Assure That the direction is setted to the left when set to north', () => {
    const position = new Position(0, 0, 0, 1);
    position.onChangeLDirection();
    expect(position.direction).toBe("West".toUpperCase());
})

test('Assure That the direction is setted to forward when set to east', () => {
    const position = new Position(0, 0, 1, 1);
    const newPos = position.onChangeFDirection();
    expect(newPos.newX).toBe(1);
})
test('Assure That the direction is setted to forward when set to west', () => {
    const position = new Position(0, 0, 3, 1);
    const newPos = position.onChangeFDirection();
    expect(newPos.newX).toBe(-1);
})
test('Assure That the direction is setted to forward when set to south', () => {
    const position = new Position(0, 0, 2, 1);
    const newPos = position.onChangeFDirection();
    expect(newPos.newY).toBe(-1);
})
test('Assure That the direction is setted to forward when set to north', () => {
    const position = new Position(0, 0, 0, 1);
    const newPos = position.onChangeFDirection();
    expect(newPos.newY).toBe(1);
})

test('Assure That the direction is setted to backward when set to east', () => {
    const position = new Position(0, 0, 1, 1);
    const newPos = position.onChangeBDirection();
    expect(newPos.newX).toBe(-1);
})
test('Assure That the direction is setted to backward when set to west', () => {
    const position = new Position(0, 0, 3, 1);
    const newPos = position.onChangeBDirection();
    expect(newPos.newX).toBe(1);
})
test('Assure That the direction is setted to backward when set to south', () => {
    const position = new Position(0, 0, 2, 1);
    const newPos = position.onChangeBDirection();
    expect(newPos.newY).toBe(1);
})
test('Assure That the direction is setted to backward when set to north', () => {
    const position = new Position(0, 0, 0, 1);
    const newPos = position.onChangeBDirection();
    expect(newPos.newY).toBe(-1);
})


test('Assure That the position is setted to given coordinate', () => {
    const position = new Position(0, 0, 1, 1);
    position.setPosition(1, 2);
    expect(position.x).toBe(1);
    expect(position.y).toBe(2);
})

