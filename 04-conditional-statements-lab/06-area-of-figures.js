function areaOfFigures(input) {
    let type = input[0];
    let result = 0;

    if(type == "square") {
        let sideA = Number(input[1]);
        result = sideA * sideA;
        
    } else if(type === "rectangle") {
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        result = sideA * sideB;
    
    } else if(type === "circle") {
        let radius = Number(input[1]);
        result = Math.PI * radius * radius;
        
    } else if(type === "triangle") {
        let sideA = Number(input[1]);
        let h = Number(input[2]);
        result = (sideA * h) / 2;
    }

    console.log(result.toFixed(3));
}

areaOfFigures(["square", "5"]);
areaOfFigures(["rectangle", "7","2.5"]);
areaOfFigures(["circle", "6"]);
areaOfFigures(["triangle", "4.5", "20"]);