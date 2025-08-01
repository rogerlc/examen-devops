const preguntas = [
  {
    question: '¿Qué comando mostrará el tamaño de la lista del historial de comandos en bash?',
    options: ['echo $HISTSIZE', 'history size', 'echo $PATH', 'echo $HISTFILE'],
    correct: 'echo $HISTSIZE',
    explanation: 'La variable <code>$HISTSIZE</code> contiene el tamaño de la lista del historial de comandos.'
  },
  {
    question: '¿Cuál es el propósito de los LVMs?',
    options: [
      'Las snapshots permiten respaldar una copia congelada del sistema con mínimo tiempo fuera de servicio.',
      'Usar cualquier número de discos como un solo disco grande.',
      'Tener volúmenes lógicos distribuidos en varios discos.',
      'Crear volúmenes lógicos pequeños y redimensionarlos dinámicamente.'
    ],
    correct: [
      'Las snapshots permiten respaldar una copia congelada del sistema con mínimo tiempo fuera de servicio.',
      'Usar cualquier número de discos como un solo disco grande.',
      'Tener volúmenes lógicos distribuidos en varios discos.',
      'Crear volúmenes lógicos pequeños y redimensionarlos dinámicamente.'
    ],
    explanation: 'Los LVMs permiten gestionar discos físicos agrupados, crear snapshots y redimensionar volúmenes lógicos dinámicamente.'
  },
  {
    question: '¿Cuál es el propósito de crond?',
    options: [
      'Ejecutar tareas en un horario determinado',
      'Cargar módulos del kernel',
      'Cargar programas al inicio del sistema',
      'Ejecutar tareas cuando las solicita el usuario'
    ],
    correct: 'Ejecutar tareas en un horario determinado',
    explanation: '<code>crond</code> es el demonio que ejecuta tareas programadas (cron jobs).'
  },
  {
    question: '¿Cómo generar una clave SSH en bash script?',
    options: [
      'ssh-keygen -t rsa -f $1 -b 4096',
      'No es factible porque se debe ingresar passphrase',
      'ssh-keygen -t rsa -f key',
      'ssh-keygen -t rsa -f privkey-N"'
    ],
    correct: 'ssh-keygen -t rsa -f $1 -b 4096',
    explanation: 'La opción correcta genera una clave RSA de 4096 bits, con nombre variable para scripts.'
  },
  {
    question: '¿Cómo comprobar el uso de inodos?',
    options: ['inodes --list', 'inodes -L', 'du -i', 'df -i'],
    correct: 'df -i',
    explanation: '<code>df -i</code> muestra la cantidad de inodos usados y disponibles en los sistemas de archivos.'
  },
  {
    question: '¿Qué comando muestra los paquetes que contienen el archivo consultado?',
    options: ['yum provides filename', 'yum help filename', 'yum search filename', 'yum list filename'],
    correct: 'yum provides filename',
    explanation: '<code>yum provides</code> indica qué paquete contiene el archivo solicitado.'
  },
  {
    question: '¿Qué códigos de salida son posibles en Linux? (elige 2)',
    options: ['de 1 a 1024', '0', '-1', 'de 1 a 255'],
    correct: ['0', 'de 1 a 255'],
    explanation: 'Los códigos de salida válidos van de 0 a 255, siendo 0 éxito y >0 error.'
  },
  {
    question: '¿Qué distribución Linux es la fuente upstream de Ubuntu?',
    options: ['Slackware Linux', 'Red Hat Enterprise Linux', 'ninguna de las anteriores', 'Debian'],
    correct: 'Debian',
    explanation: 'Ubuntu deriva de Debian como su distribución base.'
  },
  {
    question: 'Un administrador quiso deshabilitar swap (/swap) pero tras reiniciar seguía habilitado. ¿Qué falló?',
    options: [
      'El administrador debió usar "swapoff -v /swap"',
      'El administrador olvidó editar /etc/fstab',
      'Es normal, el sistema no puede arrancar sin swap',
      'El administrador no reinició inmediatamente después del comando'
    ],
    correct: 'El administrador olvidó editar /etc/fstab',
    explanation: 'Para deshabilitar swap permanentemente hay que eliminar o comentar la entrada en <code>/etc/fstab</code>.'
  },
  {
    question: '¿Qué archivo contiene configuraciones para shells interactivas no-login?',
    options: ['~/.bashrc', '~/.bash_profile', '/etc/bash.bashrc', '/etc/shells'],
    correct: '~/.bashrc',
    explanation: '<code>~/.bashrc</code> contiene configuraciones para shells interactivas no-login.'
  }
];
