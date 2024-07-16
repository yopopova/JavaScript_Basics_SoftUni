function unitConverter(arg1, arg2, arg3) {
    let num = parseFloat(arg1);
    let inData = String(arg2.toLowerCase());
    let outData = String(arg3.toLowerCase());

    let size = 0;

    if(inData === "m") {

        if(outData === "m") {
            size = num;
        } else if(outData === "mm") {
            size = num * 1000;
        } else if(outData === "cm") {
            size = num * 100;
        } else if(outData === "mi") {
            size = num * 0.000621371192;
        } else if(outData === "in") {
            size = num * 39.3700787;
        } else if(outData === "km") {
            size = num * 0.001;
        } else if(outData === "ft") {
            size = num * 3.2808399;
        } else if(outData === "yd") {
            size = num * 1.0936133;
        }

    } else if(inData === "mm") {

        let mmToM = num / 1000;

        if(outData === "m") {
            size = mmToM;
        } else if(outData === "mm") {
            size = num;
        } else if(outData === "cm") {
            size = mmToM * 100;
        } else if(outData === "mi") {
            size = mmToM * 0.000621371192;
        } else if(outData === "in") {
            size = mmToM * 39.3700787;
        } else if(outData === "km") {
            size = mmToM * 0.001;
        } else if(outData === "ft") {
            size = mmToM * 3.2808399;
        } else if(outData === "yd") {
            size = mmToM * 1.0936133;
        }

    } else if(inData === "cm") {

        let cmToM = num / 100;

        if(outData === "m") {
            size = cmToM;
        } else if(outData === "mm") {
            size = cmToM * 1000;
        } else if(outData === "cm") {
            size = num
        } else if(outData === "mi") {
            size = cmToM * 0.000621371192;
        } else if(outData === "in") {
            size = cmToM * 39.3700787;
        } else if(outData === "km") {
            size = cmToM * 0.001;
        } else if(outData === "ft") {
            size = cmToM * 3.2808399;
        } else if(outData === "yd") {
            size = cmToM * 1.0936133;
        }

    } else if(inData === "mi") {

        let miToM = num / 0.000621371192;

        if(outData === "m") {
            size = miToM;
        } else if(outData === "mm") {
            size = miToM * 1000;
        } else if(outData === "cm") {
            size = miToM * 100;
        } else if(outData === "mi") {
            size = num;
        } else if(outData === "in") {
            size = miToM * 39.3700787;
        } else if(outData === "km") {
            size = miToM * 0.001;
        } else if(outData === "ft") {
            size = miToM * 3.2808399;
        } else if(outData === "yd") {
            size = miToM * 1.0936133;
        }

    } else if(inData === "in") {

        let inToM = num / 39.3700787;

        if(outData === "m") {
            size = inToM;
        } else if(outData === "mm") {
            size = inToM * 1000;
        } else if(outData === "cm") {
            size = inToM * 100;
        } else if(outData === "mi") {
            size = inToM * 0.000621371192;
        } else if(outData === "in") {
            size = num;
        } else if(outData === "km") {
            size = inToM * 0.001;
        } else if(outData === "ft") {
            size = inToM * 3.2808399;
        } else if(outData === "yd") {
            size = inToM * 1.0936133;
        }

    } else if(inData === "km") {

        let kmToM = num / 0.001;

        if(outData === "m") {
            size = kmToM;
        } else if(outData === "mm") {
            size = kmToM * 1000;
        } else if(outData === "cm") {
            size = kmToM * 100;
        } else if(outData === "mi") {
            size = kmToM * 0.000621371192;
        } else if(outData === "in") {
            size = kmToM * 39.3700787;
        } else if(outData === "km") {
            size = num;
        } else if(outData === "ft") {
            size = kmToM * 3.2808399;
        } else if(outData === "yd") {
            size = kmToM * 1.0936133;
        }

    } else if(inData === "ft") {

        let ftToM = num / 3.2808399;

        if(outData === "m") {
            size = ftToM;
        } else if(outData === "mm") {
            size = ftToM * 1000;
        } else if(outData === "cm") {
            size = ftToM * 100;
        } else if(outData === "mi") {
            size = ftToM * 0.000621371192;
        } else if(outData === "in") {
            size = ftToM * 39.3700787;
        } else if(outData === "km") {
            size = ftToM * 0.001;
        } else if(outData === "ft") {
            size = num;
        } else if(outData === "yd") {
            size = ftToM * 1.0936133;
        }

    } else if(inData === "yd") {

        let ydToM = num / 1.0936133;

        if(outData === "m") {
            size = ydToM;
        } else if(outData === "mm") {
            size = ydToM * 1000;
        } else if(outData === "cm") {
            size = ydToM * 100;
        } else if(outData === "mi") {
            size = ydToM * 0.000621371192;
        } else if(outData === "in") {
            size = ydToM * 39.3700787;
        } else if(outData === "km") {
            size = ydToM * 0.001;
        } else if(outData === "ft") {
            size = ydToM * 3.2808399;
        } else if(outData === "yd") {
            size = num;
        }

    }

    console.log(size);
}

unitConverter("12", "km", "ft");
unitConverter("150", "mi", "in");
unitConverter("450", "yd", "km");