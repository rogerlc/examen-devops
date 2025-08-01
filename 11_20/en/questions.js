const preguntas = [
  {
    question: 'How to print all environment variables for the current user?',
    options: ['echo (env)', 'envvars', 'env|sort', 'uservars'],
    correct: 'env|sort',
    explanation: 'El comando correcto es <code>env | sort</code>, que lista todas las variables de entorno ordenadas alfabéticamente. Las otras opciones no son comandos válidos en Linux.'
  },
  {
    question: 'Where is the initial volumes mount table stored?',
    options: ['/etc/fstab', '/etc/mounts', '/etc/mount/table', '/etc/mounts/fstab'],
    correct: '/etc/fstab',
    explanation: 'El archivo <code>/etc/fstab</code> contiene la tabla de sistemas de archivos a montar automáticamente al iniciar el sistema.'
  },
  {
    question: 'Please choose a correct way to make script/program runnable by its name from any directory',
    options: [
      'Add script/program path and name to PATH environment variable',
      'Add script/program name to PATH environment variable',
      'Add script/program path to PATH environment var'
    ],
    correct: 'Add script/program path to PATH environment var',
    explanation: 'Para ejecutar un script desde cualquier lugar, se debe agregar su <code>ruta</code> al <code>PATH</code>. No se agrega el nombre ni la ruta completa con nombre.'
  },
  {
    question: 'Which system does yum depend on under the hood?',
    options: [
      'None, yum is an independent system',
      'RPM',
      'APT'
    ],
    correct: 'RPM',
    explanation: '<code>yum</code> es una herramienta que gestiona paquetes RPM. No es independiente ni usa APT.'
  },
  {
    question: 'User wants to have some aliases for frequently used commands already set once he opens a login shell. Aliases should be available for this user only. Where should he place alias definitions?',
    options: [
      '/etc/environment',
      'he should run "alias" command for all aliases he needs, after that they will be saved automatically in a proper file',
      '~/.bash_profile',
      '/etc/profile'
    ],
    correct: '~/.bash_profile',
    explanation: 'Para que los alias estén disponibles solo para el usuario y se apliquen al iniciar una login shell, deben definirse en <code>~/.bash_profile</code>. No se guardan automáticamente ni se deben definir en archivos globales como <code>/etc/environment</code> o <code>/etc/profile</code>.'
  },
  {
    question: 'An administrator wanted to extend /var/backup which resides on a separate lvm volume. He ran the following commands: $ pvcreate ..., $ vgextend ..., $ lvresize.... Eventually he realized that partition size hasn\'t changed. What he forgot to do or did wrong?',
    options: [
      'he forgot to reboot the system',
      'he should have run lvresize -r or mkfs',
      'he forgot to refresh system information by running systemctl-reloadfs',
      'he forgot to edit /etc/fstab'
    ],
    correct: 'he should have run lvresize -r or mkfs',
    explanation: 'Después de redimensionar el volumen lógico, también debe redimensionarse el sistema de archivos con <code>lvresize -r</code> o manualmente con <code>resize2fs</code> o <code>mkfs</code>.'
  },
  {
    question: 'What command will search the short descriptions and manual page names for the keyword keyword as regular expression:',
    options: [
      'man -f keyword',
      'none of the above',
      'man -s keyword',
      'man -k keyword'
    ],
    correct: 'man -k keyword',
    explanation: '<code>man -k</code> busca en los nombres y descripciones breves de las páginas del manual usando una palabra clave. Es equivalente a <code>apropos</code>.'
  },
  {
    question: 'Where do the public keys for authorizing SSH users stored?',
    options: [
      '/home/username/.ssh/known_users',
      '/etc/ssl/keys/public_keys',
      '/home/username/.ssh/public_keys',
      '/home/username/.ssh/authorized_keys'
    ],
    correct: '/home/username/.ssh/authorized_keys',
    explanation: 'Las claves públicas autorizadas para acceder mediante SSH se almacenan en <code>~/.ssh/authorized_keys</code>.'
  },
  {
    question: 'What Is A Zombie?',
    options: [
      'A zombie is a process that restarting after killing them (use `kill..` command)',
      'A zombie is a process that use other process\'s resources',
      'A zombie is a process whose execution is completed but it still has an entry in the process table',
      'There is no zombie process type in Linux systems'
    ],
    correct: 'A zombie is a process whose execution is completed but it still has an entry in the process table',
    explanation: 'Un proceso zombi ha terminado, pero su padre no ha recogido su estado, por lo que permanece en la tabla de procesos.'
  }
];
