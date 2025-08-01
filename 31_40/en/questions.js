const questions = [
  {
    question: "What are the kinds of permissions under Linux?",
    options: [
      "Read: users may read the files or list the directory",
      "Create: users may create new files and directories",
      "Append: users may append text to the file",
      "Execute: users may run the file or lookup a specific file within a directory",
      "Write: users may write to the file of new files to the directory"
    ],
    correct: [
      "Read: users may read the files or list the directory",
      "Execute: users may run the file or lookup a specific file within a directory",
      "Write: users may write to the file of new files to the directory"
    ],
    explanation: "Linux supports Read, Write, and Execute permissions. 'Create' and 'Append' are not standard permission types."
  },
  {
    question: "What is suid bit used for?",
    options: [
      "To allow running bash scripts with permissions of the user owning the script",
      "To prevent the change of file ownership",
      "To prevent execution of files owned by other users in shared folders",
      "To allow running applications with permissions of the user owning the file"
    ],
    correct: "To allow running applications with permissions of the user owning the file",
    explanation: "The SUID bit allows users to run an executable with the permissions of the file's owner."
  },
  {
    question: "What do you do if your system is SLOW?",
    options: [
      "Check if it's network related with sar",
      "Check I/O stats with iostat",
      "Run dstat -t to check if it's related to disk or network.",
      "Check with top for anything unusual"
    ],
    correct: [
      "Check if it's network related with sar",
      "Check I/O stats with iostat",
      "Run dstat -t to check if it's related to disk or network.",
      "Check with top for anything unusual"
    ],
    explanation: "All options help diagnose a slow system by checking different subsystems."
  },
  {
    question: "What utility is used to display open ports on local machine?",
    options: ["netcat", "iptables", "netstat", "Isports"],
    correct: "netstat",
    explanation: "netstat shows open ports and network connections."
  },
  {
    question: "Which runlevels will typically lock you out of the system after reboot when set as default?",
    options: ["5", "6", "2", "3"],
    correct: "6",
    explanation: "Runlevel 6 reboots the system continuously, making it inaccessible."
  },
  {
    question: "Select all valid sha-bang's:",
    options: [
      "#!/bin/env bash",
      "#!/usr/bin/env python",
      "#!/bin/rm",
      "#!/bin/cp"
    ],
    correct: ["#!/bin/env bash", "#!/usr/bin/env python"],
    explanation: "These shebangs correctly point to interpreters. The others are not interpreters."
  },
  {
    question: "What command(s) will show contents of archive file:",
    options: [
      "Jmtar archive.tar.gz",
      "tar-tf archive.tar.gz",
      "tar --show -f archive.tar.gz",
      "tar--sf archive.tar.gz"
    ],
    correct: "tar-tf archive.tar.gz",
    explanation: "Use 'tar -tf' to list contents of a tar archive."
  },
  {
    question: 'What would the permissions be after running command "chmod 754 file"?',
    options: ["-rwxr-xr--", "-r-xr-xr--", "-rwxrwxrw-", "-rwxr--r--"],
    correct: "-rwxr-xr--",
    explanation: "7 = rwx, 5 = r-x, 4 = r--; so -rwxr-xr-- is correct."
  },
  {
    question: "What command(s) will add a route to network 10.0.0.0/8 via network interface wlp2s0?",
    options: [
      "route add-net 10.0.0.0 netmask 255.0.0.0 dev wlp2s0",
      "route set-network 10.0.0.0/8 -gateway wlp2s0",
      "ip route add 10.0.0.0/8 dev wlp2s0",
      "ip address add 10.0.0.0/8 dev wlp2s0"
    ],
    correct: ["route add-net 10.0.0.0 netmask 255.0.0.0 dev wlp2s0", "ip route add 10.0.0.0/8 dev wlp2s0"],
    explanation: "Both commands are valid for adding a route using different tools (route and ip)."
  },
  {
    question: "What command(s) will overwrite target file without prompting:",
    options: [
      "cp-i source_file target_file",
      "cp source_file target_file",
      "mv source_file target_file",
      "mv-f source_file target_file"
    ],
    correct: ["cp source_file target_file", "mv source_file target_file", "mv-f source_file target_file"],
    explanation: "Only 'cp -i' prompts; others overwrite by default."
  }
];
