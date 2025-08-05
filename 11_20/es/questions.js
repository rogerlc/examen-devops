const preguntas = [
  {
    question: '¿Cómo imprimir todas las variables de entorno para el usuario actual?',
    options: ['echo (env)', 'envvars', 'env|sort', 'uservars'],
    correct: 'env|sort',
    explanation: `✅ env | sort Esta opción utiliza el comando env para listar todas las variables de entorno, y sort para ordenarlas alfabéticamente.<br>
Explicación de las otras opciones:<br>
❌ echo (env) → Sintaxis incorrecta en Bash. Podría funcionar en otros shells como fish, pero no en los más comunes como Bash o Zsh. <br>
❌ envvars → No es un comando válido en la mayoría de sistemas Unix/Linux. <br>
❌ uservars → Tampoco es un comando estándar.`
    
  },
  {
    question: '¿Dónde se almacena la tabla de montaje inicial de volúmenes?',
    options: ['/etc/fstab', '/etc/mounts', '/etc/mount/table', '/etc/mounts/fstab'],
    correct: '/etc/fstab',
    explanation: 'El archivo <code>/etc/fstab</code> contiene la tabla de sistemas de archivos que se montan automáticamente al iniciar el sistema.'
  },
  {
    question: 'Elige la forma correcta para hacer que un script/programa sea ejecutable por su nombre desde cualquier directorio',
    options: [
      'Agregar la ruta y nombre del script/programa a la variable PATH',
      'Agregar solo el nombre del script/programa a la variable PATH',
      'Agregar la ruta del script/programa a la variable PATH'
    ],
    correct: 'Agregar la ruta del script/programa a la variable PATH',
    explanation: 'Para ejecutar un script desde cualquier lugar, se debe agregar su <code>ruta</code> a la variable <code>PATH</code>. No se debe agregar solo el nombre ni la ruta completa con nombre.'
  },
  {
    question: '¿De qué sistema depende yum internamente?',
    options: [
      'Ninguno, yum es un sistema independiente',
      'RPM',
      'APT'
    ],
    correct: 'RPM',
    explanation: '<code>yum</code> es una herramienta que gestiona paquetes RPM. No es independiente ni usa APT.'
  },
  {
    question: 'Un usuario quiere tener alias para comandos usados frecuentemente, disponibles al abrir una shell de inicio de sesión. ¿Dónde debería definir esos alias para que sean solo para ese usuario?',
    options: [
      '/etc/environment',
      'Debe ejecutar el comando "alias" para todos los alias y se guardarán automáticamente en un archivo apropiado',
      '~/.bash_profile',
      '/etc/profile'
    ],
    correct: '~/.bash_profile',
    explanation: 'Para que los alias estén disponibles solo para ese usuario y se apliquen al iniciar una shell de inicio de sesión, deben definirse en <code>~/.bash_profile</code>. No se guardan automáticamente ni deben definirse en archivos globales.'
  },
  {
    question: 'Un administrador quiso extender /var/backup que está en un volumen LVM separado. Ejecutó pvcreate, vgextend, lvresize pero el tamaño no cambió. ¿Qué olvidó hacer o hizo mal?',
    options: [
      'Olvidó reiniciar el sistema',
      'Debió ejecutar lvresize -r o mkfs',
      'Olvidó refrescar información del sistema con systemctl-reloadfs',
      'Olvidó editar /etc/fstab'
    ],
    correct: 'Debió ejecutar lvresize -r o mkfs',
    explanation: 'Después de redimensionar el volumen lógico, debe redimensionar el sistema de archivos con <code>lvresize -r</code> o manualmente con <code>resize2fs</code> o <code>mkfs</code>.'
  },
  {
    question: '¿Qué comando busca en las descripciones cortas y nombres de páginas del manual la palabra clave como expresión regular?',
    options: [
      'man -f keyword',
      'ninguna de las anteriores',
      'man -s keyword',
      'man -k keyword'
    ],
    correct: 'man -k keyword',
    explanation: '<code>man -k</code> busca en los nombres y descripciones breves de las páginas del manual usando una palabra clave. Equivale a <code>apropos</code>.'
  },
  {
    question: '¿Dónde se almacenan las claves públicas para autorizar usuarios SSH?',
    options: [
      '/home/usuario/.ssh/known_users',
      '/etc/ssl/keys/public_keys',
      '/home/usuario/.ssh/public_keys',
      '/home/usuario/.ssh/authorized_keys'
    ],
    correct: '/home/usuario/.ssh/authorized_keys',
    explanation: 'Las claves públicas autorizadas para acceder vía SSH se almacenan en <code>~/.ssh/authorized_keys</code>.'
  },
  {
    question: '¿Qué es un proceso zombie?',
    options: [
      'Un proceso que se reinicia después de matarlo (usando el comando kill)',
      'Un proceso que usa recursos de otro proceso',
      'Un proceso que ha terminado su ejecución pero aún tiene una entrada en la tabla de procesos',
      'No existe el tipo proceso zombie en Linux'
    ],
    correct: 'Un proceso que ha terminado su ejecución pero aún tiene una entrada en la tabla de procesos',
    explanation: 'Un proceso zombie es aquel que terminó, pero su padre no ha recogido su estado, por lo que permanece en la tabla de procesos.'
  }
];

