import React, { useState, useRef, useEffect } from 'react';
import { fileSystem, resolveFileContent } from '../data/terminalFs.js';

const portfolioAliases = {
  stack: 'stack', skills: 'stack', skill: 'stack', tech: 'stack',
  experience: 'experience', work: 'experience', exp: 'experience',
  projects: 'projects', project: 'projects',
  now: 'now', currently: 'now', building: 'now',
  contact: 'contact', email: 'contact'
};

const manPages = {
  ls: `NAME\n  ls - list directory contents\n\nUSAGE\n  ls [options]\n\nDESCRIPTION\n  Lists files and directories in the simulated portfolio filesystem.\n  Options:\n    -la   long listing format showing permissions and filenames`,
  cd: `NAME\n  cd - change directory\n\nUSAGE\n  cd [directory]\n\nDESCRIPTION\n  Changes the current working directory.\n  Supported destinations:\n    projects   enter the projects directory\n    ..         go up to the home directory\n    ~          go to the home directory`,
  cat: `NAME\n  cat - concatenate files and print on the standard output\n\nUSAGE\n  cat <file>\n\nDESCRIPTION\n  Displays the contents of the specified file.\n  Examples:\n    cat stack.json\n    cat projects/healthchain.md`,
  pwd: `NAME\n  pwd - print name of current/working directory\n\nUSAGE\n  pwd\n\nDESCRIPTION\n  Prints the absolute path of the current working directory.`,
  clear: `NAME\n  clear - clear the terminal screen\n\nUSAGE\n  clear\n\nDESCRIPTION\n  Clears the terminal scrollback history.`,
  help: `NAME\n  help - display information about available commands\n\nUSAGE\n  help\n\nDESCRIPTION\n  Shows a categorized list of all available commands.`,
  whoami: `NAME\n  whoami - print effective userid\n\nUSAGE\n  whoami\n\nDESCRIPTION\n  Prints the user's name (Harish B).`,
  hostname: `NAME\n  hostname - show system's host name\n\nUSAGE\n  hostname\n\nDESCRIPTION\n  Prints the current host name (portfolio).`,
  uname: `NAME\n  uname - print system information\n\nUSAGE\n  uname\n\nDESCRIPTION\n  Prints kernel and architecture information.`,
  date: `NAME\n  date - print the system date and time\n\nUSAGE\n  date\n\nDESCRIPTION\n  Prints the user's current local date and time.`,
  echo: `NAME\n  echo - display a line of text\n\nUSAGE\n  echo [text]\n\nDESCRIPTION\n  Prints the input text back to the terminal.`,
  history: `NAME\n  history - command history list\n\nUSAGE\n  history\n\nDESCRIPTION\n  Prints the list of commands executed in the current session.`,
  man: `NAME\n  man - format and display the on-line manual pages\n\nUSAGE\n  man <command>\n\nDESCRIPTION\n  Displays documentation for the specified command.`,
  stack: `NAME\n  stack - display technical stack\n\nDESCRIPTION\n  Displays the technologies and tools used throughout the portfolio.`,
  experience: `NAME\n  experience - display professional experience\n\nDESCRIPTION\n  Displays professional experience details.`,
  projects: `NAME\n  projects - display portfolio projects\n\nDESCRIPTION\n  Lists key projects developed.`,
  now: `NAME\n  now - display active focus\n\nDESCRIPTION\n  Shows what I am actively working on, learning, and exploring right now.`,
  contact: `NAME\n  contact - display contact details\n\nDESCRIPTION\n  Displays links and ways to reach me.`
};

const CommandConsole = () => {
  const [inputVal, setInputVal] = useState('');
  const [logEntries, setLogEntries] = useState([]);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentDir, setCurrentDir] = useState('~');
  const logRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [logEntries]);

  const addLog = (echoText, outputText) => {
    setLogEntries((prev) => {
      const next = [...prev];
      if (echoText !== null) {
        next.push({ text: echoText, isEcho: true });
      }
      if (outputText) {
        next.push({ text: outputText, isEcho: false });
      }
      return next;
    });
  };

  const handleHelp = (args, raw) => {
    const helpOutput = `Available Commands

Navigation
  ls          list directory contents
  ls -la      long listing format showing permissions
  pwd         print working directory
  cd          change directory

Portfolio
  stack       view technical stack
  experience  view experience details
  projects    view projects
  now         view active focus
  contact     view contact info

Utilities
  whoami      print user name
  hostname    show host name
  uname       print system details
  date        print current date and time
  echo        display a line of text
  history     command history list
  clear       clear terminal screen
  help        display this help text
  man         display manual pages

Fun
  sudo make-portfolio`;
    addLog(raw, helpOutput);
  };

  const handleClear = () => {
    setLogEntries([]);
  };

  const handlePwd = (args, raw) => {
    const path = currentDir === '~' ? '/home/harish' : '/home/harish/projects';
    addLog(raw, path);
  };

  const handleWhoami = (args, raw) => {
    addLog(raw, 'Harish B');
  };

  const handleHostname = (args, raw) => {
    addLog(raw, 'portfolio');
  };

  const handleUname = (args, raw) => {
    addLog(raw, 'Linux portfolio 6.x x86_64');
  };

  const handleDate = (args, raw) => {
    addLog(raw, new Date().toString());
  };

  const handleEcho = (args, raw) => {
    addLog(raw, args.join(' '));
  };

  const handleHistory = (args, raw) => {
    const currentHistory = [...history, raw];
    const output = currentHistory
      .map((cmd, idx) => `  ${idx + 1}  ${cmd}`)
      .join('\n');
    addLog(raw, output);
  };

  const handleMan = (args, raw) => {
    if (args.length === 0) {
      addLog(raw, 'What manual page do you want?');
      return;
    }
    const target = args[0].toLowerCase();
    if (manPages[target]) {
      addLog(raw, manPages[target]);
    } else {
      addLog(raw, `No manual entry for ${args[0]}`);
    }
  };

  const handleLs = (args, raw) => {
    const dirContents = fileSystem[currentDir];
    if (!dirContents) {
      addLog(raw, `bash: ls: cannot access directory contents`);
      return;
    }

    const showLong = args.includes('-la') || args.includes('-l');
    const items = Object.keys(dirContents);

    if (showLong) {
      const output = items
        .map((name) => {
          const item = dirContents[name];
          const display = item.type === 'dir' ? `${name}` : name;
          return `${item.perm} ${display}`;
        })
        .join('\n');
      addLog(raw, output);
    } else {
      addLog(raw, items.join('   '));
    }
  };

  const handleCd = (args, raw) => {
    if (args.length === 0 || args[0] === '~') {
      setCurrentDir('~');
      addLog(raw, '');
      return;
    }
    const target = args[0];
    if (target === '..') {
      if (currentDir === '~/projects') {
        setCurrentDir('~');
      }
      addLog(raw, '');
      return;
    }

    const dirContents = fileSystem[currentDir];
    if (dirContents && dirContents[target] && dirContents[target].type === 'dir') {
      setCurrentDir('~/projects');
      addLog(raw, '');
    } else {
      addLog(raw, `bash: cd: ${target}: No such file or directory`);
    }
  };

  const handleCat = (args, raw) => {
    if (args.length === 0) {
      addLog(raw, 'cat: missing file operand');
      return;
    }
    const filename = args[0];

    if (currentDir === '~' && filename.startsWith('projects/')) {
      const parts = filename.split('/');
      const targetProject = parts[1];
      const projectContents = fileSystem['~/projects'];
      if (projectContents && projectContents[targetProject]) {
        const fileContent = resolveFileContent(projectContents[targetProject].contentId);
        addLog(raw, fileContent);
        return;
      }
    }

    const dirContents = fileSystem[currentDir];
    if (dirContents && dirContents[filename]) {
      const item = dirContents[filename];
      if (item.type === 'dir') {
        addLog(raw, `cat: ${filename}: Is a directory`);
      } else {
        const fileContent = resolveFileContent(item.contentId);
        addLog(raw, fileContent);
      }
    } else {
      addLog(raw, `cat: ${filename}: No such file or directory`);
    }
  };

  const commands = {
    help: handleHelp,
    clear: handleClear,
    pwd: handlePwd,
    ls: handleLs,
    cd: handleCd,
    cat: handleCat,
    whoami: handleWhoami,
    hostname: handleHostname,
    uname: handleUname,
    date: handleDate,
    echo: handleEcho,
    history: handleHistory,
    man: handleMan
  };

  const handleScrollAlias = (alias, raw) => {
    const targetId = portfolioAliases[alias];
    addLog(raw, `opening ./${targetId}...`);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const runCommand = (raw) => {
    const normalized = raw.trim();
    if (!normalized) return;

    if (normalized.toLowerCase() === 'sudo make-portfolio') {
      addLog(raw, 'permission granted. already done — you are looking at it.');
      return;
    }

    const tokens = normalized.split(/\s+/);
    const command = tokens[0].toLowerCase();
    const args = tokens.slice(1);

    if (command === '..') {
      handleCd(['..'], raw);
      return;
    }

    if (command === 'sudo') {
      const subcommand = args[0] || 'command';
      addLog(raw, `sudo: ${subcommand}: command not found`);
      return;
    }

    if (portfolioAliases[command]) {
      handleScrollAlias(command, raw);
      return;
    }

    if (commands[command]) {
      commands[command](args, raw);
      return;
    }

    addLog(raw, `bash: ${command}: command not found`);
  };

  const handleTabCompletion = (e) => {
    e.preventDefault();
    const val = inputVal.trimStart();
    if (!val) return;

    if (!val.includes(' ')) {
      const allCommands = [
        'help', 'clear', 'pwd', 'ls', 'cd', 'cat', 'whoami', 
        'hostname', 'uname', 'date', 'echo', 'history', 'man', 
        'stack', 'experience', 'projects', 'now', 'contact'
      ];
      const matches = allCommands.filter(c => c.startsWith(val.toLowerCase()));
      if (matches.length === 1) {
        setInputVal(matches[0]);
      }
      return;
    }

    const lastSpaceIdx = val.lastIndexOf(' ');
    const cmdPart = val.substring(0, lastSpaceIdx + 1);
    const argPart = val.substring(lastSpaceIdx + 1);

    if (argPart.includes('/')) {
      const slashIdx = argPart.lastIndexOf('/');
      const pathPrefix = argPart.substring(0, slashIdx + 1);
      const filePrefix = argPart.substring(slashIdx + 1);

      if (pathPrefix.toLowerCase() === 'projects/' && currentDir === '~') {
        const options = Object.keys(fileSystem['~/projects']);
        const matches = options.filter(o => o.startsWith(filePrefix.toLowerCase()));
        if (matches.length === 1) {
          setInputVal(cmdPart + pathPrefix + matches[0]);
        }
      }
      return;
    }

    const dirContents = fileSystem[currentDir] || {};
    const options = Object.keys(dirContents);
    const matches = options.filter(o => o.startsWith(argPart.toLowerCase()));
    if (matches.length === 1) {
      setInputVal(cmdPart + matches[0]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.key.toLowerCase() === 'l') {
      e.preventDefault();
      handleClear();
      return;
    }

    if (e.ctrlKey && e.key.toLowerCase() === 'c') {
      e.preventDefault();
      addLog(inputVal + '^C', '');
      setInputVal('');
      setHistoryIndex(-1);
      return;
    }

    if (e.key === 'Tab') {
      handleTabCompletion(e);
      return;
    }

    if (e.key === 'Enter') {
      const val = inputVal;
      setInputVal('');
      if (val.trim()) {
        setHistory((prev) => [...prev, val]);
        setHistoryIndex(-1);
        runCommand(val);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInputVal(history[nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx >= history.length) {
          setHistoryIndex(-1);
          setInputVal('');
        } else {
          setHistoryIndex(nextIdx);
          setInputVal(history[nextIdx] || '');
        }
      }
    }
  };

  return (
    <div className="console">
      <div
        ref={logRef}
        className={`console-log ${logEntries.length > 0 ? 'open' : ''}`}
      >
        {logEntries.map((entry, idx) => (
          <div key={idx} className={entry.isEcho ? 'echo' : ''}>
            {entry.text}
          </div>
        ))}
      </div>
      <div className="console-input-row" onClick={() => inputRef.current?.focus()}>
        <span className="user">harish</span>
        <span className="sep">@portfolio:{currentDir}$</span>
        <input
          ref={inputRef}
          id="cmdInput"
          type="text"
          placeholder="type 'help' and press enter"
          autoComplete="off"
          spellCheck="false"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <span className="cursor" aria-hidden="true"></span>
      </div>
    </div>
  );
};

export default CommandConsole;
