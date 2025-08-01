/* =========  script.js  ========= */

/* Califica el cuestionario ********************************************/
function calificar() {
  let correctas = 0;
  const total = document.querySelectorAll('.question').length;

  document.querySelectorAll('.question').forEach(pregunta => {
    const correcta = pregunta.dataset.answer.split(',').map(c => c.trim());
    const inputs = pregunta.querySelectorAll('input');

    /* Limpia estilos anteriores */
    pregunta.querySelectorAll('label')
            .forEach(label => label.classList.remove('correct', 'incorrect'));

    const seleccionadas = Array.from(inputs)
                               .filter(input => input.checked)
                               .map(input => input.value);

    const todasCorrectas =
      correcta.length === seleccionadas.length &&
      correcta.every(c => seleccionadas.includes(c)) &&
      seleccionadas.every(s => correcta.includes(s));

    if (todasCorrectas) {
      correctas++;
      inputs.forEach(inp => {
        if (inp.checked) inp.parentElement.classList.add('correct');
      });
    } else {
      /* Marca correctas e incorrectas */
      inputs.forEach(inp => {
        if (inp.checked && !correcta.includes(inp.value)) {
          inp.parentElement.classList.add('incorrect');
        }
        if (!inp.checked && correcta.includes(inp.value)) {
          inp.parentElement.classList.add('correct');
        }
      });
    }
  });

  alert(`Obtuviste ${correctas} de ${total} respuestas correctas.`);
}

/* Muestra todas las explicaciones ************************************/
function mostrarExplicaciones() {
  document.querySelectorAll('.explanation')
          .forEach(exp => (exp.style.display = 'block'));
}

/* Repaso de preguntas incorrectas o vacías ***************************/
function repaso() {
  const preguntas = document.querySelectorAll('.question');
  let contenido = '<h2>Repaso: preguntas incorrectas o sin responder</h2>';
  let contador = 0;

  preguntas.forEach((preg, i) => {
    const correcta = preg.dataset.answer.split(',').map(x => x.trim());
    const seleccionadas = Array.from(
      preg.querySelectorAll('input:checked')
    ).map(inp => inp.value);

    const todasCorrectas =
      correcta.length === seleccionadas.length &&
      correcta.every(c => seleccionadas.includes(c)) &&
      seleccionadas.every(s => correcta.includes(s));

    if (!todasCorrectas) {
      contenido += `
        <form id="repaso-form-${contador}"
              style="margin-bottom:20px;padding:10px;border:1px solid #ccc;">
          <p><strong>Pregunta ${i + 1}:</strong> ${preg.querySelector('p').innerHTML}</p>`;

      preg.querySelectorAll('input').forEach(inp => {
        contenido += `<label>
                        <input type="checkbox" name="repaso-q${contador}" value="${inp.value}">
                        ${inp.value}
                      </label><br>`;
      });

      contenido += `
        <input type="hidden" name="correcta" value="${correcta.join(',')}">
        </form>`;
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
        label.correct  { background:#d4edda; color:#155724; font-weight:bold;
                         display:block; padding:5px; border-radius:4px; }
        label.incorrect{ background:#f8d7da; color:#721c24; font-weight:bold;
                         display:block; padding:5px; border-radius:4px; }
      </style>
      <script>
        document.getElementById('btnCalificar').addEventListener('click', () => {
          for (let i = 0; i < ${contador}; i++) {
            const form = document.getElementById('repaso-form-' + i);
            const correcta = form.querySelector('input[name=correcta]')
                                 .value.split(',').map(x => x.trim());
            const seleccionadas = Array.from(
              form.querySelectorAll('input:checked')
            ).map(inp => inp.value);

            form.querySelectorAll('label')
                .forEach(l => l.classList.remove('correct', 'incorrect'));

            const todasCorrectas =
              correcta.length === seleccionadas.length &&
              correcta.every(c => seleccionadas.includes(c)) &&
              seleccionadas.every(s => correcta.includes(s));

            if (todasCorrectas) {
              form.querySelectorAll('input:checked')
                  .forEach(inp => inp.parentElement.classList.add('correct'));
            } else {
              form.querySelectorAll('input:checked').forEach(inp => {
                if (correcta.includes(inp.value)) {
                  inp.parentElement.classList.add('correct');
                } else {
                  inp.parentElement.classList.add('incorrect');
                }
              });
              form.querySelectorAll('input').forEach(inp => {
                if (!inp.checked && correcta.includes(inp.value)) {
                  inp.parentElement.classList.add('correct');
                }
              });
            }
          }
        });
      <\/script>`;
  }

  /* Abre la ventana de repaso */
  const win = window.open('', 'Repaso',
                          'width=700,height=600,scrollbars=yes');
  win.document.write(`
    <html>
      <head><title>Repaso - Preguntas Incorrectas</title></head>
      <body style="font-family:sans-serif;padding:10px;">
        ${contenido}
      </body>
    </html>
  `);
  win.document.close();
}

/* Reinicia el cuestionario *******************************************/
function reiniciar() {
  document.querySelectorAll('input').forEach(inp => (inp.checked = false));
  document.querySelectorAll('label')
          .forEach(l => l.classList.remove('correct', 'incorrect'));
  document.querySelectorAll('.explanation')
          .forEach(exp => (exp.style.display = 'none'));
}
