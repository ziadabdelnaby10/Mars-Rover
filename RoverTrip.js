module.exports = class RoverTrip {
    constructor(rover, obstacles) {
        this.rover = rover;
        this.obstacles = obstacles;
        this.tripFunctions = new Map();
        this.fillTripCommandFunctions();
    }

    fillTripCommandFunctions() {
        this.tripFunctions.set("f", () => {
            const newPos = this.rover.moveForward();
            let obstecleFound = this.obstacles.onCompareObstacle(newPos.newX, newPos.newY);
            if (obstecleFound) {
                this.rover.canMove = false;
            } else {
                this.rover.setNewPosition(newPos.newX, newPos.newY);
            }
        });
        this.tripFunctions.set("b", () => {
            const newPos = this.rover.moveBackward();
            let obstecleFound = this.obstacles.onCompareObstacle(newPos.newX, newPos.newY);
            if (obstecleFound) {
                this.rover.canMove = false;
            } else {
                this.rover.setNewPosition(newPos.newX, newPos.newY);
            }
        });
        this.tripFunctions.set("l", () => {
            this.rover.turnLeft();
        });
        this.tripFunctions.set("r", () => {
            this.rover.turnRight();
        });
    }

    checkCommand(command) {
        if (command === 'f' || command === 'b' || command === 'l' || command === 'r') {
            return true;
        } else {
            return false;
        }
    }

    onCommand(command) {
        let result = this.checkCommand(command);
        if (result) {
            this.tripFunctions.get(command)();
            return true;
        }
        else {
            console.log("Wrong Command!!!!");
            return false;
        }
    }

    beginTrip(command) {
        let lowerCommand = command.toLowerCase();
        for (let i = 0; i < lowerCommand.length; i++) {
            if (this.rover.canMove) {
                let isOk = this.onCommand(lowerCommand[i], this.obstacles);
            } else {
                break;
            }
        }
        return this.rover.printResult();
    }
}

// export default RoverTrip;