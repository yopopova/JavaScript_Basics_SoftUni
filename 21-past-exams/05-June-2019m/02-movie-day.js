function movieDay(input) {
    let time = Number(input[0]);
    let scenesCount = Number(input[1]);
    let timePerScene = Number(input[2]);

    let preparationTime = time * 0.15;

    let totalScenesTime = scenesCount * timePerScene;

    let totalNeededTime = preparationTime + totalScenesTime;

    let diff = Math.abs(time - totalNeededTime);

    if(time < totalNeededTime) {
        console.log(`Time is up! To complete the movie you need ${diff.toFixed()} minutes.`);
    } else {
        console.log(`You managed to finish the movie on time! You have ${diff.toFixed()} minutes left!`);
    }
}

movieDay(["120", "10", "11"]);
movieDay(["60", "15", "3"]);