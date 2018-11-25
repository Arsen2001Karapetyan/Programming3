//------------------------------------------------EG_XOTAKER--------------------------------------------
class GrassEaterFemale extends Base{
    constructor(x, y) {
        super(x,y);
        this.energy = 5;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    };
    chooseCell(character) {

        this.getNewCoordinates();
        return super.chooseCell(character);
    }


    move() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell) {

            matrix[this.y][this.x] = 0;
            matrix[newCell[1]][newCell[0]] = 7;
            this.x = newCell[0];
            this.y = newCell[1];
            if (this.energy == 0) {
                for (var i in GrassEatFem) {
                    if (GrassEatFem[i].x == this.x && GrassEatFem[i].y == this.y) {
                        GrassEatFem.splice(i, 1);
                        matrix[this.y][this.x] = 0;
                        break;
                    }
                }
            } else {
                this.energy--
            };
        }


    }
    eat() {
        this.getNewCoordinates();
        var emptyCells = this.chooseCell(1);
        var newCell = random(emptyCells);
        if (newCell) {

            matrix[this.y][this.x] = 0;
            matrix[newCell[1]][newCell[0]] = 7;
            this.x = newCell[0];
            this.y = newCell[1];
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 5);
                    break;
                }
            }
            if (this.energy == 10) {
                GrassEatFem.push(new GrassEaterFemale(this.x, this.y));
                this.energy = 5;
            } else {
                this.energy++
            };


        } else {
            this.move();
        }
    }
}