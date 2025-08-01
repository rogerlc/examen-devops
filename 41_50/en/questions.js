const questions = [
  {
    question: "41/78: What is the name of the service that runs scripts/commands periodically?",
    options: ["cron", "runner", "launcher", "scheduler"],
    correct: ["cron"],
    explanation: "The 'cron' service is used to run scripts or commands at scheduled times."
  },
  {
    question: "42/78: What is the default log storage directory?",
    options: ["/sys/log", "/etc/log", "/var/log", "/usr/log"],
    correct: ["/var/log"],
    explanation: "System logs are typically stored in the /var/log directory."
  },
  {
    question: "43/78: user1 has created a script.sh file in /opt folder with the following attributes: 710 user1:user1. Which actions can be performed to allow user2 to execute this script?",
    options: [
      "chown user2:user1 /opt/script.sh",
      "Nothing needs to be done, user2 can execute this script as is",
      "chmod 715 /opt/script.sh",
      "chown user1:user2 /opt/script.sh",
      "chmod 711 /opt/script.sh",
      "chown user1:user2 /opt/script.sh && chmod 750 /opt/script.sh"
    ],
    correct: ["chmod 711 /opt/script.sh", "chown user1:user2 /opt/script.sh && chmod 750 /opt/script.sh"],
    explanation: "chmod 711 makes the script executable by others. Alternatively, changing the group and giving group execute permissions also works. The option 'chmod 715' is invalid for this scenario."
  },
  {
    question: "44/78: What command will make a connection to host H1 via bastion host B1 using key id_rsa?",
    options: [
      "$ ssh-proxy B1 -key id_rsa-host H1",
      '$ ssh -i id_rsa -o "ProxyCommand ssh -W %h:%p B1 --target H1"',
      '$ ssh -i id_rsa -o "ProxyCommand ssh -W %h:%p B1" H1',
      '$ ssh-private-key id_rsa -o "ProxyCommand ssh -W %h:%p B1" H1'
    ],
    correct: ['$ ssh -i id_rsa -o "ProxyCommand ssh -W %h:%p B1" H1'],
    explanation: "The correct syntax to connect via a bastion host with a key is: ssh -i id_rsa -o \"ProxyCommand ssh -W %h:%p B1\" H1"
  },
  {
    question: "45/78: Given the following iptables command, what will it do? $ sudo iptables -L",
    options: [
      "load iptables kernel module",
      "list current connections",
      "list last rule being applied",
      "list the rules in a chain or all chains"
    ],
    correct: ["list the rules in a chain or all chains"],
    explanation: "The '-L' option lists all rules currently in the iptables chains."
  },
  {
    question: "46/78: What command(s) will show first 10 lines of file:",
    options: [
      "head -n 10 /var/log/messages",
      "cat -n 10 /var/log/messages",
      "head /var/log/messages",
      "cat /var/log/messages"
    ],
    correct: ["head -n 10 /var/log/messages", "head /var/log/messages"],
    explanation: "Both 'head' and 'head -n 10' show the first 10 lines of a file. The 'cat' command displays the whole file, not just the first 10 lines."
  },
  {
    question: "47/78: What do the following file permissions mean? -rws--xr-x",
    options: [
      "User - allow read, write, deny execute; Group - allow execute, deny read, write; Others - allow read, execute, deny write with suid bit",
      "User - allow read, write, execute; Group - allow execute, deny read, write; Others - allow read, execute, deny write with sticky bit",
      "User - allow read, write, execute; Group - allow execute, deny read, write; Others - allow read, execute, deny write",
      "User - allow read, write, execute; Group - allow execute, deny read, write; Others - allow read, execute, deny write with suid bit"
    ],
    correct: ["User - allow read, write, execute; Group - allow execute, deny read, write; Others - allow read, execute, deny write with suid bit"],
    explanation: "'s' in the user position indicates SUID (Set User ID). The permissions match the last option."
  },
  {
    question: "48/78: Which selinux mode writes policy violations to audit log?",
    options: ["disabled", "none", "permissive", "enforcing"],
    correct: ["permissive"],
    explanation: "In 'permissive' mode, SELinux logs violations but does not enforce policies."
  },
  {
    question: "49/78: How to distinguish whether command is internal or external to Linux kernel?",
    options: ["which command", "type command", "echo $(command)", "check command"],
    correct: ["type command"],
    explanation: "The 'type' command shows if a command is built-in or refers to an external binary."
  },
  {
    question: "50/78: How to display all rules in iptables?",
    options: [
      "iptables -l",
      "iptables -L",
      "iptables --all",
      "iptables -A"
    ],
    correct: ["iptables -L"],
    explanation: "'iptables -L' lists all rules in all chains."
  }
];
