const quizForm = document.getElementById("quizForm");

quizForm.onsubmit = function(event) {
    event.preventDefault();

    const answers = {
        q1: "b",
        q2: "d",
        q3: "a",
        q4: "c",
        q5: "b",
        q6: "d",
        q7: "a",
        q8: "c"
    };

    let score = 0;

    for (let key in answers) {
        const selected = document.querySelector(
            'input[name="' + key + '"]:checked'
        );

        if (!selected) {
            document.getElementById("result").textContent =
                "يرجى الإجابة عن جميع الأسئلة أولاً.";
            return false;
        }

        if (selected.value === answers[key]) {
            score++;
        }
    }

    let message;

    if (score === 8) {
        message = "ممتاز! أنتِ خبيرة في الوعي البيئي 🌟";
    } else if (score >= 6) {
        message = "رائع جدًا! معلوماتك قوية 💚";
    } else if (score >= 4) {
        message = "جيد! واصلي التعلم 🌱";
    } else {
        message = "حاولي مرة ثانية، أنتِ قادرة! 💪";
    }

    document.getElementById("result").textContent =
        "نتيجتك: " + score + " من 8 — " + message;

    return false;
};
document.getElementById("resetQuiz").addEventListener("click", function() {

    document.getElementById("quizForm").reset();

    document.getElementById("result").textContent = "";

});
