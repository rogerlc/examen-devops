const questions = [
  {
    question: "51/78: ¿Cuál es el propósito de la carpeta /proc?",
    options: [
      "essential system binaries",
      "process and kernel information files",
      "application cache data",
      "libraries and kernel modules",
      "none of the above"
    ],
    correct: ["process and kernel information files"],
    explanation: "La carpeta /proc contiene archivos virtuales que proveen información sobre procesos y el kernel."
  },
  {
    question: "52/78: ¿Dónde está el directorio home del usuario root?",
    options: [
      "/etc/root",
      "/home/root",
      "/root"
    ],
    correct: ["/root"],
    explanation: "El directorio home del usuario root es /root."
  },
  {
    question: "53/78: ¿Cómo listar todos los paquetes instalados en el sistema y en repositorios remotos?",
    options: [
      "yum repolist",
      "yum list installed && yum list available",
      "yum info",
      "yum list"
    ],
    correct: ["yum list installed && yum list available"],
    explanation: "Este comando lista tanto los paquetes instalados como los disponibles en los repositorios."
  },
  {
    question: "54/78: ¿Qué son los daemons?",
    options: [
      "Daemons are demons (It's typo!).",
      "Daemons are special code in kernel module that may not be available at boot time. Daemons are installed by request in runtime.",
      "Daemons are services that provide several functions to communicate with Windows machines.",
      "Daemons are services that provide several functions that may not be available under the base operating system. Its main task is to listen for service request and at the same time to act on these requests."
    ],
    correct: ["Daemons are services that provide several functions that may not be available under the base operating system. Its main task is to listen for service request and at the same time to act on these requests."],
    explanation: "Los daemons son servicios que se ejecutan en segundo plano, escuchando solicitudes y actuando cuando se les requiere."
  },
  {
    question: "55/78: ¿Cuáles no son sistemas de archivos nativos de Linux?",
    options: [
      "ext3",
      "FAT32",
      "XFS",
      "ext4",
      "NTFS"
    ],
    correct: ["FAT32", "NTFS"],
    explanation: "FAT32 y NTFS son sistemas de archivos nativos de Windows, no de Linux."
  },
  {
    question: "56/78: Dada esta línea de ejemplo en /etc/passwd, ¿qué comando mostrará sólo los shells configurados? vboxadd:x:996:1::/var/run/vboxadd:/bin/false",
    options: [
      "awk -F':' '{print $6}' /etc/passwd",
      "awk '{print $7}' /etc/passwd",
      "awk -F':' '{print $7}' /etc/passwd",
      "awk '{print $6}' /etc/passwd"
    ],
    correct: ["awk -F':' '{print $7}' /etc/passwd"],
    explanation: "El shell configurado está en el séptimo campo de /etc/passwd, que está separado por dos puntos."
  },
  {
    question: "57/78: ¿Qué comando(s) scp copiarán el archivo data.txt a la carpeta home del usuario destino en la VM h1?",
    options: [
      "$ scp -i john data.txt operator@h1:/home/operator/",
      "$ scp -i john-/data.txt john@h1",
      "$ scp -i john-/data.txt john@h1:~/",
      "$ scp data.txt user@h1:~/"
    ],
    correct: [
      "$ scp -i john data.txt operator@h1:/home/operator/",
      "$ scp data.txt user@h1:~/"
    ],
    explanation: "Ambos comandos copian data.txt al directorio home del usuario remoto."
  },
  {
    question: "58/78: ¿Qué hace el siguiente comando? usermod -g hello world",
    options: [
      "creates user world with password hello",
      "adds user world to group hello",
      "changes the global identifier of a user from hello to world",
      "changes the primary group of user world to hello"
    ],
    correct: ["changes the primary group of user world to hello"],
    explanation: "La opción -g cambia el grupo primario del usuario."
  },
  {
    question: "59/78: ¿Para qué se usa el espacio swap?",
    options: [
      "direct RAM extension for regular use",
      "none of the above",
      "storing inactive memory pages when RAM is full",
      "storing old system files"
    ],
    correct: ["storing inactive memory pages when RAM is full"],
    explanation: "El espacio swap almacena páginas de memoria inactivas cuando la RAM está llena."
  },
  {
    question: "60/78: ¿Sobre qué sistema operativo se desarrolló originalmente Linux?",
    options: [
      "Solaris",
      "Debian",
      "FreeBSD",
      "Windows",
      "MINIX"
    ],
    correct: ["MINIX"],
    explanation: "Linux fue desarrollado inicialmente como una alternativa libre a MINIX."
  }
];
