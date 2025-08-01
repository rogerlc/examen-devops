function gradeQuiz() {
  let correctCount = 0;
  let total = document.querySelectorAll('.question').length;

  document.querySelectorAll('.question').forEach(question => {
    const correctAnswers = question.dataset.answer.split(',').map(c => c.trim());
    const inputs = question.querySelectorAll('input');

    // Clear previous styles
    question.querySelectorAll('label').forEach(label => {
      label.classList.remove('correct', 'incorrect');
    });

    const selected = Array.from(inputs).filter(input => input.checked).map(input => input.value);

    const allCorrect =
      correctAnswers.length === selected.length &&
      correctAnswers.every(c => selected.includes(c)) &&
      selected.every(s => correctAnswers.includes(s));

    if (allCorrect) {
      correctCount++;
      inputs.forEach(input => {
        if (input.checked) input.parentElement.classList.add('correct');
      });
    } else {
      inputs.forEach(input => {
        if (input.checked && !correctAnswers.includes(input.value)) {
          input.parentElement.classList.add('incorrect');
        }
        if (!input.checked && correctAnswers.includes(input.value)) {
          input.parentElement.classList.add('correct');
        }
      });
    }
  });

  alert(`You scored ${correctCount} out of ${total} correct answers.`);
}

function showExplanations() {
  document.querySelectorAll('.explanation').forEach(exp => {
    exp.style.display = 'block';
  });
}

function reviewIncorrect() {
  const questions = document.querySelectorAll('.question');
  let content = '<h2>Review: Incorrect or Unanswered Questions</h2>';
  let count = 0;

  questions.forEach((question, i) => {
    const correctAnswers = question.dataset.answer.split(',').map(x => x.trim());
    const selected = Array.from(question.querySelectorAll('input:checked')).map(input => input.value);

    const allCorrect =
      correctAnswers.length === selected.length &&
      correctAnswers.every(c => selected.includes(c)) &&
      selected.every(s => correctAnswers.includes(s));

    if (!allCorrect) {
      content += `<form id="review-form-${count}" style="margin-bottom:20px; padding:10px; border:1px solid #ccc;">
        <p><strong>Question ${i + 1}:</strong> ${question.querySelector('p').innerHTML}</p>`;

      question.querySelectorAll('input').forEach(input => {
        content += `<label><input type="checkbox" name="review-q${count}" value="${input.value}"> ${input.value}</label><br>`;
      });

      content += `<input type="hidden" name="correct" value="${correctAnswers.join(',')}"></form>`;
      count++;
    }
  });

  if (count === 0) {
    content = '<h2>Congratulations! All answers are correct.</h2>';
  } else {
    content += `
      <button id="btnGradeReview">Grade Review</button>
      <button onclick="window.close()">Close Review</button>
      <style>
        label.correct {
          background-color: #d4edda;
          color: #155724;
          font-weight: bold;
          display: block;
          padding: 5px;
          border-radius: 4px;
        }
        label.incorrect {
          background-color: #f8d7da;
          color: #721c24;
          font-weight: bold;
          display: block;
          padding: 5px;
          border-radius: 4px;
        }
      </style>
      <script>
        document.getElementById('btnGradeReview').addEventListener('click', function() {
          for(let i = 0; i < ${count}; i++) {
            const form = document.getElementById('review-form-' + i);
            const correct = form.querySelector('input[name=correct]').value.split(',').map(x => x.trim());
            const selected = Array.from(form.querySelectorAll('input:checked')).map(input => input.value);

            form.querySelectorAll('label').forEach(label => label.classList.remove('correct', 'incorrect'));

            const allCorrect =
              correct.length === selected.length &&
              correct.every(c => selected.includes(c)) &&
              selected.every(s => correct.includes(s));

            if (allCorrect) {
              form.querySelectorAll('input:checked').forEach(input => input.parentElement.classList.add('correct'));
            } else {
              form.querySelectorAll('input:checked').forEach(input => {
                if (correct.includes(input.value)) {
                  input.parentElement.classList.add('correct');
                } else {
                  input.parentElement.classList.add('incorrect');
                }
              });
              form.querySelectorAll('input').forEach(input => {
                if (!input.checked && correct.includes(input.value)) {
                  input.parentElement.classList.add('correct');
                }
              });
            }
          }
        });
      <\/script>
    `;
  }

  const newWindow = window.open('', 'Review', 'width=700,height=600,scrollbars=yes');
  newWindow.document.write(`
    <html>
      <head><title>Review - Incorrect Questions</title></head>
      <body style="font-family: sans-serif; padding: 10px;">
        ${content}
      </body>
    </html>
  `);
  newWindow.document.close();
}

function resetQuiz() {
  document.querySelectorAll('input').forEach(input => input.checked = false);
  document.querySelectorAll('label').forEach(label => label.classList.remove('correct', 'incorrect'));
  document.querySelectorAll('.explanation').forEach(exp => exp.style.display = 'none');
}
