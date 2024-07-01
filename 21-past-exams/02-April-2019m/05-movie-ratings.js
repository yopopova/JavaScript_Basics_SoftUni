function movieRatings(input) {
    let index = 0;
    let allMovies = Number(input[index]);
    index++;

    let maxRating = 0;
    let movieMaxRating = "";

    let minRating = 10;
    let movieMinRating = "";

    let ratingCounter = 0;

    for(let i = 0; i < allMovies; i++) {
        let movie = input[index];
        index++;

        let rating = Number(input[index]);
        index++;

        if(rating > maxRating) {
            maxRating = rating;
            movieMaxRating = movie;
        }
        
        if(rating < minRating) {
            minRating = rating;
            movieMinRating = movie;
        }

        ratingCounter += rating;
    }

    let avgRating = ratingCounter / allMovies;

    console.log(`${movieMaxRating} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${movieMinRating} is with lowest rating: ${minRating.toFixed(1)}`);
    console.log(`Average rating: ${avgRating.toFixed(1)}`);
}

// movieRatings(["5", "A Star is Born", "7.8", "Creed 2", "7.3", "Mary Poppins", "7.2", "Vice", "7.2", "Captain Marvel", "7.1"]);
movieRatings(["3", "Interstellar", "8.5", "Dangal", "8.3", "Green Book", "8.2"]);