function hospital(input) {
    let period = Number(input[0]);

    let treatedPatients = 0;
    let untreatedPatients = 0;

    let doctors = 7;

    for (let i = 1; i <= period; i++) {
        
        if ((i % 3 == 0) && (untreatedPatients > treatedPatients)) {
            doctors++;
        }
        
        let patientsPerDay = Number(input[i]);

        if(patientsPerDay < doctors) {
            treatedPatients += patientsPerDay;

        } else if(patientsPerDay > doctors) {
            treatedPatients += doctors;
            untreatedPatients = untreatedPatients + (patientsPerDay - doctors);
        } else {
            treatedPatients += doctors; // If patients are equal to doctors.
        }      
    }
            
    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}

hospital(["4", "7", "27", "9", "1"]);
// hospital(["6", "25", "25", "25", "25", "25", "2"]);
// hospital(["3", "7", "7", "7"]);