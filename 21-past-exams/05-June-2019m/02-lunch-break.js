function lunchBreak(input) {
    let show = input[0];
    let episodeTime = Number(input[1]);
    let lunchTime = Number(input[2]);

    let breakTime = lunchTime / 8;
    let restTime = lunchTime / 4;

    let leftTime = lunchTime - (breakTime + restTime);

    let diff = Math.abs(leftTime - episodeTime);

    if(leftTime < episodeTime) {
        console.log(`You don't have enough time to watch ${show}, you need ${Math.ceil(diff)} more minutes.`);
    } else {
        console.log(`You have enough time to watch ${show} and left with ${Math.ceil(diff)} minutes free time.`);
    }
}

lunchBreak(["Game of Thrones", "60", "96"]);
lunchBreak(["Teen Wolf", "48", "60"]);