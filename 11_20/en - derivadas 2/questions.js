const preguntas = [
  {
    question: 'What command shows only the short description and names of man pages for a keyword?',
    options: ['man -f keyword', 'none of the above', 'man -s keyword', 'man -k keyword'],
    correct: 'man -k keyword',
    explanation: '<code>man -k</code> searches the short descriptions and names of man pages.'
  },
  {
    question: 'Which command shows a short description of a command without searching all man sections?',
    options: ['man -f keyword', 'man -s keyword', 'man -k keyword', 'man -F keyword'],
    correct: 'man -f keyword',
    explanation: '<code>man -f</code> shows a short description of a command (like "whatis").'
  },
  {
    question: 'Where are authorized public keys stored for SSH access?',
    options: [
      '/home/username/.ssh/known_users',
      '/etc/ssl/keys/public_keys',
      '/home/username/.ssh/public_keys',
      '/home/username/.ssh/authorized_keys'
    ],
    correct: '/home/username/.ssh/authorized_keys',
    explanation: 'SSH public keys for a user must be in <code>~/.ssh/authorized_keys</code> to allow login.'
  },
  {
    question: 'Which of the following is NOT a valid location for public keys in SSH?',
    options: [
      '/home/username/.ssh/public_keys',
      '/home/username/.ssh/authorized_keys',
      '/etc/ssl/keys/public_keys',
      '/home/username/.ssh/known_users'
    ],
    correct: '/home/username/.ssh/public_keys',
    explanation: 'That file is not standard; public keys go in <code>authorized_keys</code>.'
  },
  {
    question: 'What is a Zombie process in Linux?',
    options: [
      'A process that restarts automatically when killed',
      'A process using another process’s memory',
      'A process that finished but remains in the process table',
      'Zombie processes do not exist in Linux'
    ],
    correct: 'A process that finished but remains in the process table',
    explanation: 'A zombie is a completed process that hasn’t been reaped by its parent yet.'
  },
  {
    question: 'Which statement is false about Zombie processes?',
    options: [
      'They use system memory actively',
      'They are finished processes awaiting cleanup',
      'They don’t consume CPU but stay in process table',
      'They can be seen using ps aux'
    ],
    correct: 'They use system memory actively',
    explanation: 'Zombies don’t use memory actively; they just remain listed.'
  },
  {
    question: 'What should an admin do after extending an LVM volume but size doesn’t update?',
    options: [
      'He forgot to reboot the system',
      'He should have used lvresize -r or resized the filesystem',
      'He forgot to run systemctl-reloadfs',
      'He forgot to edit /etc/fstab'
    ],
    correct: 'He should have used lvresize -r or resized the filesystem',
    explanation: 'Resizing LVM doesn’t grow the filesystem unless you use <code>-r</code> or resize manually.'
  },
  {
    question: 'What step is often forgotten when extending an LVM volume?',
    options: [
      'Editing /etc/fstab',
      'Using mkfs after resizing',
      'Using lvresize without filesystem resize',
      'Unmounting the volume first'
    ],
    correct: 'Using lvresize without filesystem resize',
    explanation: 'You must also resize the filesystem, not just the volume.'
  },
  {
    question: 'Where should user-specific aliases be defined for login shells?',
    options: [
      '/etc/environment',
      'Just run "alias" and they are saved automatically',
      '~/.bash_profile',
      '/etc/profile'
    ],
    correct: '~/.bash_profile',
    explanation: 'User-specific aliases for login shells go in <code>~/.bash_profile</code>.'
  },
  {
    question: 'Which of these is NOT a good place for user-only alias definitions?',
    options: [
      '/etc/profile',
      '~/.bash_profile',
      '/etc/environment',
      '~/.bashrc'
    ],
    correct: '/etc/environment',
    explanation: '<code>/etc/environment</code> is for environment variables, not aliases.'
  }
];
