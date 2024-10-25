function checkAnswer(question) {
    const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
    const answerId = `answer${question.charAt(question.length - 1)}`;
    const answerText = document.getElementById(answerId);

    if (selectedOption) {
        if (selectedOption.value === "correct") {
            answerText.innerHTML = "<span class='text-success'>Correct!</span>";
        } else {
            answerText.innerHTML = "<span class='text-danger'>Incorrect. Try again!</span>";
        }
    } else {
        answerText.innerHTML = "<span class='text-warning'>Please select an answer.</span>";
    }
}
