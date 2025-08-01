const questions = [
  {
    question: "71/78: Which of the following represents the correct boot order of the Linux boot sequence?",
  options: [
    "None of the above",
    "BIOS, Boot Sector (w/ the Boot Loader), Kernel, Initial RAM Disk, and Device Initialization",
    "BIOS, kernel, boot loader, init, login",
    "Boot loader, BIOS, init, device initialization, mount file systems, login"
  ],
  correct: ["BIOS, Boot Sector (w/ the Boot Loader), Kernel, Initial RAM Disk, and Device Initialization"],
  explanation: "The Linux boot sequence starts with BIOS, then Boot Sector with the Boot Loader, followed by Kernel loading, Initial RAM Disk, and Device Initialization."
  },
  {
    question: "72/78: What command will find all files having word keyword in their contents:",
    options: [
      "locate -f keyword",
      "grep -r keyword/",
      "search/-pattern keyword",
      "find/-name keyword -type f"
    ],
    correct: ["grep -r keyword/"],
    explanation: "'grep -r' recursively searches for a pattern within files' contents."
  },
  {
    question: "73/78: What is the purpose of a boot loader?",
    options: [
      "to send the signal from the power button to the motherboard.",
      "non of the above.",
      "to load data and programs which are then executed from RAM.",
      "to recompile Linux kernel on system power on."
    ],
    correct: ["to load data and programs which are then executed from RAM."],
    explanation: "The boot loader loads the kernel and initial programs into memory during system startup."
  },
  {
    question: "74/78: What are basic elements or components of Linux?",
    options: [
      "Shell: It is an environment in which we can run our commands, shell scripts, and programs. It is an interface between user and kernel that hides all complexities of functions of the kernel from the user. It is used to execute commands.",
      "Hardware: It is physical hardware that includes items such as a mouse, keyboard, display, CPU, etc.",
      "System Library: These are special functions or programs with the help of which application programs or system utilities can access features of the kernel without any requirement of code. It is simply used to implement the functionality of the OS.",
      "Kernel: It is considered a core or main part of Linux and is generally responsible for all major activities of OS such as process management, device management, etc.",
      "System Utility: These are utility programs that are responsible to perform specialized and individual-level tasks. They are considered more liable and allow users to manage the computer."
    ],
    correct: [
      "Shell: It is an environment in which we can run our commands, shell scripts, and programs. It is an interface between user and kernel that hides all complexities of functions of the kernel from the user. It is used to execute commands.",
      "Hardware: It is physical hardware that includes items such as a mouse, keyboard, display, CPU, etc.",
      "System Library: These are special functions or programs with the help of which application programs or system utilities can access features of the kernel without any requirement of code. It is simply used to implement the functionality of the OS.",
      "Kernel: It is considered a core or main part of Linux and is generally responsible for all major activities of OS such as process management, device management, etc.",
      "System Utility: These are utility programs that are responsible to perform specialized and individual-level tasks. They are considered more liable and allow users to manage the computer."
    ],
    explanation: "These five components form the basic architecture of Linux."
  },
  {
    question: "75/78: Which operations can yum be used for?",
    options: [
      "Software package installation",
      "System kernel upgrades",
      "Software package dependency management"
    ],
    correct: [
      "Software package installation",
      "System kernel upgrades",
      "Software package dependency management"
    ],
    explanation: "Yum can be used to install packages, manage dependencies, and upgrade system kernels."
  },
  {
    question: "76/78: A file has a mode of 755. If you don't own this file and isn't a member of the group that owns the file, what can you do with it?",
    options: [
      "change the group that owns the file",
      "open the file, make changes, and save the file",
      "change ownership of the file",
      "can execute the file"
    ],
    correct: ["can execute the file"],
    explanation: "With mode 755, others can execute but not modify or change ownership."
  },
  {
    question: "77/78: Administrator wanted to enable port 443/tcp immediately and permanently in default zone. He issued the following command, but it turned out after restart that port was not enabled. What command did he forget to run additionally? $ sudo firewall-cmd --add-port=443/tcp",
    options: [
      "$ sudo firewall-cmd activate default",
      "$ sudo firewall-cmd --permanent --add-port=443/tcp",
      "$ sudo firewall-cmd save",
      "$ sudo filrewall-cmd --permanent"
    ],
    correct: ["$ sudo firewall-cmd --permanent --add-port=443/tcp"],
    explanation: "To make the port addition permanent, the --permanent flag is required before reloading."
  },
  {
    question: "78/78: Choose correct reasons of impossibility to write file to disk in Linux (3 answers)",
    options: [
      "not enough inodes",
      "not enough files",
      "not enough free space",
      "not enough permissions"
    ],
    correct: ["not enough inodes", "not enough free space", "not enough permissions"],
    explanation: "File write failures can be caused by lack of inodes, lack of disk space, or insufficient permissions."
  }
];
