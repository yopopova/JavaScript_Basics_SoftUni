function sumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index];
    index++;

    let sumPrimeNumbers = 0;
    let sumNonPrimeNumbers = 0;

    while(command !== "stop") {
        let num = Number(command);

        if(num < 0) { // Negative numbers.
            console.log("Number is negative.");
            command = input[index]; // Read a new number since the current one received is negative.
            index++
            continue; // To skip the code down and move to the next number.
        }

        if(num === 1) { // The first prime a.k.a 1.
            sumPrimeNumbers += num;
            command = input[index];
            index++;
            continue;
        }

        let isPrime = true;

        for(let i = 2; i <= Math.sqrt(num); i++) { // We start at 2 because we already bypassed the 1 case above.
            if(num % i === 0) {
                isPrime = false;
            }
        }

        if(isPrime) { // We check if the number is prime.
            sumPrimeNumbers += num;
        } else {
            sumNonPrimeNumbers += num;
        }

        command = input[index];
        index++;
    }

    console.log(`Sum of all prime numbers is: ${sumPrimeNumbers}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNumbers}`);
}

sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
// sumPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"]);
// sumPrimeNonPrime(["0", "-9", "0", "stop"]);