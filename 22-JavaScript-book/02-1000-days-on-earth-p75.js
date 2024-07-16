function thousandDaysOnEarth([startDate]) {
    let dateParts = startDate.split("-");

    let year = Number(dateParts[2]);
    let month = Number(dateParts[1]);
    let day = Number(dateParts[0]);

    let date = new Date(year, month, day + 1000);

    let dd = date.getDate();
    let mm = date.getMonth();
    let yyyy = date.getFullYear();

    if (dd < 10) {
        dd = "0" + dd;
    }

    if (mm < 10) {
        mm = "0" + mm;
    }

    console.log(dd + "-" + mm + "-" + yyyy);
}

thousandDaysOnEarth(['25-02-1995']);
thousandDaysOnEarth(['07-11-2003']);
thousandDaysOnEarth(['14-06-1980']);
thousandDaysOnEarth(['01-01-2012']);
thousandDaysOnEarth(['30-12-2002']);