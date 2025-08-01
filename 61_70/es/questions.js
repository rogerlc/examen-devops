const questions = [
  {
    question: "61/78: ¿Cuál es el propósito de un archivo PID?",
    options: [
      "Stores child processes' IDs to be used by systemd",
      "Contains the process ID of a given program",
      "Used by systemd to trace parent process"
    ],
    correct: ["Contains the process ID of a given program"],
    explanation: "Un archivo PID contiene el ID del proceso de un programa específico."
  },
  {
    question: "62/78: ¿Qué comando(s) mostrarán todos los puertos en escucha junto con los nombres de los servicios?",
    options: [
      "$ sudo ps -a -net",
      "$ sudo netstat -tulnap",
      "OS netstat -tulnap",
      "$ netstat -as"
    ],
    correct: ["$ sudo netstat -tulnap"],
    explanation: "El comando 'netstat -tulnap' muestra puertos TCP/UDP en escucha con información de programas."
  },
  {
    question: "63/78: ¿Cómo verificar el código de salida del comando ejecutado previamente en la consola?",
    options: ["echo $exitcode", "echo $?", "echo $#", "echo $code"],
    correct: ["echo $?"],
    explanation: "El código de salida del último comando se muestra con 'echo $?'."
  },
  {
    question: "64/78: ¿Cómo actualizar el paquete wget?",
    options: ["yum check-update wget", "yum update", "yum update wget", "yum provides wget"],
    correct: ["yum update wget"],
    explanation: "Para actualizar un paquete específico se usa 'yum update wget'."
  },
  {
    question: "65/78: ¿Qué comando(s) mostrarán los registros MX para epam.com?",
    options: [
      "dig @8.8.8.8 -t MX epam.com",
      "nslookup epam.com",
      "nslookup -querytype=MX epam.com",
      "dig @MX epam.com"
    ],
    correct: ["dig @8.8.8.8 -t MX epam.com", "nslookup -querytype=MX epam.com"],
    explanation: "Ambos comandos consultan registros MX de un dominio."
  },
  {
    question: "66/78: ¿Cómo iniciar un daemon en Linux? Por ejemplo, httpd.",
    options: [
      "systemctl httpd start",
      "service httpd start",
      "daemon httpd start",
      "systemctl start httpd"
    ],
    correct: ["systemctl start httpd"],
    explanation: "El comando correcto para iniciar un servicio con systemd es 'systemctl start httpd'."
  },
  {
    question: "67/78: ¿Qué es un sistema de archivos 'proc'?",
    options: [
      "El sistema de archivos proc es un pseudo-sistema que proporciona una interfaz a utilidades de aplicaciones y usuarios",
      "El sistema de archivos proc es un pseudo-sistema que proporciona una interfaz a las estructuras de datos del kernel.",
      "El sistema de archivos proc es un sistema ext3 que contiene archivos de configuración del kernel."
    ],
    correct: ["El sistema de archivos proc es un pseudo-sistema que proporciona una interfaz a las estructuras de datos del kernel."],
    explanation: "Proc es un pseudo-sistema de archivos que representa datos internos del kernel y procesos."
  },
  {
    question: "68/78: ¿Cuál es la definición de kernel del sistema operativo?",
    options: [
      "Un conjunto de herramientas de software que automatiza la instalación, actualización y configuración de programas.",
      "Programa que interpreta una secuencia de texto introducida por el usuario o un archivo.",
      "Pequeño programa que inicia la secuencia de arranque cargando datos y programas en RAM.",
      "Programa central del sistema operativo con control completo sobre todo en el sistema."
    ],
    correct: ["Programa central del sistema operativo con control completo sobre todo en el sistema."],
    explanation: "El kernel es el núcleo del sistema operativo con control total del hardware y procesos."
  },
  {
    question: "69/78: ¿Cómo verificar el estado de la memoria?",
    options: [
      "Usar comando memory (ej. memory --display)",
      "Leer archivo /proc/meminfo",
      "Usar comando free (ej. free -g)",
      "Se requieren herramientas externas (ej. Prometheus y Grafana)"
    ],
    correct: ["Leer archivo /proc/meminfo", "Usar comando free (ej. free -g)"],
    explanation: "La información de memoria se puede obtener con 'free' o leyendo /proc/meminfo."
  },
  {
    question: "70/78: ¿Cuál de los siguientes ejecutará el comando 'whoami' como el usuario 'test'?",
    options: [
      'su test -c "whoami"',
      "Ninguno de los anteriores",
      'su-test -c "whoami"',
      "sudo -u test whoami"
    ],
    correct: ['su test -c "whoami"', "sudo -u test whoami"],
    explanation: "Ambos comandos ejecutan 'whoami' como el usuario 'test'."
  }
];
