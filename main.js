class Terminal {
    constructor() {
      this.command = '';
      this.conn = 'guest@nohumanman.com:';
      this.directory = '/home/guest/';
      this.timeLoaded = Date.now();
      this.initTerminal();
    }
  
    initTerminal() {
      this.displayWelcomeMessage();
      this.addNewLine();
      this.updateActiveLine();
  
      document.onkeydown = (e) => {
        this.handleKeyPress(e);
      };
    }
  
    displayWelcomeMessage() {
      this.messageToLine('Welcome to nohumanman.com! This is a terminal emulator built by me, Matthew. I\'ll probably update it from time to time.');
      this.messageToLine("");
      this.messageToLine("* GitHub   : nohumanman");
      this.messageToLine("* LinkedIn : Matthew");
      this.messageToLine("")
      this.messageToLine("Information as of $(date)")
      this.messageToLine("")
      this.messageToLine("* Last Commit         : 2 days ago on Descenders Modkit");
      this.messageToLine("* Public GitHub Repos : 3");
      this.messageToLine("* Total Commits       : 1,000");
      this.messageToLine("")
      this.messageToLine("To get started, type 'help' to see a list of commands.");
      this.messageToLine("");
      this.messageToLine("");
      this.messageToLine("Last login: Tue Nov 30 23:23:04 2021 from REDACTED");
    }
  
    addNewLine() {
      const newLine = document.createElement('p');
      document.getElementsByClassName('terminal')[0].appendChild(newLine);
      newLine.classList.add('active');
      this.updateActiveLine();
    }
  
    messageToLine(message) {
      const newLine = document.createElement('p');
      document.getElementsByClassName('terminal')[0].appendChild(newLine);
      newLine.innerText = message;
    }
  
    updateActiveLine() {
      document.getElementsByClassName('active')[0].textContent = `${this.conn}${this.directory}$ ${this.command}`;
    }
  
    handleKeyPress(event) {
      if (event.key === 'Shift') {
        // Handle Shift key if needed
      } else if (event.key === 'Backspace') {
        this.command = this.command.substring(0, this.command.length - 1);
        this.updateActiveLine();
      } else if (event.key === 'Enter') {
        this.runCommand();
        this.command = '';
        document.getElementsByClassName('active')[0].classList.remove('active');
        this.addNewLine();
      } else if (" abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-=!@#$%^&*()_+\\][';/.,|}{".indexOf(event.key) === -1) {
        // Handle other keys if needed
      } else {
        this.command += event.key;
        this.updateActiveLine();
      }
    }
  
    runCommand() {
        // if command starts with "cd"
        if (this.command.startsWith("cd")) {
            // get the path
            directory += command.substring(3);
        }
        else if (this.command.startsWith("ls")){

        }
        else if (this.command.startsWith("exit")){
            window.close();
        }
        else if (this.command.startsWith("copypasta")){
            this.messageToLine("I'd just like to interject for a moment. What you're refering to as Linux, is in fact, GNU/Linux, or as I've recently taken to calling it, GNU plus Linux. Linux is not an operating system unto itself, but rather another free component of a fully functioning GNU system made useful by the GNU corelibs, shell utilities and vital system components comprising a full OS as defined by POSIX.")
            this.messageToLine("")
            this.messageToLine("Many computer users run a modified version of the GNU system every day, without realizing it. Through a peculiar turn of events, the version of GNU which is widely used today is often called Linux, and many of its users are not aware that it is basically the GNU system, developed by the GNU Project.")
            this.messageToLine("")
            this.messageToLine("There really is a Linux, and these people are using it, but it is just a part of the system they use. Linux is the kernel: the program in the system that allocates the machine's resources to the other programs that you run. The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system. Linux is normally used in combination with the GNU operating system: the whole system is basically GNU with Linux added, or GNU/Linux. All the so-called Linux distributions are really distributions of GNU/Linux!")
        }
        else if (this.command.startsWith("neofetch")){
            //this.messageToLine("OS: " + this.getOS());
            this.messageToLine("Uptime: " + (Date.now() - timeLoaded)/1000 + "s");
            this.messageToLine("Resolution: " + window.innerWidth + "x" + window.innerHeight);
            this.messageToLine("Theme: Hacker");
            this.messageToLine("User Agent: " + window.navigator.userAgent);
            // more live info about client
            
        }
        else if (this.command.startsWith("clear")){
            document.getElementsByClassName("terminal")[0].innerHTML = "";
            this.addNewLine();
        }
        else if (this.command.startsWith("help")){
            this.messageToLine("cd <path> - change directory");
            this.messageToLine("ls - list files in directory");
            this.messageToLine("exit - close terminal");
            this.messageToLine("copypasta - copypasta");
            this.messageToLine("neofetch - display system info");
            this.messageToLine("clear - clear terminal");
            this.messageToLine("help - display this message");
        }
        else if (this.command == ""){
            
        }
        else{
            this.messageToLine(this.command.split(" ")[0] + ": command not found")
        }
        this.command = "";
    
    }
  }

// Initialize the terminal
const terminal = new Terminal();
