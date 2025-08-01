const questions = [
  {
    question: "61/78: What is the purpose of a PID file?",
    options: [
      "Stores child processes' IDs to be used by systemd",
      "Contains the process ID of a given program",
      "Used by systemd to trace parent process"
    ],
    correct: ["Contains the process ID of a given program"],
    explanation: "✅ Contiene el ID del proceso de un programa dado. Este archivo ayuda a otros procesos o scripts a identificar si un servicio está corriendo."
  },
  {
    question: "62/78: What command(s) will show all listening ports alongside with services names?",
    options: [
      "$ sudo ps-a-net",
      "$ sudo netstat -tulnap",
      "OS netstat-tulnap",
      "$ netstat -as"
    ],
    correct: ["$ sudo netstat -tulnap"],
    explanation: "✅ El comando correcto es `$ sudo netstat -tulnap`. Muestra todos los puertos escuchando junto con los nombres de servicios y PID."
  },
  {
    question: "63/78: How to check exit code of previously executed command in console?",
    options: [
      "echo $exitcode",
      "echo $?",
      "echo $#",
      "echo $code"
    ],
    correct: ["echo $?"],
    explanation: "✅ `echo $?` imprime el código de salida del último comando ejecutado. Es útil para saber si un comando fue exitoso (0) o falló (otro número)."
  },
  {
    question: "64/78: How to update wget package?",
    options: [
      "yum check-update wget",
      "yum update",
      "yum update wget",
      "yum provides wget"
    ],
    correct: ["yum update wget"],
    explanation: "✅ `yum update wget` actualiza específicamente el paquete `wget` a su versión más reciente disponible en los repositorios."
  },
  {
    question: "65/78: What command(s) will show MX records for epam.com?",
    options: [
      "dig @8.8.8.8 -t MX epam.com",
      "nslookup epam.com",
      "nslookup -querytype=MX epam.com",
      "dig @MX epam.com"
    ],
    correct: ["dig @8.8.8.8 -t MX epam.com", "nslookup -querytype=MX epam.com"],
    explanation: "✅ Ambas son correctas: `dig @8.8.8.8 -t MX epam.com` y `nslookup -querytype=MX epam.com` muestran los registros MX (Mail Exchange) del dominio."
  },
  {
    question: "66/78: How to start a daemon in Linux? Let's say this is httpd.",
    options: [
      "systemctl httpd start",
      "service httpd start",
      "daemon httpd start",
      "systemctl start httpd"
    ],
    correct: ["service httpd start", "systemctl start httpd"],
    explanation: "✅ Las formas modernas y tradicionales de iniciar un daemon como `httpd` son `service httpd start` (más antiguo) y `systemctl start httpd` (moderno con systemd)."
  },
  {
    question: "67/78: What is a \"proc\" filesystem?",
    options: [
      "The proc filesystem is a pseudo-filesystem which provides an interface to application and user utililties",
      "The proc filesystem is a pseudo-filesystem which provides an interface to kernel data structures.",
      "The proc filesystem is an ext3 filesystem which contains kernel configuration files."
    ],
    correct: ["The proc filesystem is a pseudo-filesystem which provides an interface to kernel data structures."],
    explanation: "✅ `/proc` es un sistema de archivos virtual que proporciona una interfaz a las estructuras de datos del kernel, útil para diagnósticos del sistema."
  },
  {
    question: "68/78: What is the definition of OS kernel?",
    options: [
      "a collection of software tools that automates the process of installing, upgrading, configuring, and removing computer programs for a computer's operating system in a consistent manner.",
      "computer program designed to interpret a sequence of lines of text which may be entered by a user, read from a file or another kind of data stream.",
      "small program that starts booting sequence. This small program's only job is to load other data and programs which are then executed from RAM.",
      "a computer program that is the core of a computer's operating system, with complete control over everything in the system."
    ],
    correct: ["a computer program that is the core of a computer's operating system, with complete control over everything in the system."],
    explanation: "✅ El kernel es el núcleo del sistema operativo, controla completamente el hardware y gestiona la comunicación entre procesos y recursos."
  },
  {
    question: "69/78: How can you check the memory status?",
    options: [
      "Use memory command (.e.g, memory --display)",
      "Read /proc/meninfo file",
      "Use free command (e.g, free-g)",
      "External monitoring tools are required (e.g, Prometheus and Grafana)"
    ],
    correct: ["Use free command (e.g, free-g)"],
    explanation: "✅ El comando `free -g` (o `free`) muestra el estado de la memoria RAM en tiempo real, incluyendo uso, libre, buffers y caché."
  },
  {
    question: "70/78: Which of the following will execute \"whoami\" command under user \"test\"?",
    options: [
      "su test -c \"whoami\"",
      "Non of the above",
      "su-test -c \"whoami\"",
      "sudo -u test whoami"
    ],
    correct: ["su test -c \"whoami\"", "sudo -u test whoami"],
    explanation: "✅ Ambos comandos permiten ejecutar `whoami` bajo el usuario `test`: `su test -c \"whoami\"` y `sudo -u test whoami`."
  }
];
