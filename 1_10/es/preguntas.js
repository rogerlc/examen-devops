const preguntas = [
  {
    pregunta: `¿En qué archivo es probable encontrar las siguientes líneas?<br>"domain google.com<br>nameserver 8.8.8.8<br>nameserver 10.10.10.1"`,
    opciones: ['/etc/hosts', '/etc/fstab', '/etc/services', '/etc/resolv.conf'],
    correcta: '/etc/resolv.conf',
    explicacion: 'El archivo <code>/etc/resolv.conf</code> se usa para la configuración del resolver DNS.'
  },
  {
    pregunta: '¿Cuáles son los puertos por defecto para DNS y SSH?',
    opciones: [
      'SSH: UDP/22',
      'DNS TCP/53',
      'DNS: UDP/53',
      'SSH: TCP/22'
    ],
    correcta: ['DNS: UDP/53', 'SSH: TCP/22'],
    explicacion: 'DNS usa UDP/53 y SSH usa TCP/22 por defecto. TCP/53 es usado en casos especiales.'
  },
  {
    pregunta: '¿Cómo salir del editor vi?',
    opciones: [
      'Elegir Archivo -> Cerrar en el menú',
      'ZZ',
      ':wq',
      ':q!'
    ],
    correcta: ['ZZ', ':wq', ':q!'],
    explicacion: 'Para salir de vi: <code>ZZ</code> guarda y sale, <code>:wq</code> guarda y sale, <code>:q!</code> sale sin guardar.'
  },
  {
    pregunta: '¿Cómo instalar vim en Ubuntu?',
    opciones: [
      'sudo apt install vim',
      'sudo yum install vim',
      'sudo apt-install vim',
      'sudo apt-get install vim'
    ],
    correcta: ['sudo apt install vim', 'sudo apt-get install vim'],
    explicacion: 'Ubuntu usa <code>apt</code> o <code>apt-get</code>. Ambas son válidas, pero <code>apt</code> es más moderno.'
  },
  {
    pregunta: '¿Cuál es el UID del usuario root?',
    opciones: ['10', '1', '0', '100'],
    correcta: '0',
    explicacion: 'El UID 0 está reservado para el usuario <code>root</code>.'
  },
  {
    pregunta: '¿Qué comando instala openjdk en CentOS 7?',
    opciones: [
      'alternatives --config java-1.8.0-openjdk',
      'yum install java-1.8.0-openjdk',
      'wget https://openjdk.java.net/install/openjdk-11*_bin.tar.gz',
      'rpm -i openjdk8.rpm'
    ],
    correcta: 'yum install java-1.8.0-openjdk',
    explicacion: 'CentOS 7 usa <code>yum install</code> para instalar paquetes.'
  },
  {
    pregunta: '¿Cuáles son los permisos correctos para el directorio .ssh?',
    opciones: ['300', '600', '500', '700'],
    correcta: '700',
    explicacion: 'El directorio <code>.ssh</code> debe tener permisos 700.'
  },
  {
    pregunta: '¿Qué hace el comando userdel le_user?',
    opciones: ['elimina el grupo le_user', 'elimina el directorio /home/le_user', 'elimina el usuario le_user'],
    correcta: 'elimina el usuario le_user',
    explicacion: 'El comando <code>userdel</code> elimina el usuario, pero no su carpeta personal.'
  },
  {
    pregunta: '¿Para qué sirve el sticky bit en Linux?',
    opciones: [
      'Evita que otros usuarios borren archivos ajenos en carpetas compartidas',
      'Evita que otros ejecuten archivos ajenos en carpetas compartidas',
      'Permite ejecutar archivos bajo el usuario que los creó'
    ],
    correcta: 'Evita que otros usuarios borren archivos ajenos en carpetas compartidas',
    explicacion: 'El sticky bit protege archivos de ser eliminados por otros en directorios como /tmp.'
  },
  {
    pregunta: '¿Qué extensiones hacen ejecutable un archivo en Linux?',
    opciones: ['.bash', '.sh', '.magic', '.exe', '.run', 'ninguna de las anteriores'],
    correcta: 'ninguna de las anteriores',
    explicacion: 'En Linux, los permisos determinan si un archivo es ejecutable, no la extensión.'
  }
];
