const preguntas = [
  {
    question: "\u00bfCu\u00e1l es el comando que muestra el tama\u00f1o de la lista del historial de comandos en bash?",
    options: [
      "echo $HISTSIZE",
      "history size",
      "echo $PATH",
      "echo $HISTFILE"
    ],
    correct: "echo $HISTSIZE",
    explanation: "La variable de entorno HISTSIZE almacena el n\u00famero de comandos que el shell bash recuerda."
  },
  {
    question: "\u00bfPara qu\u00e9 se utilizan los LVMs (Logical Volume Managers)?",
    options: [
      "Snapshots permiten respaldos congelados con poco tiempo de inactividad.",
      "Usar cualquier n\u00famero de discos como si fuera uno solo.",
      "Tener vol\u00famenes l\u00f3gicos que abarcan varios discos.",
      "Crear vol\u00famenes peque\u00f1os y redimensionarlos din\u00e1micamente."
    ],
    correct: [
      "Snapshots permiten respaldos congelados con poco tiempo de inactividad.",
      "Usar cualquier n\u00famero de discos como si fuera uno solo.",
      "Tener vol\u00famenes l\u00f3gicos que abarcan varios discos.",
      "Crear vol\u00famenes peque\u00f1os y redimensionarlos din\u00e1micamente."
    ],
    explanation: "Estas son todas funciones comunes del sistema LVM en Linux."
  },
  {
    question: "\u00bfPara qu\u00e9 sirve el demonio crond?",
    options: [
      "Ejecutar tareas en horarios programados",
      "Cargar m\u00f3dulos del kernel",
      "Cargar programas al iniciar el sistema",
      "Ejecutar tareas cuando el usuario las solicita"
    ],
    correct: "Ejecutar tareas en horarios programados",
    explanation: "crond se usa para programar tareas autom\u00e1ticas seg\u00fan un cronograma definido."
  },
  {
    question: "\u00bfC\u00f3mo generar una clave SSH en bash script?",
    options: [
      "ssh-keygen -t rsa -f $1 -b 4096",
      "it's not feasable because you must enter passphrase",
      "ssh-keygen -t rsa -f key",
      "ssh-keygen -t rsa -f privkey-N"
    ],
    correct: "ssh-keygen -t rsa -f $1 -b 4096",
    explanation: "Este comando genera una clave SSH RSA de 4096 bits y permite especificar el nombre del archivo como argumento."
  },
  {
    question: "\u00bfC\u00f3mo verificar el uso de inodos?",
    options: [
      "inodes --list",
      "inodes -L",
      "du -i",
      "df -i"
    ],
    correct: "df -i",
    explanation: "df -i muestra el uso de inodos por sistema de archivos."
  },
  {
    question: "\u00bfQu\u00e9 comando muestra los paquetes que contienen un archivo consultado?",
    options: [
      "yum provides filename",
      "yum help filename",
      "yum search filename",
      "yum list filename"
    ],
    correct: "yum provides filename",
    explanation: "El comando 'yum provides' permite buscar qu\u00e9 paquete contiene un archivo dado."
  },
  {
    question: "\u00bfQu\u00e9 c\u00f3digos de salida son posibles en Linux? (elige 2)",
    options: [
      "from 1 to 1024",
      "0",
      "-1",
      "from 1 to 255"
    ],
    correct: ["0", "from 1 to 255"],
    explanation: "Los c\u00f3digos de salida en Linux est\u00e1n entre 0 y 255. 0 indica \u00e9xito."
  },
  {
    question: "\u00bfQu\u00e9 distribuci\u00f3n Linux es fuente original (upstream) de Ubuntu?",
    options: [
      "Slackware Linux",
      "Red Hat Enterprise Linux",
      "non of the above",
      "Debian"
    ],
    correct: "Debian",
    explanation: "Ubuntu est\u00e1 basado directamente en Debian."
  },
  {
    question: "Un administrador desactiv\u00f3 swap con swapoff /swap pero tras reiniciar sigue habilitado. \u00bfPor qu\u00e9?",
    options: [
      "Debi\u00f3 usar swapoff -v /swap",
      "Olvid\u00f3 editar /etc/fstab",
      "Es normal, el sistema no puede funcionar sin swap",
      "No reinici\u00f3 despu\u00e9s de ejecutar el comando"
    ],
    correct: "Olvid\u00f3 editar /etc/fstab",
    explanation: "Para que swap no se active al reiniciar, debe eliminarse su entrada de /etc/fstab."
  },
  {
    question: "\u00bfQu\u00e9 archivo contiene configuraci\u00f3n de shell interactiva no-login (por ejemplo, abierta desde un \u00edcono de Terminal)?",
    options: [
      "~/.bashrc",
      "~/.bash_profile",
      "/etc/bash.bashrc",
      "/etc/shells"
    ],
    correct: "~/.bashrc",
    explanation: "~/.bashrc es el archivo de configuraci\u00f3n de bash para sesiones interactivas no-login."
  }
];
