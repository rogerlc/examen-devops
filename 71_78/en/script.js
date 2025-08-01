function grade() {
  const questionsDivs = document.querySelectorAll(".question");

  questionsDivs.forEach((div, index) => {
    const inputs = div.querySelectorAll("input");
    const correctAnswers = questions[index].correct; // array of correct answers
    const selectedAnswers = Array.from(inputs)
      .filter(input => input.checked)
      .map(input => input.value);

    // Clear previous classes
    inputs.forEach(input => {
      input.parentElement.classList.remove("correct", "incorrect");
    });

    // Check if selected answers exactly match correct answers
    const allCorrect =
      selectedAnswers.length === correctAnswers.length &&
      selectedAnswers.every(ans => correctAnswers.includes(ans));

    inputs.forEach(input => {
      if (input.checked) {
        if (correctAnswers.includes(input.value)) {
          input.parentElement.classList.add("correct");
        } else {
          input.parentElement.classList.add("incorrect");
        }
      } else {
        // If not checked but is correct, show as correct to guide user
        if (correctAnswers.includes(input.value)) {
          input.parentElement.classList.add("correct");
        }
      }
    });
  });
}

function showExplanations() {
  document.querySelectorAll(".explanation").forEach(e => {
    e.style.display = "block";
  });
}

function review() {
  document.querySelectorAll("label").forEach(label => {
    label.classList.remove("correct", "incorrect");
  });
  document.querySelectorAll(".explanation").forEach(e => {
    e.style.display = "none";
  });
}

function resetQuiz() {
  document.querySelectorAll("input").forEach(input => {
    input.checked = false;
  });
  review();
}
