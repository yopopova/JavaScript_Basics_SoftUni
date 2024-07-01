function highJump(input) {
    let index = 0;
    let startHeight = Number(input[index]); // The initial height of the bar that comes in from the array.
    index++;

    let height = startHeight - 30; // The height of the bar to which we will compare the height of the jump.

    let jumpHeight = Number(input[index]); // The height of the jump to compare to.
    index++;

    let failedJumpCount = 0; // Counter of failed hops.
    let allJumpsCounter = 1; // Counter for the jumps. We start at 1, not 0, because we've already read one jump from the array.

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