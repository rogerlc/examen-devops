const questions = [
  {
    question: 'What command will display the size of the command history list in bash?',
    options: ['echo $HISTSIZE', 'history size', 'echo $PATH', 'echo $HISTFILE'],
    correct: 'echo $HISTSIZE',
    explanation: 'The variable <code>$HISTSIZE</code> holds the size of the bash command history list.'
  },
  {
    question: 'What is the purpose of LVMs?',
    options: [
      'Snapshots allow you to backup a frozen copy of the filesystem with minimal downtime.',
      'Use any number of disks as one big disk.',
      'Have logical volumes stretched over several disks.',
      'Create small logical volumes and resize them dynamically.'
    ],
    correct: [
      'Snapshots allow you to backup a frozen copy of the filesystem with minimal downtime.',
      'Use any number of disks as one big disk.',
      'Have logical volumes stretched over several disks.',
      'Create small logical volumes and resize them dynamically.'
    ],
    explanation: 'LVMs allow managing physical disks grouped together, creating snapshots, and resizing logical volumes dynamically.'
  },
  {
    question: 'What is the purpose of crond?',
    options: [
      'Executing tasks on a set schedule',
      'Loading kernel modules',
      'Loading programs on system boot',
      'Executing tasks when prompted by user'
    ],
    correct: 'Executing tasks on a set schedule',
    explanation: '<code>crond</code> is the daemon that runs scheduled tasks (cron jobs).'
  },
  {
    question: 'How to generate ssh key in bash script?',
    options: [
      'ssh-keygen -t rsa -f $1 -b 4096',
      'It\'s not feasible because you must enter passphrase',
      'ssh-keygen -t rsa -f key',
      'ssh-keygen -t rsa -f privkey-N"'
    ],
    correct: 'ssh-keygen -t rsa -f $1 -b 4096',
    explanation: 'This option generates a 4096-bit RSA key, with a variable name suitable for scripts.'
  },
  {
    question: 'How to check inode usage?',
    options: ['inodes --list', 'inodes -L', 'du -i', 'df -i'],
    correct: 'df -i',
    explanation: '<code>df -i</code> shows the number of used and free inodes on filesystems.'
  },
  {
    question: 'Which command shows packages containing the queried file?',
    options: ['yum provides filename', 'yum help filename', 'yum search filename', 'yum list filename'],
    correct: 'yum provides filename',
    explanation: '<code>yum provides</code> indicates which package contains the requested file.'
  },
  {
    question: 'Which exit codes are possible in Linux? (choose 2)',
    options: ['from 1 to 1024', '0', '-1', 'from 1 to 255'],
    correct: ['0', 'from 1 to 255'],
    explanation: 'Valid exit codes range from 0 to 255, where 0 means success and >0 means error.'
  },
  {
    question: 'Which Linux distribution is the upstream source of Ubuntu?',
    options: ['Slackware Linux', 'Red Hat Enterprise Linux', 'none of the above', 'Debian'],
    correct: 'Debian',
    explanation: 'Ubuntu is based on Debian as its upstream distribution.'
  },
  {
    question: 'An administrator disabled swap (/swap) but after reboot swap was still enabled. What was the issue?',
    options: [
      'The administrator should have run "swapoff -v /swap"',
      'The administrator forgot to edit /etc/fstab',
      'It is normal behavior, the system cannot run without swap',
      'The administrator did not reboot right after command execution'
    ],
    correct: 'The administrator forgot to edit /etc/fstab',
    explanation: 'To permanently disable swap, the entry in <code>/etc/fstab</code> must be removed or commented.'
  },
  {
    question: 'What file contains settings for interactive non-login shells?',
    options: ['~/.bashrc', '~/.bash_profile', '/etc/bash.bashrc', '/etc/shells'],
    correct: '~/.bashrc',
    explanation: '<code>~/.bashrc</code> contains configurations for interactive non-login shells.'
  }
];
