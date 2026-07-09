import React, { useState, useRef, useEffect } from 'react';

const routes = {
  stack: 'stack', skills: 'stack', skill: 'stack', tech: 'stack',
  experience: 'experience', work: 'experience', exp: 'experience',
  projects: 'projects', project: 'projects',
  now: 'now', currently: 'now', building: 'now',
  contact: 'contact', email: 'contact'
};

const CommandConsole = () => {
  const [inputVal, setInputVal] = useState('');
  const [logEntries, setLogEntries] = useState([]);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const logRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [logEntries]);

  const runCommand = (raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'help') {
      setLogEntries((prev) => [
        ...prev,
        { text: raw, isEcho: true },
        { text: 'available: stack, experience, projects, now, contact, clear', isEcho: false }
      ]);
      return;
    }

    if (cmd === 'clear') {
      setLogEntries([]);
      return;
    }

    if (cmd === 'sudo make-portfolio') {
      setLogEntries((prev) => [
        ...prev,
        { text: raw, isEcho: true },
        { text: 'permission granted. already done — you are looking at it.', isEcho: false }
      ]);
      return;
    }

    if (routes[cmd]) {
      const targetId = routes[cmd];
      setLogEntries((prev) => [
        ...prev,
        { text: raw, isEcho: true },
        { text: 'opening ./' + targetId, isEcho: false }
      ]);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    setLogEntries((prev) => [
      ...prev,
      { text: raw, isEcho: true },
      { text: `command not found: ${cmd} — type 'help'`, isEcho: false }
    ]);
  };

  const handleKeyDown = (e) => {
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
        <span className="sep">@portfolio:~$</span>
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
