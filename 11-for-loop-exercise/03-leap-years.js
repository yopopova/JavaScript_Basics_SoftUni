function leapYears(input) {
    let firstYear = Number(input[0]);
    let secondYear = Number(input[1]);

    for(let year = firstYear; year <= secondYear; year += 4) { // year = year + 4;
        console.log(year);
    }  
}

leapYears(["1908", "1919"]);
// leapYears(["2000", "2011"]);
// leapYears(["1584", "1597"]);
// leapYears(["2020", "2032"]);