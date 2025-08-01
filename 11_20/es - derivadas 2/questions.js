const preguntas = [
  {
    question: '¿Cuál de los siguientes NO es un lugar apropiado para definir alias permanentes específicos del usuario?',
    options: [
      '/etc/environment',
      '~/.bash_profile',
      '/etc/profile',
      'Debe ejecutar el comando "alias" para todos los alias y se guardarán automáticamente en un archivo apropiado'
    ],
    correct: '/etc/environment',
    explanation: '/etc/environment no es el lugar adecuado para definir alias; es para variables de entorno globales.'
  },
  {
    question: '¿Qué afirmación es incorrecta respecto a los alias en Linux?',
    options: [
      'Los alias deben definirse en archivos como ~/.bash_profile para que persistan para un usuario.',
      '/etc/profile puede contener alias para todos los usuarios.',
      'Se debe ejecutar el comando "alias" para todos los alias y se guardarán automáticamente en un archivo apropiado.',
      '/etc/environment no es adecuado para alias.'
    ],
    correct: 'Se debe ejecutar el comando "alias" para todos los alias y se guardarán automáticamente en un archivo apropiado.',
    explanation: 'Los alias no se guardan automáticamente; deben definirse manualmente en archivos de configuración.'
  },
  {
    question: '¿Cuál comando NO busca descripciones cortas y nombres de páginas manual para una palabra clave?',
    options: [
      'man -f keyword',
      'man -s keyword',
      'man -k keyword',
      'ninguna de las anteriores'
    ],
    correct: 'man -s keyword',
    explanation: '`man -s` no realiza búsqueda; `man -k` sí busca por palabra clave.'
  },
  {
    question: '¿Cuál de los siguientes NO es un lugar válido para almacenar claves públicas autorizadas para SSH?',
    options: [
      '/home/usuario/.ssh/known_users',
      '/home/usuario/.ssh/authorized_keys',
      '/etc/ssl/keys/public_keys',
      '/home/usuario/.ssh/public_keys'
    ],
    correct: '/home/usuario/.ssh/known_users',
    explanation: '`known_users` no es usado para almacenar claves públicas autorizadas, sino para hosts conocidos.'
  },
  {
    question: '¿Cuál de las siguientes opciones NO es un error común al extender un volumen LVM y no ver cambios en tamaño?',
    options: [
      'Olvidó reiniciar el sistema',
      'Olvidó refrescar información del sistema con systemctl-reloadfs',
      'Olvidó editar /etc/fstab',
      'Debió ejecutar lvresize -r o mkfs'
    ],
    correct: 'Olvidó reiniciar el sistema',
    explanation: 'No es necesario reiniciar el sistema para que el cambio tenga efecto.'
  },
  {
    question: '¿Cuál de las siguientes afirmaciones sobre procesos zombie es incorrecta?',
    options: [
      'Un proceso zombie se reinicia después de matarlo usando el comando kill',
      'Un proceso zombie usa recursos de otro proceso',
      'Un proceso zombie es aquel que terminó pero aún está en la tabla de procesos',
      'No existen procesos zombie en Linux'
    ],
    correct: 'Un proceso zombie se reinicia después de matarlo usando el comando kill',
    explanation: 'Un proceso zombie no se reinicia, simplemente está "muerto" pero no recolectado.'
  }
];
