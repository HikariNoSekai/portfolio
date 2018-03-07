const paper = Snap(700, 700);
let style = {
    fill: 'rebeccapurple',
    stroke: 'lightblue',
    strokeWidth: 5
};
let zeroWH = { width: 0, height: 0 };

let rect = paper.rect(100, 0, 200, 100).attr(style); //cordX cordY width height
let circle = paper.circle(500, 500, 50).attr(style);
let romb = paper.polygon(430, 140, 480, 220, 530, 140, 480, 50).attr(style);
let triangle = paper.polygon(15, 540, 115, 540, 65, 450).attr(style);
// cordX cordY radius
// paper.g(rect, circle).drag(); //group

// rect.drag( dx => {
// 	rect.transform(`t${dx}r${dx}`);
// })
// rect.unclick()
// paper.click( e => {
// 	if (e.target.tagName === 'svg'){
// 	paper.circle(e.offsetX, e.offsetY, 15)
// 		.attr(style).drag();
// 	}
// })
//


let moveSquare = () => {
    triangle.attr({ points: "15, 140" });
    rect.attr({
        fill: 'rebeccapurple',
        stroke: 'lightblue',
        width: 200,
        height: 100,
        x: 100,
        y: 0
    });
    circle.attr({
        fill: 'rebeccapurple',
        stroke: 'lightblue',
        cx: 500,
        cy: 500,
        r: 50
    });
    romb.attr({
        fill: 'rebeccapurple',
        stroke: 'lightblue',
        points: "430, 140, 480, 220, 530, 140, 480, 50"
    });
    triangle.attr({
        fill: 'rebeccapurple',
        stroke: 'lightblue',
        points: "15, 540, 115, 540, 65, 450"
    });
    rect.animate({
        fill: 'lightblue',
        stroke: 'rebeccapurple',
        width: 200,
        height: 100,
        x: 500,
        y: 500
    }, 2000, moveCircle);
}

let moveCircle = () => {
    rect.attr(zeroWH);
    circle.animate({
        fill: 'lightblue',
        stroke: 'rebeccapurple',
        //width: 100,
        //height: 100,
        cx: 500,
        cy: 100
    }, 2000, moveRomb);
}

let moveRomb = () => {
    circle.attr({ r: 0 });
    romb.animate({
        fill: 'lightblue',
        stroke: 'rebeccapurple',
        points: "15, 540, 65, 620, 115, 540, 65, 450"
    }, 2000, moveTriangle);
}

let moveTriangle = () => {
    romb.attr({ points: "15, 540" });
    triangle.animate({
        fill: 'lightblue',
        stroke: 'rebeccapurple',
        points: "15, 140, 115, 140, 65, 50"
    }, 2000, moveSquare);
}

moveSquare();