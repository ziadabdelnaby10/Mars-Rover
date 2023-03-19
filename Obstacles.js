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

    //1 , 2
    getMinAndMax(beginX , beginY , endX, endY) {
        let minX = Math.min(endX , beginX);
        let maxX = Math.max(endX , beginX);
        let minY = Math.min(endY , beginY);
        let maxY = Math.max(endY , beginY);
        //[
        // [1, 4],
        // [3, 5],
        // [7, 4],
        // [2, 9]
        // ]
        for (let i = 0; i < this.coordinates.length; i++) {
            minX = Math.min(minX, this.coordinates[i][0]);
            maxX = Math.max(maxX, this.coordinates[i][0]);
            minY = Math.min(minY, this.coordinates[i][1]);
            maxY = Math.max(maxY, this.coordinates[i][1]);
        }
        return {minX, maxX, minY, maxY};
    }
}

// export default Obstacles;