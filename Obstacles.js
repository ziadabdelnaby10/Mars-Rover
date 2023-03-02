module.exports = class Obstacles {
    //coordinates means the x , y of each obstacle
    constructor(coordinates) {
        this.coordinates = coordinates
    }
    onCompareObstacle(comparedX, comparedY) {
        let found = false;
        for (let i = 0; i < this.coordinates.length; i++) {
            if (this.compareObstacle(this.coordinates[i][0], this.coordinates[i][1], comparedX, comparedY)) {
                found = true;
                break;
            }
        }
        return found;
    }
    compareObstacle(x, y, comparedX, comparedY) {
        return this.check(x === comparedX && y === comparedY);
    }
    check(condition) {
        if (condition) {
            return true;
        } else {
            return false;
        }
    }
}

// export default Obstacles;