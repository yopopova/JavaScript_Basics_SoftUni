function circleAreaAndPerimeter(input) {
    let r = Number(input[0]);

    let circleFace = Math.PI * r * r;
    let circlePerimeter = 2 * Math.PI * r;

    console.log(circleFace.toFixed(2));
    console.log(circlePerimeter.toFixed(2));
}

circleAreaAndPerimeter(["3"]);
circleAreaAndPerimeter(["4.5"]);