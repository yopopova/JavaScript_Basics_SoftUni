function readText(input) {
    let index = 0; // End point
    let inputL = input.length; // End point

    while(index < inputL) { // Condition

        if(input[index] === "Stop") {
            break;
        }

        console.log(input[index]);
        index++; // Step
    }
}

readText(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"]);
readText(["Sofia", "Berlin", "Moscow", "Athens", "Madrid", "London", "Paris", "Stop", "AfterStop"]);