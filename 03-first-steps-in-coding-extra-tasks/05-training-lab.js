function trainingLab(input) {
    let h = Number(input[0]);
    let w = Number(input[1]);

    let width = (w * 100) - 100; // Width of the hall, without the corridor (we subtract 100, because of the width of the corridor).
    let height = h * 100; // Hall length.
    // ^ We multiply * 100 because the input data is given in meters and we need cm, so we make the units equal.

    let desks = Math.floor(width / 70); // We find how many desks go together in one row.
    let rows = Math.floor(height / 120); // We find how many rows there can be in the hall.

    let allPlaces = (desks * rows) - 3; // Изваждаме 3, заради местата, които се губят от входната врата и катедрата.

    console.log(allPlaces);
}

trainingLab(["15", "8.9"]);
trainingLab(["8.4", "5.2"]);