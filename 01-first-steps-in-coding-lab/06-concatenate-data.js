function concatenateData(input) {
    let firstName = input[0];
    let lastName = input[1];
    let age = Number(input[2]);
    let town = input[3];

    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
}

concatenateData(['Maria', 'Ivanova', '19', 'Pleven']);
// concatenateData(['Peter', 'Nikolov', '22', 'Varna']);
// concatenateData(['Светлин', 'Наков', '29', 'Велико Търново']);
// concatenateData(['Geek', 'Coder', '15', 'Codeland']);