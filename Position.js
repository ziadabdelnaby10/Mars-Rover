module.exports = class Position {
    constructor(x, y, direcNumber, step) {
        this.setPosition(x, y);
        this.direc = ["NORTH", "EAST", "SOUTH", "WEST"];
        this.direcNumber = direcNumber;
        this.func = new Map();//this will hold the name of the function and the implementation of the function
        this.moveWithNumber = 1;//movewithNumber referes to 1 or -1 whether continue in the same path or not
        this.step = step;
        this.setLocation();
        this.fillMoveWithDirectionFunction()
    }
    setLocation() {
        this.direction = this.direc[this.direcNumber];
    }
    fillMoveWithDirectionFunction() {
        this.func.set("EAST", () => {
            return { newX: this.x + (this.step * this.moveWithNumber), newY: this.y }
        });
        this.func.set("WEST", () => {
            return { newX: this.x - (this.step * this.moveWithNumber), newY: this.y }
        });
        this.func.set("NORTH", () => {
            return { newX: this.x, newY: this.y + (this.step * this.moveWithNumber) }
        });
        this.func.set("SOUTH", () => {
            return { newX: this.x, newY: this.y - (this.step * this.moveWithNumber) }
        });
    }
    setPosition(newX, newY) {
        this.x = newX;
        this.y = newY;
    }
    onChangeRDirection() {
        this.direcNumber = (this.direcNumber + 1) % 4;
        this.setLocation();
    }
    onChangeLDirection() {
        this.direcNumber = (this.direcNumber - 1) % 4;
        if (this.direcNumber < 0) {
            this.direcNumber = 4 + this.direcNumber;
        }
        this.setLocation();
    }
    onChangeBDirection() {
        this.moveWithNumber = -1;
        return this.moveTheRover();
    }
    onChangeFDirection() {
        this.moveWithNumber = 1;
        return this.moveTheRover();
    }
    moveTheRover() {
        return this.func.get(this.direction)();
    }
}

// export default Position;