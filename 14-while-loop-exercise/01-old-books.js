function oldBooks(input) {
    let index = 0;
    let favoriteBook = input[index];
    index++;

    let command = input[index];
    index++;

    let counter = 0;
    let isFound = false; // Boolean flag that we initially set to false because we haven't found the book yet.

    while (command !== "No More Books") {
        let book = command;

        if (favoriteBook === book) {
            console.log(`You checked ${counter} books and found it.`);
            isFound = true; // This is where the book is found.
            break; // We break the loop after it prints to the console, otherwise it will keep looping even if we found the book.
        }

        counter++;

        command = input[index]; // This is how we solve the infinite loop problem.
        index++;
    }

    if (!isFound) { // The book was not found here, despite the search.
        console.log("The book you search is not here!");
        console.log(`You checked ${counter} books.`);
    }
}

// oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
// oldBooks(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]);
oldBooks(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]);
