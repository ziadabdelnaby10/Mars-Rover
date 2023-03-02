module.exports = class Rover {
    constructor(position) {
        this.position = position
        this.canMove = true;
    }
    printResult() {
        if (this.canMove) {
            console.log(`${this.position.x} , ${this.position.y}  ${this.position.direction}`);
            return (`${this.position.x} , ${this.position.y}  ${this.position.direction}`);
        } else {
            console.log(`${this.position.x} , ${this.position.y}  ${this.position.direction} STOPPED`);
            return (`${this.position.x} , ${this.position.y}  ${this.position.direction} STOPPED`);
        }
    }
    setNewPosition(newX, newY) {
        this.position.setPosition(newX, newY);
    }
    turnLeft() {
        this.position.onChangeLDirection();
    }
    turnRight() {
        this.position.onChangeRDirection();
    }
    moveForward() {
        return this.position.onChangeFDirection();
    }
    moveBackward() {
        return this.position.onChangeBDirection();
    }

}

// export default Rover;