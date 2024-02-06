function carNumber(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let buffer = "";

    for(let n1 = startNum; n1 <= endNum; n1++) {
        for(let n2 = startNum; n2 <= endNum; n2++) {
            for(let n3 = startNum; n3 <= endNum; n3++) {
                for(let n4 = startNum; n4 <= endNum; n4++) {

                    if(n1 % 2 === 0) {
                        if(n4 % 2 !== 0) {
                            if(n1 > n4) {
                                if((n2 + n3) % 2 == 0) {
                                    buffer += "" + n1 + n2 + n3 + n4 + " ";
                                }
                            }
                        }

                    } else {
                        if(n4 % 2 === 0) {
                            if(n1 > n4) {
                                if((n2 + n3) % 2 == 0) {
                                    buffer += "" + n1 + n2 + n3 + n4 + " ";
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    console.log(buffer);
}

carNumber(["2", "3"]);
// carNumber(["3", "5"]);
// carNumber(["5", "8"]);