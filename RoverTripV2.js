// This Rover Trip will go to distenation through some obstacles
// 4 ways to go in part 3
// way 1:-                  way 2:-                            way 3:-                   way 4:-
// 	x+1 , y;                  x-1 , y;                            x , y+1;                    x , y-1;
// 	East:-                  	 East:-                                 East:-                   	    East:-
// 		None Forward                 	None Backward                           Left Forward                 Right Forward
// 	South:-                 	 South:-                                South:-                  	    South:-
// 		Left Forward                 	Right Forward                           None Backward                None Forward
// 	North:-                 	 North:-                                North:-                  	    North:-
// 		Right Forward                	Left Forward                            None Forward                 None Backward
// 	West:-                  	 West:-                                 West:-                   	    West:-
// 		None  Backward               	None Forward                            Right Forward                Left Forward

// none means no move stay where u r just helper command so i can delete two commands for all of them

module.exports = class RoverTripV2 {
    constructor(obstacles, rover, endPointX, endPointY) {
        this.obstacles = obstacles;
        this.rover = rover;
        this.endPointX = endPointX;
        this.endPointY = endPointY;
        this.possiblePaths = [];
        this.visited = new Map();
        this.tripFunctions = new Map();
        this.fillTripCommandFunctions();
    }

    fillTripCommandFunctions() {
        this.tripFunctions.set("NORTHIncX", () => {
            return "RF";
        });
        this.tripFunctions.set("SOUTHIncX", () => {
            return "LF";
        });
        this.tripFunctions.set("EASTIncX", () => {
            return "NF";
        });
        this.tripFunctions.set("WESTIncX", () => {
            return "NB";
        });

        this.tripFunctions.set("NORTHDecX", () => {
            return "LF";
        });
        this.tripFunctions.set("SOUTHDecX", () => {
            return "RF";
        });
        this.tripFunctions.set("EASTDecX", () => {
            return "NB";
        });
        this.tripFunctions.set("WESTDecX", () => {
            return "NF";
        });

        this.tripFunctions.set("NORTHIncY", () => {
            return "NF";
        });
        this.tripFunctions.set("SOUTHIncY", () => {
            return "NB";
        });
        this.tripFunctions.set("EASTIncY", () => {
            return "LF";
        });
        this.tripFunctions.set("WESTIncY", () => {
            return "RF";
        });

        this.tripFunctions.set("NORTHDecY", () => {
            return "NB";
        });
        this.tripFunctions.set("SOUTHDecY", () => {
            return "NF";
        });
        this.tripFunctions.set("EASTDecY", () => {
            return "RF";
        });
        this.tripFunctions.set("WESTDecY", () => {
            return "LF";
        });

        this.tripFunctions.set("NB", (direction) => {
            if (direction === "NORTH") {
                return "NORTH";
            } else if (direction === "SOUTH") {
                return "SOUTH";
            } else if (direction === "EAST") {
                return "EAST";
            } else if (direction === "WEST") {
                return "WEST";
            }
        });

        this.tripFunctions.set("NF", (direction) => {
            if (direction === "NORTH") {
                return "NORTH";
            } else if (direction === "SOUTH") {
                return "SOUTH";
            } else if (direction === "EAST") {
                return "EAST";
            } else if (direction === "WEST") {
                return "WEST";
            }
        });

        this.tripFunctions.set("RF", (direction) => {
            if (direction === "NORTH") {
                return "EAST";
            } else if (direction === "SOUTH") {
                return "WEST";
            } else if (direction === "EAST") {
                return "SOUTH";
            } else if (direction === "WEST") {
                return "NORTH";
            }
        });

        this.tripFunctions.set("LF", (direction) => {
            if (direction === "NORTH") {
                return "WEST";
            } else if (direction === "SOUTH") {
                return "EAST";
            } else if (direction === "EAST") {
                return "NORTH";
            } else if (direction === "WEST") {
                return "SOUTH";
            }
        });

    }

    findValidPaths() {
        let boundaries = this.obstacles.getMinAndMax(this.rover.position.x , this.rover.position.y , this.endPointX, this.endPointY);
        this.findValidPathsUtil(boundaries, this.rover.position.x, this.rover.position.y, this.rover.position.direction , "");//think about the path param

        const res = this.printValid();
        this.clearN();//just to clear the None Direction ("N")
        return res;
    }

    isSafeToMove(curRow, curCol, boundaries) {
        return !(curRow > boundaries.maxX + 1 || curCol > boundaries.maxY + 1 ||
        curRow < boundaries.minX - 1 || curCol < boundaries.minY - 1
        || this.obstacles.onCompareObstacle(curRow, curCol) || this.visited.has(`${curRow},${curCol}`));

    }

    findValidPathsUtil(boundaries, row, col, direction, path) {

        //-------------------Base Case--------------------------------
        if (!this.isSafeToMove(row, col , boundaries)) {
            return;
        }

        if (row === this.endPointX && col === this.endPointY) {
            this.possiblePaths.push(path);
            return;
        }

        if(row === this.endPointX+1 || col === this.endPointY+1)
            return;
        //------------------------------------------------------------
        this.visited.set(`${row},${col}`, true);

        {
            let tempCommand1 = this.tripFunctions.get(direction + "IncX")();//command = NF or NB or LF or RF
            let newPath1 = path + tempCommand1;
            let newDirection1 = this.tripFunctions.get(tempCommand1)(direction);//get new direction according to the current command
            this.findValidPathsUtil(boundaries, row + this.rover.position.step, col, newDirection1, newPath1);
        }

        {
            let tempCommand3 = this.tripFunctions.get(direction + "IncY")();
            let newPath3 = path + tempCommand3;
            let newDirection3 = this.tripFunctions.get(tempCommand3)(direction);
            this.findValidPathsUtil(boundaries, row, col + this.rover.position.step, newDirection3, newPath3);
        }

        {
            let tempCommand4 = this.tripFunctions.get(direction + "DecY")();
            let newPath4 = path + tempCommand4;
            let newDirection4 = this.tripFunctions.get(tempCommand4)(direction);
            this.findValidPathsUtil(boundaries, row, col - this.rover.position.step, newDirection4, newPath4);
        }

        {
            let tempCommand2 = this.tripFunctions.get(direction + "DecX")();
            let newPath2 = path + tempCommand2;
            let newDirection2 = this.tripFunctions.get(tempCommand2)(direction);
            this.findValidPathsUtil(boundaries, row - this.rover.position.step, col, newDirection2, newPath2);
        }


    }

    printValid() {
        if(this.possiblePaths.length === 0) {
            console.log("No Solution");
            return "";
        }
        else{
            let mini = this.possiblePaths[0].replaceAll('N' , '');
            for (let i = 1; i < this.possiblePaths.length; i++) {
                let tempStr = this.possiblePaths[i].replaceAll('N' , '');
                if (mini.length >= tempStr.length)
                    mini = tempStr;
            }
            console.log(mini + "\nDone");
            return mini;
        }

    }

    clearN() {
        for (let i = 0; i < this.possiblePaths.length; i++) {
            this.possiblePaths[i] = this.possiblePaths[i].replaceAll('N' , '');
        }
        console.log(this.possiblePaths);
    }

}