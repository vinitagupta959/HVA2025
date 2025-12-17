 let data = [
    { name: "A", scores: [80, 90, 100] },
    { name: "B", scores: [70, 75, 65] },
    { name: "C", scores: [88, 92, 84, 79] },
    { name: "D", scores: [95, 91] },
    { name: "E", scores: [60, 70, 80, 90, 100] },
    { name: "F", scores: [55, 60, 65] }
];


for (let i = 0; i < data.length; i++) {
    let person = data[i];
    let scores = person.scores;
    let total = 0;
    let j = 0;
    while (j < scores.length) {
        total += scores[j];
        j++;
    }

    let average = total / scores.length;      // i want to find avrage so 
    console.log(person.name + ":", average);
}
