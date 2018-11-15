//------------------------------------------------AMENAKER--------------------------------------------
class Amenaker extends Base{
    constructor(x,y){
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
        this.getNewCoordinates();
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell) {

            matrix[this.y][this.x] = 0;
            matrix[newCell[1]][newCell[0]] = 3;
            this.x = newCell[0];
            this.y = newCell[1];
            if (this.energy == 0) {
                for (var i in amenaker) {
                    if (amenaker[i].x == this.x && amenaker[i].y == this.y) {
                        amenaker.splice(i, 1);
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
        var emptyCells = this.chooseCell(2);
        var newCell = random(emptyCells);
        if (newCell) {

            matrix[this.y][this.x] = 0;
            matrix[newCell[1]][newCell[0]] = 5;
            this.x = newCell[0];
            this.y = newCell[1];
            if (this.energy < 0) {
                for (var i in hska) {
                    if (hska[i].x == this.x && hska[i].y == this.y) {
                        hska.splice(i, 1);
                        break;
                    }
                }
            }
            if (this.energy == 7) {
                amenaker.push(new Amenaker(this.x, this.y));
            } else {
                this.energy++
            };

        } else {
            this.move();
        }
    }
}
