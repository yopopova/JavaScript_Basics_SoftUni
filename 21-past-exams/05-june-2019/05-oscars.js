function oscars(input) {
    let index = 0;
    let actorName = input[index];
    index++;

    let academyPoints = Number(input[index]);
    index++;

    let judgePanel = Number(input[index]);
    index++;

    for (let i = 0; i < judgePanel; i++) {
        let judgeName = input[index];
        index++;

        let judgePoints = Number(input[index]);
        index++;

        let name = judgeName.length;
        let currentPoints = (name * judgePoints) / 2;

        academyPoints += currentPoints;

        if (academyPoints >= 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            break;
        }
    }

    if (academyPoints < 1250.5) {
        let diff = 1250.5 - academyPoints;
        console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);
    }
}

oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);