function calificar() {
  let correctas = 0;
  const total = document.querySelectorAll('.question').length;

  document.querySelectorAll('.question').forEach(pregunta => {
    const respuestasCorrectas = pregunta.dataset.answer.split(',').map(c => c.trim());
    const inputs = pregunta.querySelectorAll('input');

    // Limpiar estilos anteriores
    pregunta.querySelectorAll('label').forEach(label => {
      label.classList.remove('correct', 'incorrect');
    });

    const seleccionadas = Array.from(inputs).filter(input => input.checked).map(input => input.value);

    const todasCorrectas =
      respuestasCorrectas.length === seleccionadas.length &&
      respuestasCorrectas.every(c => seleccionadas.includes(c)) &&
      seleccionadas.every(s => respuestasCorrectas.includes(s));

    if (todasCorrectas) {
      correctas++;
      inputs.forEach(input => {
        if (input.checked) input.parentElement.classList.add('correct');
      });
    } else {
      inputs.forEach(input => {
        if (input.checked && !respuestasCorrectas.includes(input.value)) {
          input.parentElement.classList.add('incorrect');
        }
        if (!input.checked && respuestasCorrectas.includes(input.value)) {
          input.parentElement.classList.add('correct');
        }
      });
    }
  });

  alert(`Obtuviste ${correctas} de ${total} respuestas correctas.`);
}

function mostrarExplicaciones() {
  document.querySelectorAll('.explanation').forEach(exp => {
    exp.style.display = 'block';
  });
}

function repaso() {
  const preguntas = document.querySelectorAll('.question');
  let contenido = '<h2>Repaso: Preguntas incorrectas o sin responder</h2>';
  let contador = 0;

  preguntas.forEach((pregunta, i) => {
    const correctas = pregunta.dataset.answer.split(',').map(c => c.trim());
    const seleccionadas = Array.from(pregunta.querySelectorAll('input:checked')).map(input => input.value);

    const todasCorrectas =
      correctas.length === seleccionadas.length &&
      correctas.every(c => seleccionadas.includes(c)) &&
      seleccionadas.every(s => correctas.includes(s));

    if (!todasCorrectas) {
      contenido += `<form id="repaso-form-${contador}" style="margin-bottom:20px; padding:10px; border:1px solid #ccc;">
        <p><strong>Pregunta ${i + 1}:</strong> ${pregunta.querySelector('p').innerHTML}</p>`;

      pregunta.querySelectorAll('input').forEach(input => {
        contenido += `<label><input type="checkbox" name="repaso-q${contador}" value="${input.value}"> ${input.value}</label><br>`;
      });

      contenido += `<input type="hidden" name="correcta" value="${correctas.join(',')}"></form>`;
      contador++;
    }
  });

  if (contador === 0) {
    contenido = '<h2>¡Felicidades! Todas las respuestas son correctas.</h2>';
  } else {
    contenido += `
      <button id="btnCalificar">Calificar repaso</button>
      <button onclick="window.close()">Cerrar repaso</button>
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
        document.getElementById('btnCalificar').addEventListener('click', function() {
          for(let i = 0; i < ${contador}; i++) {
            const form = document.getElementById('repaso-form-' + i);
            const correctas = form.querySelector('input[name=correcta]').value.split(',').map(x => x.trim());
            const seleccionadas = Array.from(form.querySelectorAll('input:checked')).map(input => input.value);

            form.querySelectorAll('label').forEach(label => label.classList.remove('correct', 'incorrect'));

            const todasCorrectas =
              correctas.length === seleccionadas.length &&
              correctas.every(c => seleccionadas.includes(c)) &&
              seleccionadas.every(s => correctas.includes(s));

            if (todasCorrectas) {
              form.querySelectorAll('input:checked').forEach(input => input.parentElement.classList.add('correct'));
            } else {
              form.querySelectorAll('input:checked').forEach(input => {
                if (correctas.includes(input.value)) {
                  input.parentElement.classList.add('correct');
                } else {
                  input.parentElement.classList.add('incorrect');
                }
              });
              form.querySelectorAll('input').forEach(input => {
                if (!input.checked && correctas.includes(input.value)) {
                  input.parentElement.classList.add('correct');
                }
              });
            }
          }
        });
      <\/script>
    `;
  }

  const ventana = window.open('', 'Repaso', 'width=700,height=600,scrollbars=yes');
  ventana.document.write(`
    <html>
      <head><title>Repaso - Preguntas Incorrectas</title></head>
      <body style="font-family: sans-serif; padding: 10px;">
        ${contenido}
      </body>
    </html>
  `);
  ventana.document.close();
}

function reiniciar() {
  document.querySelectorAll('input').forEach(input => input.checked = false);
  document.querySelectorAll('label').forEach(label => label.classList.remove('correct', 'incorrect'));
  document.querySelectorAll('.explanation').forEach(exp => exp.style.display = 'none');
}
