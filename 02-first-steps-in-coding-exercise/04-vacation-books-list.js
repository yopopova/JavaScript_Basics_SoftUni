function vacationBookList(input) {
    let allPages = Number(input[0]);
    let pagesForOneHour = Number(input[1]);
    let days = Number(input[2]);

    let hoursNeeded = allPages / pagesForOneHour;
    let hoursPerDay = hoursNeeded / days;

    console.log(hoursPerDay);
}