const questions = [
  {
    question: "41/78: ¿Cuál es el nombre del servicio que ejecuta scripts/comandos periódicamente?",
    options: ["cron", "runner", "launcher", "scheduler"],
    correct: ["cron"],
    explanation: "El servicio 'cron' se usa para ejecutar scripts o comandos en horarios programados."
  },
  {
    question: "42/78: ¿Cuál es el directorio por defecto donde se almacenan los logs?",
    options: ["/sys/log", "/etc/log", "/var/log", "/usr/log"],
    correct: ["/var/log"],
    explanation: "Los logs del sistema normalmente se almacenan en el directorio /var/log."
  },
  {
    question: "43/78: user1 ha creado un archivo script.sh en la carpeta /opt con los siguientes atributos: 710 user1:user1. ¿Qué acciones se pueden realizar para que user2 pueda ejecutar este script?",
    options: [
      "chown user2:user1 /opt/script.sh",
      "No se necesita hacer nada, user2 puede ejecutar el script tal cual",
      "chmod 715 /opt/script.sh",
      "chown user1:user2 /opt/script.sh",
      "chmod 711 /opt/script.sh",
      "chown user1:user2 /opt/script.sh && chmod 750 /opt/script.sh"
    ],
    correct: ["chmod 711 /opt/script.sh", "chown user1:user2 /opt/script.sh && chmod 750 /opt/script.sh"],
    explanation: "chmod 711 permite ejecutar el script a otros usuarios. Alternativamente, cambiar el grupo y dar permisos de ejecución al grupo también funciona. La opción 'chmod 715' es inválida para este caso."
  },
  {
    question: "44/78: ¿Qué comando hará una conexión al host H1 a través del host bastión B1 usando la llave id_rsa?",
    options: [
      "$ ssh-proxy B1 -key id_rsa-host H1",
      '$ ssh -i id_rsa -o "ProxyCommand ssh -W %h:%p B1 --target H1"',
      '$ ssh -i id_rsa -o "ProxyCommand ssh -W %h:%p B1" H1',
      '$ ssh-private-key id_rsa -o "ProxyCommand ssh -W %h:%p B1" H1'
    ],
    correct: ['$ ssh -i id_rsa -o "ProxyCommand ssh -W %h:%p B1" H1'],
    explanation: "La sintaxis correcta para conectar vía host bastión con una llave es: ssh -i id_rsa -o \"ProxyCommand ssh -W %h:%p B1\" H1"
  },
  {
    question: "45/78: ¿Qué hará el siguiente comando iptables? $ sudo iptables -L",
    options: [
      "cargar módulo iptables en kernel",
      "listar conexiones actuales",
      "listar la última regla aplicada",
      "listar las reglas en una cadena o todas las cadenas"
    ],
    correct: ["listar las reglas en una cadena o todas las cadenas"],
    explanation: "La opción '-L' lista todas las reglas actuales en las cadenas de iptables."
  },
  {
    question: "46/78: ¿Qué comando(s) mostrará(n) las primeras 10 líneas de un archivo?",
    options: [
      "head -n 10 /var/log/messages",
      "cat -n 10 /var/log/messages",
      "head /var/log/messages",
      "cat /var/log/messages"
    ],
    correct: ["head -n 10 /var/log/messages", "head /var/log/messages"],
    explanation: "Tanto 'head' como 'head -n 10' muestran las primeras 10 líneas de un archivo. 'cat' muestra el archivo completo."
  },
  {
    question: "47/78: ¿Qué significan los siguientes permisos de archivo? -rws--xr-x",
    options: [
      "Usuario - lectura y escritura, sin ejecución; Grupo - ejecución, sin lectura ni escritura; Otros - lectura y ejecución, sin escritura con bit suid",
      "Usuario - lectura, escritura y ejecución; Grupo - ejecución, sin lectura ni escritura; Otros - lectura y ejecución, sin escritura con bit sticky",
      "Usuario - lectura, escritura y ejecución; Grupo - ejecución, sin lectura ni escritura; Otros - lectura y ejecución, sin escritura",
      "Usuario - lectura, escritura y ejecución; Grupo - ejecución, sin lectura ni escritura; Otros - lectura y ejecución, sin escritura con bit suid"
    ],
    correct: ["Usuario - lectura, escritura y ejecución; Grupo - ejecución, sin lectura ni escritura; Otros - lectura y ejecución, sin escritura con bit suid"],
    explanation: "La 's' en la posición de usuario indica SUID (Set User ID). Los permisos coinciden con la última opción."
  },
  {
    question: "48/78: ¿Qué modo de SELinux escribe las violaciones de política en el log de auditoría?",
    options: ["disabled", "none", "permissive", "enforcing"],
    correct: ["permissive"],
    explanation: "En modo 'permissive', SELinux registra las violaciones sin aplicar las políticas."
  },
  {
    question: "49/78: ¿Cómo distinguir si un comando es interno o externo al kernel de Linux?",
    options: ["which command", "type command", "echo $(command)", "check command"],
    correct: ["type command"],
    explanation: "El comando 'type' muestra si un comando es interno (builtin) o un binario externo."
  },
  {
    question: "50/78: ¿Cómo mostrar todas las reglas en iptables?",
    options: [
      "iptables -l",
      "iptables -L",
      "iptables --all",
      "iptables -A"
    ],
    correct: ["iptables -L"],
    explanation: "'iptables -L' lista todas las reglas en todas las cadenas."
  }
];
