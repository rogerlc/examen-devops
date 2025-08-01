const questions = [
  {
    question: "71/78: ¿Cuál de las siguientes representa el orden correcto de arranque en la secuencia de boot de Linux?",
    options: [
      "Ninguna de las anteriores",
      "BIOS, Sector de Arranque (con el Cargador de Arranque), Kernel, Disco RAM Inicial, e Inicialización de Dispositivos",
      "BIOS, kernel, cargador de arranque, init, login",
      "Cargador de arranque, BIOS, init, inicialización de dispositivos, montaje de sistemas de archivos, login"
    ],
    correct: ["BIOS, Sector de Arranque (con el Cargador de Arranque), Kernel, Disco RAM Inicial, e Inicialización de Dispositivos"],
    explanation: "La secuencia de arranque de Linux comienza con BIOS, luego el sector de arranque con el cargador de arranque, seguido por la carga del kernel, el disco RAM inicial y la inicialización de dispositivos."
  },
  {
    question: "72/78: ¿Qué comando encontrará todos los archivos que contengan la palabra keyword en su contenido?",
    options: [
      "locate -f keyword",
      "grep -r keyword/",
      "search/-pattern keyword",
      "find/-name keyword -type f"
    ],
    correct: ["grep -r keyword/"],
    explanation: "'grep -r' busca recursivamente un patrón dentro del contenido de los archivos."
  },
  {
    question: "73/78: ¿Cuál es el propósito de un cargador de arranque (boot loader)?",
    options: [
      "Enviar la señal del botón de encendido a la placa base.",
      "Ninguna de las anteriores.",
      "Cargar datos y programas que luego se ejecutan desde la RAM.",
      "Recompilar el kernel de Linux al encender el sistema."
    ],
    correct: ["Cargar datos y programas que luego se ejecutan desde la RAM."],
    explanation: "El cargador de arranque carga el kernel y programas iniciales en la memoria durante el arranque del sistema."
  },
  {
    question: "74/78: ¿Cuáles son los elementos o componentes básicos de Linux?",
    options: [
      "Shell: Es un entorno en el que podemos ejecutar comandos, scripts y programas. Es una interfaz entre el usuario y el kernel que oculta las complejidades del kernel al usuario. Se usa para ejecutar comandos.",
      "Hardware: Es el hardware físico como ratón, teclado, pantalla, CPU, etc.",
      "Librería del Sistema: Son funciones o programas especiales que permiten a las aplicaciones o utilidades del sistema acceder a funciones del kernel sin necesidad de código propio.",
      "Kernel: Se considera el núcleo o parte principal de Linux, responsable de actividades importantes como gestión de procesos y dispositivos.",
      "Utilidades del Sistema: Programas responsables de realizar tareas especializadas e individuales, permitiendo la gestión del sistema por parte de usuarios."
    ],
    correct: [
      "Shell: Es un entorno en el que podemos ejecutar comandos, scripts y programas. Es una interfaz entre el usuario y el kernel que oculta las complejidades del kernel al usuario. Se usa para ejecutar comandos.",
      "Hardware: Es el hardware físico como ratón, teclado, pantalla, CPU, etc.",
      "Librería del Sistema: Son funciones o programas especiales que permiten a las aplicaciones o utilidades del sistema acceder a funciones del kernel sin necesidad de código propio.",
      "Kernel: Se considera el núcleo o parte principal de Linux, responsable de actividades importantes como gestión de procesos y dispositivos.",
      "Utilidades del Sistema: Programas responsables de realizar tareas especializadas e individuales, permitiendo la gestión del sistema por parte de usuarios."
    ],
    explanation: "Estos cinco componentes forman la arquitectura básica de Linux."
  },
  {
    question: "75/78: ¿Para qué operaciones puede usarse yum?",
    options: [
      "Instalación de paquetes de software",
      "Actualizaciones del kernel del sistema",
      "Gestión de dependencias de paquetes"
    ],
    correct: [
      "Instalación de paquetes de software",
      "Actualizaciones del kernel del sistema",
      "Gestión de dependencias de paquetes"
    ],
    explanation: "Yum se usa para instalar paquetes, gestionar dependencias y actualizar kernels."
  },
  {
    question: "76/78: Un archivo tiene modo 755. Si no eres propietario ni miembro del grupo que lo posee, ¿qué puedes hacer con él?",
    options: [
      "Cambiar el grupo propietario del archivo",
      "Abrir el archivo, modificarlo y guardarlo",
      "Cambiar la propiedad del archivo",
      "Ejecutar el archivo"
    ],
    correct: ["Ejecutar el archivo"],
    explanation: "Con modo 755, otros pueden ejecutar pero no modificar ni cambiar propiedad."
  },
  {
    question: "77/78: El administrador quiso habilitar el puerto 443/tcp inmediatamente y permanentemente en la zona por defecto. Ejecutó: $ sudo firewall-cmd --add-port=443/tcp pero tras reiniciar el puerto no quedó habilitado. ¿Qué comando olvidó ejecutar?",
    options: [
      "$ sudo firewall-cmd activate default",
      "$ sudo firewall-cmd --permanent --add-port=443/tcp",
      "$ sudo firewall-cmd save",
      "$ sudo filrewall-cmd --permanent"
    ],
    correct: ["$ sudo firewall-cmd --permanent --add-port=443/tcp"],
    explanation: "Para hacer la adición permanente se debe usar la bandera --permanent antes de recargar."
  },
  {
    question: "78/78: Elige las razones correctas por las cuales no se puede escribir un archivo en disco en Linux (3 respuestas):",
    options: [
      "no hay suficientes inodos",
      "no hay suficientes archivos",
      "no hay suficiente espacio libre",
      "no hay permisos suficientes"
    ],
    correct: ["no hay suficientes inodos", "no hay suficiente espacio libre", "no hay permisos suficientes"],
    explanation: "Los fallos para escribir archivos pueden ser por falta de inodos, espacio en disco o permisos insuficientes."
  }
];
