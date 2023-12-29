function readText(input) {
    let index = 0;
    let inputL = input.length;

    while(index < inputL) {

        if(input[index] === "Stop") {
            break;
        }

        console.log(input[index]);
        index++;
    }
}

readText(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"]);
readText(["Sofia", "Berlin", "Moscow", "Athens", "Madrid", "London", "Paris", "Stop", "AfterStop"]);