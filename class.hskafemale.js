//------------------------------------------------HSKA--------------------------------------------
class HskaFemale extends Base{
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
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x - 3, this.y - 3],
            [this.x, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y],
            [this.x + 3, this.y],
            [this.x - 3, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 3, this.y + 3]
        ];
    };
    chooseCell(character) {

        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    move() {
        this.getNewCoordinates();
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell) {

            matrix[this.y][this.x] = 0;
            matrix[newCell[1]][newCell[0]] = 9;
            this.x = newCell[0];
            this.y = newCell[1];
            if (this.energy <= 0) {
                for (var i in HskaFem) {
                    if (HskaFem[i].x == this.x && HskaFem[i].y == this.y) {
                        HskaFem.splice(i, 1);
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
        var emptyCells = this.chooseCell(4);
        var newCell = random(emptyCells);
        if (newCell) {

            matrix[this.y][this.x] = 0;
            matrix[newCell[1]][newCell[0]] = 9;
            this.x = newCell[0];
            this.y = newCell[1];
            if (this.energy < 0) {
                for (var i in mah) {
                    if (mah[i].x == this.x && mah[i].y == this.y) {
                        mah.splice(i, 1);
                        break;
                    }
                }
            }
            if (this.energy == 7) {
                HskaFem.push(new HskaFemale(this.x, this.y));
            } else {
                this.energy++
            };

        } else {
            this.move();
        }

    }
}