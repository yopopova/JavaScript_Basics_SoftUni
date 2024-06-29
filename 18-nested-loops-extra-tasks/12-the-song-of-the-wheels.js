function theSongOfTheWheels(input) {
    let num = Number(input[0]);

    let buffer = "";
    let passCounter = 0;

    let numOne = 0;
    let numTwo = 0;
    let numThree = 0;
    let numFour = 0;

    for(let a = 1; a <= 9; a++) {
        for(let b = 1; b <= 9; b++) {
            for(let c = 1; c <= 9; c++) {
                for(let d = 1; d <= 9; d++) {
                    if((a * b) + (c * d) === num) {
                        if(a < b && c > d) {
                            buffer += "" + a + b + c + d + " ";

                            // buffer += "" + a + b + c + d + " ";
                            // console.log(buffer);
                            // ^ With these two lines in the loop, the numbers are printed in the shape of a pyramid!!!
                        
                            passCounter++;

                            if(passCounter === 4) {
                                numOne = a;
                                numTwo = b;
                                numThree = c;
                                numFour = d;
                            }
                        }
                    }
                }
            }
        }
    }

    console.log(buffer);

    if(passCounter >= 4) {
        console.log(`Password: ${numOne}${numTwo}${numThree}${numFour}`);
    } else {
        console.log("No!");
    }
}

// theSongOfTheWheels(["11"]);
// theSongOfTheWheels(["139"]);
// theSongOfTheWheels(["110"]);
theSongOfTheWheels(["55"]);