const preguntas = [
  {
    question: `In what file are you likely to find the following lines?<br>"domain google.com<br>nameserver 8.8.8.8<br>nameserver 10.10.10.1"`,
    options: ['/etc/hosts', '/etc/fstab', '/etc/services', '/etc/resolv.conf'],
    correct: '/etc/resolv.conf',
    explanation: 'El archivo <code>/etc/resolv.conf</code> se usa para la configuración del resolver DNS.'
  },
  {
    question: 'What are the default ports used for DNS, SSH?',
    options: [
      'SSH: UDP/22 port',
      'DNS TCP/53 port',
      'DNS: UDP/53 port',
      'SSH: TCP/22 port'
    ],
    correct: ['DNS: UDP/53 port', 'SSH: TCP/22 port'],
    explanation: 'DNS usa UDP/53 y SSH usa TCP/22 por defecto. TCP/53 se usa en casos especiales, y UDP/22 no es válido.'
  },
  {
    question: 'How to exit from vi editors?',
    options: [
      'Choose File-> Close in main menu',
      'ZZ',
      ':wq',
      ':q!'
    ],
    correct: ['ZZ', ':wq', ':q!'],
    explanation: 'Para salir de vi: <code>ZZ</code> guarda y sale, <code>:wq</code> guarda y sale, <code>:q!</code> sale sin guardar. La opción del menú gráfico no es válida.'
  },
  {
    question: 'How to install vim in Ubuntu?',
    options: [
      'sudo apt install vim',
      'sudo yum install vim',
      'sudo apt-install vim',
      'sudo apt-get install vim'
    ],
    correct: ['sudo apt install vim', 'sudo apt-get install vim'],
    explanation: 'Ubuntu usa <code>apt</code> o <code>apt-get</code> para instalar paquetes. Ambas son válidas, pero <code>apt</code> es más moderno. <code>yum</code> es para CentOS, y <code>apt-install</code> es incorrecto.'
  },
  {
    question: 'What is the UID of the root user?',
    options: ['10', '1', '0', '100'],
    correct: '0',
    explanation: 'El UID 0 está reservado para el usuario <code>root</code>.'
  },
  {
    question: 'Which of the following commands install openjdk package on Centos 7?',
    options: [
      'alternatives --config java-1.8.0-openjdk',
      'yum install java-1.8.0-openjdk',
      'wget https://openjdk.java.net/install/openjdk-11*_bin.tar.gz',
      'rpm -i openjdk8.rpm'
    ],
    correct: 'yum install java-1.8.0-openjdk',
    explanation: 'CentOS 7 usa <code>yum install</code> para instalar paquetes, incluyendo OpenJDK.'
  },
  {
    question: 'Correct permissions for .ssh dir are ...',
    options: ['300', '600', '500', '700'],
    correct: '700',
    explanation: 'El directorio <code>.ssh</code> debe tener permisos 700 para evitar accesos no autorizados.'
  },
  {
    question: 'What does the following command do? userdel le_user',
    options: ['deletes group le_user', 'deletes /home/le_user directory', 'deletes user le_user'],
    correct: 'deletes user le_user',
    explanation: '<code>userdel</code> elimina el usuario, pero no borra su home por defecto.'
  },
  {
    question: 'What is sticky bit used for in Linux?',
    options: [
      'To prevent deletion of files owned by other users in shared folders',
      'To prevent execution of files owned by other users in shared folders',
      'To execute files under the users who created the file'
    ],
    correct: 'To prevent deletion of files owned by other users in shared folders',
    explanation: 'El sticky bit evita que usuarios borren archivos de otros en carpetas compartidas como /tmp.'
  },
  {
    question: 'Which file extensions make file executable on Linux?',
    options: ['.bash', '.sh', '.magic', '.exe', '.run', 'none of the above'],
    correct: 'none of the above',
    explanation: 'En Linux no importan las extensiones, el permiso de ejecución es lo que hace ejecutable un archivo.'
  }
];
