const questions = [
  {
    question: "51/78: What is the purpose of /proc folder?",
    options: [
      "essential system binaries",
      "process and kernel information files",
      "application cache data",
      "libraries and kernel modules",
      "none of the above"
    ],
    correct: ["process and kernel information files"],
    explanation: "The /proc directory contains virtual files that provide information about processes and kernel."
  },
  {
    question: "52/78: Where is the home directory for root user?",
    options: [
      "/etc/root",
      "/home/root",
      "/root"
    ],
    correct: ["/root"],
    explanation: "The root user's home directory is /root."
  },
  {
    question: "53/78: How to list all packages installed in the system and in remote repositories?",
    options: [
      "yum repolist",
      "yum list installed && yum list available",
      "yum info",
      "yum list"
    ],
    correct: ["yum list installed && yum list available"],
    explanation: "This command lists both installed packages and those available in repositories."
  },
  {
    question: "54/78: What are daemons?",
    options: [
      "Daemons are demons (It's typo!).",
      "Daemons are special code in kernel module that may not be available at boot time. Daemons are installed by request in runtime.",
      "Daemons are services that provide several functions to communicate with Windows machines.",
      "Daemons are services that provide several functions that may not be available under the base operating system. Its main task is to listen for service request and at the same time to act on these requests."
    ],
    correct: ["Daemons are services that provide several functions that may not be available under the base operating system. Its main task is to listen for service request and at the same time to act on these requests."],
    explanation: "Daemons are background services that listen for requests and perform tasks on demand."
  },
  {
    question: "55/78: Which are not Linux native file systems?",
    options: [
      "ext3",
      "FAT32",
      "XFS",
      "ext4",
      "NTFS"
    ],
    correct: ["FAT32", "NTFS"],
    explanation: "FAT32 and NTFS are file systems native to Windows, not Linux."
  },
  {
    question: "56/78: Given the sample line from /etc/passwd, what command will show configured shells only? vboxadd:x:996:1::/var/run/vboxadd:/bin/false",
    options: [
      "awk -F':' '{print $6}' /etc/passwd",
      "awk '{print $7}' /etc/passwd",
      "awk -F':' '{print $7}' /etc/passwd",
      "awk '{print $6}' /etc/passwd"
    ],
    correct: ["awk -F':' '{print $7}' /etc/passwd"],
    explanation: "The shell is the 7th field in /etc/passwd, fields are colon-separated."
  },
  {
    question: "57/78: What scp command(s) will copy file data.txt to target user's home folder on VM h1?",
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
    explanation: "Both commands copy data.txt to the user's home directory on remote host."
  },
  {
    question: "58/78: What does the following command do? usermod -g hello world",
    options: [
      "creates user world with password hello",
      "adds user world to group hello",
      "changes the global identifier of a user from hello to world",
      "changes the primary group of user world to hello"
    ],
    correct: ["changes the primary group of user world to hello"],
    explanation: "The -g option changes the primary group of the user."
  },
  {
    question: "59/78: What is swap space used for?",
    options: [
      "direct RAM extension for regular use",
      "none of the above",
      "storing inactive memory pages when RAM is full",
      "storing old system files"
    ],
    correct: ["storing inactive memory pages when RAM is full"],
    explanation: "Swap space is used to store inactive pages from RAM to free memory."
  },
  {
    question: "60/78: On top of which OS was Linux originally developed?",
    options: [
      "Solaris",
      "Debian",
      "FreeBSD",
      "Windows",
      "MINIX"
    ],
    correct: ["MINIX"],
    explanation: "Linux was originally developed as a free alternative to MINIX."
  }
];
