const Obstacles = require('./Obstacles')

test('This test should assure that the two given points are equal', () => {
    const obstacle = new Obstacles([[1, 2], [2, 2]]);
    expect(obstacle.compareObstacle(0, 0, 1, 1)).toBe(false);
})

test('Assure that the two given points are not in the coordinates data which are obstacles', () => {
    const obstacle = new Obstacles([[1, 4], [3, 5], [7, 4]]);
    expect(obstacle.onCompareObstacle(1, 5)).toBe(false);
})
test('Assure that the two given points are in the coordinates data which are obstacles', () => {
    const obstacle = new Obstacles([[1, 4], [3, 5], [7, 4]]);
    expect(obstacle.onCompareObstacle(3, 5)).toBe(true);
})


//.toBe()
//.toEqual()
//.not.toBe