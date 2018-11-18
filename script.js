var grassArr = [];
var GrassEat = [];
var Pred = [];
var mah = [];
var hska = [];
var amenaker = [];
var m = 50;
var matrix = [];
for (var y = 0; y < m; y++) {
    matrix[y] = [];
    for (var x = 0; x < m; x++) {
        var n = Math.floor(Math.random() * 7);
        matrix[y][x] = n;
    }
}
var astijan = Math.floor(Math.random() * 16);
// var matrix = [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 3, 3, 3, 2, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 4, 4, 4, 3, 2, 1, 0, 0],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 5, 4, 3, 2, 1, 0, 0],
//     [1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 5, 4, 3, 2, 1, 0, 0],
//     [1, 2, 3, 3, 3, 3, 3, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 4, 4, 4, 3, 2, 1, 0, 0],
//     [1, 2, 3, 4, 4, 4, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 3, 3, 3, 2, 1, 0, 0],
//     [1, 2, 3, 4, 5, 5, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],
//     [1, 2, 3, 4, 5, 5, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
//     [1, 2, 3, 4, 4, 4, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 2, 3, 3, 3, 3, 3, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 3, 3, 3, 2, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 4, 4, 4, 3, 2, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 5, 4, 3, 2, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 5, 4, 3, 2, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 4, 4, 4, 3, 2, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 3, 3, 3, 2, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// ];
// var matrix = [
//    [0, 2, 1, 4, 0,0,0,0,0,0,0,0,0,0,0,0],
//    [1, 0, 0, 4, 0,1,0,0,0,0,0,0,0,0,0,0],
//    [0, 1, 0, 0, 0,2,0,0,0,0,0,0,0,0,0,0],
//    [2, 0, 1, 0, 0,3,0,0,0,0,0,0,0,0,0,0],
//    [1, 1, 3, 0, 0,4,0,0,0,0,0,0,0,0,0,0],
//    [1, 1, 3, 0, 5,5,0,0,0,0,0,0,0,0,0,0],
//    [1, 1, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0]
// ];

var side = 30;


function setup() {
    frameRate(100000000);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr);
            } else if (matrix[y][x] == 2) {
                var ge = new GrassEater(x, y);
                GrassEat.push(ge);

            } else if (matrix[y][x] == 3) {
                var pr = new Predator(x, y);
                if(astijan > 10){
                    Pred.push(pr);
                }
                
                else if(astijan < 10){
                    for (var i in Pred) {
                        if (Pred[i].x == this.x && Pred[i].y == this.y) {
                            Pred.splice(i, 1);
                            matrix[this.y][this.x] = 0;
                            break;
                        }
                    }
                
                }
            } else if (matrix[y][x] == 4) {
                var mh = new Mah(x, y);
                mah.push(mh);
            } else if (matrix[y][x] == 5) {
                var hsk = new Hska(x, y);
                hska.push(hsk);
            }
             else if (matrix[y][x] == 6){
                 var amk = new Amenaker(x, y);
                 amenaker.push(amk);
             }
        }
    }
}



function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                if(astijan > 10){
                    fill("green");
                    rect(x * side, y * side, side, side);
                }
                else if(astijan > 0 && astijan < 5){
                    fill("white");
                    rect(x * side,y * side, side, side);
                }
                else if(astijan > 5 && astijan < 10){
                    fill("#c9bf66");
                    rect(x * side,y * side, side, side);
                }
            } else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 2) {
                if(astijan > 10){
                fill("yellow");
                rect(x * side, y * side, side, side);
                }
                else{
                    for (var i in Pred) {
                        if (Pred[i].x == this.x && Pred[i].y == this.y) {
                            Pred.splice(i, 1);
                            matrix[this.y][this.x] = 0;
                            break;
                        }
                    }
                }
            } else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 4) {
                fill("blue");
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 5) {
                if(astijan > 10){
                    fill("#fcd4a4");
                rect(x * side, y * side, side, side);
                console.log(astijan);
                }
                else if(astijan < 10){
                    fill("#d3c0ab");
                    rect(x * side, y * side, side, side);
                }
            }
            else if (matrix[y][x] == 6){
                fill("#000000");
                rect(x * side, y * side, side, side);
            }
        }
    }
    
        for (var i in grassArr) {
             grassArr[i].mul();
        }
        for (var i in GrassEat) {
            GrassEat[i].eat();
        }
        for (var i in Pred) {
            Pred[i].eat();
        }
        for (var i in mah) {
            mah[i].eat();
        }    
        for (var i in hska) {
            hska[i].eat();
        }
        for(var i in amenaker){
            amenaker[i].eat();
        }

}