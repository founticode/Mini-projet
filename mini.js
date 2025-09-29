
alert(`=== Quiz Game === 
    8 questions, answer with codes (C1...C8),
    correct = +10 / wrong = -2, 2 tries each
    press OK to start the game `)


    const questions = [
        {code: "C1", question: "Quelle compétence permet de maquetter une application ?", answer: "maquettage"},
        {code: "C2", question: "Quelle compétence permet de réaliser une interface web statique et adaptable ?", answer: "HTML/CSS"},
        {code: "C3", question: "Quelle compétence permet de développer une interface web dynamique ?", answer: "JS"},
        {code: "C4", question: "Quelle compétence permet de réaliser une interface avec un CMS ou e-commerce ?", answer: "CMS"},
        {code: "C5", question: "Quelle compétence permet de créer une base de données ?", answer: "SQL"},
        {code: "C6", question: "Quelle compétence permet de développer les composants d’accès aux données ?", answer: "AccesBDD"},
        {code: "C7", question: "Quelle compétence permet de développer la partie back-end d’une application web ou mobile ?", answer: "PHP"},
        {code: "C8", question: "Quelle compétence correspond aux frameworks FrontEnd (React, VueJs...) ?", answer: "FrameworkJS"},
    ];



let i = questions.length - 1;
while (i > 0) {
    let j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
    i--;
}


let score = 0;
let answers = [];
i = 0;
while (i < questions.length) {
    let q = questions[i];
    let user = prompt(`${q.question}\nEnter the code (C1...C8):`)?.toUpperCase().trim();
    if (user !== q.code) {
       user = prompt(`Second try:\n${q.question}`)?.toUpperCase().trim();
    }
    score += (user === q.code) ? 10 : -2; 
    answers.push({
        number : i + 1,
        question : q.question,
        user : user || "No answer",
        correctCode : q.code,
        correctAnswer : q.answer
    });
    i++;
}

alert(`Game Over :)\nScore: ${score}\nCheck the console for feedback. `);

console.log();
console.log("=== Quiz Report ===");
console.log(`Final Score: ${score}`);
console.log("-------------------");
let j = 0;
while (j < answers.length) {
    let a = answers[j];
   if (a.user === a.correctCode) {
    console.log(`Q${a.number} ✅ correct (${a.user}) → ${a.correctAnswer}`);
} else {
    console.log(`Q${a.number}: ❌ Wrong (yours=${a.user}, correct=${a.correctCode} → ${a.correctAnswer})`);
}
j++;
}


console.log("----------------------");
if (score === 80) {
    console.log("Excelent keep it up. ");
}else if (score >= 50) {
    console.log("Good, Practice more. ");
}else {
    console.log("Try again. ");
}
console.log("----------------------");

