const preguntas = [
  {
    question: '¿Qué comando NO es válido para listar las variables de entorno en Linux?',
    options: [
      'echo (env)',
      'env',
      'printenv',
      'env | sort'
    ],
    correct: 'echo (env)',
    explanation: 'La sintaxis `echo (env)` no es un comando válido para listar variables de entorno.'
  },
  {
    question: '¿Cuál de los siguientes no es un comando válido para mostrar variables de entorno?',
    options: [
      'envvars',
      'env',
      'printenv',
      'set'
    ],
    correct: 'envvars',
    explanation: '`envvars` no es un comando estándar en Linux para mostrar variables de entorno.'
  },
  {
    question: '¿Cuál de estos no es un comando para mostrar variables de entorno en Linux?',
    options: [
      'uservars',
      'env',
      'printenv',
      'set'
    ],
    correct: 'uservars',
    explanation: '`uservars` no existe en sistemas Linux para listar variables de entorno.'
  },
  {
    question: '¿Cuál de estos NO es un archivo válido para la tabla de montaje en Linux?',
    options: [
      '/etc/mounts',
      '/etc/fstab',
      '/etc/mtab',
      '/proc/mounts'
    ],
    correct: '/etc/mounts',
    explanation: 'No existe un archivo `/etc/mounts`, aunque a veces se confunde con `/etc/mtab` o `/proc/mounts`.'
  },
  {
    question: '¿Cuál de los siguientes NO es un archivo de configuración válido para montaje de volúmenes?',
    options: [
      '/etc/mount/table',
      '/etc/fstab',
      '/etc/mtab',
      '/proc/mounts'
    ],
    correct: '/etc/mount/table',
    explanation: 'No existe el archivo `/etc/mount/table`.'
  },
  {
    question: '¿Cuál NO es un archivo válido para la tabla de montaje en Linux?',
    options: [
      '/etc/mounts/fstab',
      '/etc/fstab',
      '/etc/mtab',
      '/proc/mounts'
    ],
    correct: '/etc/mounts/fstab',
    explanation: 'No existe `/etc/mounts/fstab`; se confunde con `/etc/fstab`.'
  },
  {
    question: '¿Cuál de estas opciones NO es correcta para hacer un script ejecutable desde cualquier lugar?',
    options: [
      'Agregar la ruta y nombre del script/programa a la variable PATH',
      'Agregar la ruta del script/programa a la variable PATH',
      'Agregar solo el nombre del script/programa a la variable PATH'
    ],
    correct: 'Agregar la ruta y nombre del script/programa a la variable PATH',
    explanation: 'Solo se debe agregar la ruta al PATH, no la ruta completa con el nombre del archivo.'
  },
  {
    question: '¿Qué opción es incorrecta para modificar el PATH y poder ejecutar scripts desde cualquier ubicación?',
    options: [
      'Agregar solo el nombre del script/programa a la variable PATH',
      'Agregar la ruta del script/programa a la variable PATH',
      'Agregar la ruta sin el nombre a la variable PATH'
    ],
    correct: 'Agregar solo el nombre del script/programa a la variable PATH',
    explanation: 'El PATH debe contener rutas, no nombres de archivos.'
  },
  {
    question: '¿Cuál de los siguientes NO es el sistema en el que depende yum?',
    options: [
      'APT',
      'RPM',
      'Ninguno, yum es independiente'
    ],
    correct: 'APT',
    explanation: 'Yum no depende de APT, que es para distribuciones basadas en Debian; yum depende de RPM.'
  }
];
