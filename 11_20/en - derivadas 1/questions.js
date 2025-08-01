const preguntas = [
  {
    question: 'Which command is used to print all environment variables in sorted order?',
    options: ['echo (env)', 'envvars', 'env sort', 'uservars'],
    correct: 'env sort',
    explanation: 'The command <code>env | sort</code> lists all environment variables in sorted order.'
  },
  {
    question: 'What command prints exactly "envvars"?',
    options: ['envvars', 'echo envvars', 'printenvvars', 'echo (envvars)'],
    correct: 'echo envvars',
    explanation: '<code>echo envvars</code> prints the literal string "envvars".'
  },
  {
    question: 'Which command will output the word "uservars"?',
    options: ['uservars', 'echo uservars', 'show uservars', 'set uservars'],
    correct: 'echo uservars',
    explanation: 'The command <code>echo uservars</code> prints that string.'
  },
  {
    question: 'Where is the current mount table usually stored?',
    options: ['/etc/fstab', '/etc/mounts', '/etc/mount/table', '/etc/mounts/fstab'],
    correct: '/etc/mounts',
    explanation: 'The file <code>/etc/mtab</code> or <code>/etc/mounts</code> shows currently mounted filesystems.'
  },
  {
    question: 'Which of the following does not exist as a valid mount table file?',
    options: ['/etc/fstab', '/etc/mount/table', '/etc/mounts', '/etc/mounts/fstab'],
    correct: '/etc/mounts/fstab',
    explanation: 'The path <code>/etc/mounts/fstab</code> does not exist in Linux systems.'
  },
  {
    question: 'How to make a script accessible from anywhere using its full path and name?',
    options: [
      'Add script/program path and name to PATH environment variable',
      'Add script/program name to PATH environment variable',
      'Add script/program path to PATH environment variable'
    ],
    correct: 'Add script/program path and name to PATH environment variable',
    explanation: 'PATH is a list of directories. Adding a full path and name lets you run it from anywhere.'
  },
  {
    question: 'Which answer is incorrect for adding a program to the PATH?',
    options: [
      'Add script/program path to PATH environment variable',
      'Add script/program name to PATH environment variable',
      'Add script/program path and name to PATH environment variable'
    ],
    correct: 'Add script/program name to PATH environment variable',
    explanation: 'Adding only the name doesn’t work unless it’s already in a directory listed in PATH.'
  },
  {
    question: 'Which package manager system is used under the hood by yum?',
    options: ['None, yum is an independent system', 'APT', 'RPM'],
    correct: 'RPM',
    explanation: 'YUM is a front-end that depends on the RPM package system.'
  },
  {
    question: 'Which package system does APT belong to?',
    options: ['APT', 'RPM', 'YUM'],
    correct: 'APT',
    explanation: 'APT is used in Debian-based systems like Ubuntu.'
  },
  {
    question: 'What file is used to define system-wide environment variables?',
    options: ['/etc/environment', '/etc/bash.bashrc', '/etc/aliases', '~/.bash_profile'],
    correct: '/etc/environment',
    explanation: '<code>/etc/environment</code> is used to set system-wide variables for all users.'
  }
];
