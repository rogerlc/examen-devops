/* =========  script.js (English)  ========= */

/* Grade the quiz ********************************************/
function calificar() {
  let correct = 0;
  const total = document.querySelectorAll('.question').length;

  document.querySelectorAll('.question').forEach(question => {
    const correctAnswer = question.dataset.answer.split(',').map(c => c.trim());
    const inputs = question.querySelectorAll('input');

    // Clear previous styles
    question.querySelectorAll('label')
            .forEach(label => label.classList.remove('correct', 'incorrect'));

    const selected = Array.from(inputs)
                          .filter(input => input.checked)
                          .map(input => input.value);

    const allCorrect =
      correctAnswer.length === selected.length &&
      correctAnswer.every(c => selected.includes(c)) &&
      selected.every(s => correctAnswer.includes(s));

    if (allCorrect) {
      correct++;
      inputs.forEach(inp => {
        if (inp.checked) inp.parentElement.classList.add('correct');
      });
    } else {
      // Highlight correct and incorrect answers
      inputs.forEach(inp => {
        if (inp.checked && !correctAnswer.includes(inp.value)) {
          inp.parentElement.classList.add('incorrect');
        }
        if (!inp.checked && correctAnswer.includes(inp.value)) {
          inp.parentElement.classList.add('correct');
        }
      });
    }
  });

  alert(`You got ${correct} out of ${total} questions correct.`);
}

/* Show all explanations ********************************************/
function mostrarExplicaciones() {
  document.querySelectorAll('.explanation')
          .forEach(exp => (exp.style.display = 'block'));
}

/* Review incorrect or unanswered questions **************************/
function repaso() {
  const questions = document.querySelectorAll('.question');
  let content = '<h2>Review: Incorrect or Unanswered Questions</h2>';
  let count = 0;

  questions.forEach((q, i) => {
    const correctAnswer = q.dataset.answer.split(',').map(x => x.trim());
    const selected = Array.from(
      q.querySelectorAll('input:checked')
    ).map(inp => inp.value);

    const allCorrect =
      correctAnswer.length === selected.length &&
      correctAnswer.every(c => selected.includes(c)) &&
      selected.every(s => correctAnswer.includes(s));

    if (!allCorrect) {
      content += `
        <form id="review-form-${count}"
              style="margin-bottom:20px;padding:10px;border:1px solid #ccc;">
          <p><strong>Question ${i + 1}:</strong> ${q.querySelector('p').innerHTML}</p>`;

      q.querySelectorAll('input').forEach(inp => {
        content += `<label>
                      <input type="checkbox" name="review-q${count}" value="${inp.value}">
                      ${inp.value}
                    </label><br>`;
      });

      content += `
        <input type="hidden" name="correct" value="${correctAnswer.join(',')}">
        </form>`;
      count++;
    }
  });

  if (count === 0) {
    content = '<h2>Congratulations! All your answers are correct.</h2>';
  } else {
    content += `
      <button id="btnGrade">Grade Review</button>
      <button onclick="window.close()">Close Review</button>
      <style>
        label.correct  { background:#d4edda; color:#155724; font-weight:bold;
                         display:block; padding:5px; border-radius:4px; }
        label.incorrect{ background:#f8d7da; color:#721c24; font-weight:bold;
                         display:block; padding:5px; border-radius:4px; }
      </style>
      <script>
        document.getElementById('btnGrade').addEventListener('click', () => {
          for (let i = 0; i < ${count}; i++) {
            const form = document.getElementById('review-form-' + i);
            const correct = form.querySelector('input[name=correct]')
                                .value.split(',').map(x => x.trim());
            const selected = Array.from(
              form.querySelectorAll('input:checked')
            ).map(inp => inp.value);

            form.querySelectorAll('label')
                .forEach(l => l.classList.remove('correct', 'incorrect'));

            const allCorrect =
              correct.length === selected.length &&
              correct.every(c => selected.includes(c)) &&
              selected.every(s => correct.includes(s));

            if (allCorrect) {
              form.querySelectorAll('input:checked')
                  .forEach(inp => inp.parentElement.classList.add('correct'));
            } else {
              form.querySelectorAll('input:checked').forEach(inp => {
                if (correct.includes(inp.value)) {
                  inp.parentElement.classList.add('correct');
                } else {
                  inp.parentElement.classList.add('incorrect');
                }
              });
              form.querySelectorAll('input').forEach(inp => {
                if (!inp.checked && correct.includes(inp.value)) {
                  inp.parentElement.classList.add('correct');
                }
              });
            }
          }
        });
      <\/script>`;
  }

  // Open new review window
  const win = window.open('', 'Review',
                          'width=700,height=600,scrollbars=yes');
  win.document.write(`
    <html>
      <head><title>Review - Incorrect Questions</title></head>
      <body style="font-family:sans-serif;padding:10px;">
        ${content}
      </body>
    </html>
  `);
  win.document.close();
}

/* Reset quiz ********************************************/
function reiniciar() {
  document.querySelectorAll('input').forEach(inp => (inp.checked = false));
  document.querySelectorAll('label')
          .forEach(l => l.classList.remove('correct', 'incorrect'));
  document.querySelectorAll('.explanation')
          .forEach(exp => (exp.style.display = 'none'));
}
