function highJump(input) {
    let index = 0;
    let startHeight = Number(input[index]);
    index++;

    let height = startHeight - 30;

    let jumpHeight = Number(input[index]);
    index++;

    let failedJumpCount = 0;
    let allJumpsCounter = 1;

    while(true) {

        if(height < jumpHeight) {

            if(height >= startHeight) {
                console.log(`Tihomir succeeded, he jumped over ${height}cm after ${allJumpsCounter} jumps.`);
                break;
            }

            height += 5;
            failedJumpCount = 0;

        } else {
            failedJumpCount++;

            if(failedJumpCount === 3) {
                console.log(`Tihomir failed at ${height}cm after ${allJumpsCounter} jumps.`);
                break;
            }
        }

        jumpHeight = Number(input[index]);
        index++;

        allJumpsCounter++;
    }
}

highJump(["231", "205", "212", "213", "228", "229", "230", "235"]);
// highJump(["250", "225", "224", "225", "228", "231", "235", "234", "235"]);