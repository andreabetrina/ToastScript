import { useState, useEffect, useRef } from "react";
import { scriptsData } from "../data/scripts";
import "../styles/Script.css";

function Script({ roleId, navigateTo }) {
  const activeRole = scriptsData.find((r) => r.id === roleId);

  // Use a fallback object if the role is not found to prevent crashes 
  // during hook initializations before the early return.
  const role = activeRole || {
    id: "",
    title: "",
    category: "",
    description: "",
    icon: "",
    color: "#004165",
    introduction: "",
    responsibilities: [],
    quickTips: [],
    placeholders: [],
    script: "",
  };

  // 1. Script State & Placeholders
  const initialValues = {};
  role.placeholders.forEach((p) => {
    initialValues[p.key] = p.placeholder;
  });

  const [inputValues, setInputValues] = useState(initialValues);
  const [fontSize, setFontSize] = useState(16); // Default font size in px
  const [copySuccess, setCopySuccess] = useState(false);

  // 2. Custom Tool States
  // A. Timer State
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const [timerPreset, setTimerPreset] = useState("prepared"); // prepared, topics, evaluation, demo
  const timerIntervalRef = useRef(null);

  // B. Ah-Counter State
  const [ahTally, setAhTally] = useState({
    Ah: 0,
    Um: 0,
    Er: 0,
    So: 0,
    Like: 0,
    "You Know": 0,
  });

  // C. Grammarian State
  const [wordUses, setWordUses] = useState(0);
  const [grammarNotes, setGrammarNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState("");
  const [noteType, setNoteType] = useState("good"); // good, correction

  // If role is invalid, redirect back to scripts directory
  useEffect(() => {
    if (!activeRole) {
      navigateTo("scripts");
    }
  }, [activeRole, navigateTo]);

  // Handle Placeholder Inputs
  const handleInputChange = (key, val) => {
    setInputValues((prev) => ({
      ...prev,
      [key]: val,
    }));
  };

  // Compile script with state values
  const getCompiledScript = () => {
    let compiled = role.script;
    Object.keys(inputValues).forEach((key) => {
      const val = inputValues[key] || `[${key}]`;
      const regex = new RegExp(`{${key}}`, "g");
      compiled = compiled.replace(regex, val);
    });
    return compiled;
  };

  // Copy compiled script text to clipboard
  const handleCopyScript = () => {
    const rawText = getCompiledScript()
      .replace(/###/g, "")
      .replace(/---/g, "")
      .replace(/\*\*/g, "")
      .replace(/\*/g, "");

    navigator.clipboard.writeText(rawText).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  // Simple Native Print
  const handlePrintScript = () => {
    window.print();
  };

  // Format script helper
  const renderFormattedScript = (text) => {
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      if (line.trim().startsWith("###")) {
        return (
          <h3 key={idx} className="script-h3">
            {line.replace("###", "").trim()}
          </h3>
        );
      }
      if (line.trim().startsWith("---")) {
        return <hr key={idx} className="script-hr" />;
      }
      if (line.trim().startsWith("*")) {
        return (
          <li key={idx} className="script-li" style={{ fontSize: `${fontSize}px` }}>
            {parseBoldText(line.replace(/^\s*\*\s*/, ""))}
          </li>
        );
      }
      if (line.trim() === "") {
        return <div key={idx} className="script-spacer" />;
      }
      return (
        <p key={idx} className="script-p" style={{ fontSize: `${fontSize}px` }}>
          {parseBoldText(line)}
        </p>
      );
    });
  };

  const parseBoldText = (text) => {
    const parts = text.split(/\*\*([^*]+)\*\*/g);
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return (
          <strong key={index} className="script-strong">
            {part}
          </strong>
        );
      }
      return part;
    });
  };

  // --- Timer logic ---
  useEffect(() => {
    if (timerIsRunning) {
      timerIntervalRef.current = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerIntervalRef.current);
    }
    return () => clearInterval(timerIntervalRef.current);
  }, [timerIsRunning]);

  const handleTimerStartStop = () => setTimerIsRunning(!timerIsRunning);
  const handleTimerReset = () => {
    setTimerIsRunning(false);
    setTimerSeconds(0);
  };

  const formatTime = (totalSec) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const getTimerColorClass = () => {
    if (timerPreset === "topics") {
      if (timerSeconds >= 120) return "timer-red";
      if (timerSeconds >= 90) return "timer-yellow";
      if (timerSeconds >= 60) return "timer-green";
    } else if (timerPreset === "evaluation") {
      if (timerSeconds >= 180) return "timer-red";
      if (timerSeconds >= 150) return "timer-yellow";
      if (timerSeconds >= 120) return "timer-green";
    } else if (timerPreset === "demo") {
      if (timerSeconds >= 15) return "timer-red";
      if (timerSeconds >= 10) return "timer-yellow";
      if (timerSeconds >= 5) return "timer-green";
    } else {
      if (timerSeconds >= 420) return "timer-red";
      if (timerSeconds >= 360) return "timer-yellow";
      if (timerSeconds >= 300) return "timer-green";
    }
    return "timer-normal";
  };

  // --- Ah-Counter Tally logic ---
  const updateTally = (word, amount) => {
    setAhTally((prev) => ({
      ...prev,
      [word]: Math.max(0, prev[word] + amount),
    }));
  };

  const resetTally = () => {
    setAhTally({
      Ah: 0,
      Um: 0,
      Er: 0,
      So: 0,
      Like: 0,
      "You Know": 0,
    });
  };

  const copyTallyReport = () => {
    const report = Object.entries(ahTally)
      .map(([word, count]) => `${word}: ${count}`)
      .join(", ");
    navigator.clipboard.writeText(`Ah-Counter Report: ${report}`).then(() => {
      alert("Tally report copied to clipboard!");
    });
  };

  // --- Grammarian Tracker logic ---
  const addGrammarNote = () => {
    if (!currentNote.trim()) return;
    setGrammarNotes((prev) => [
      ...prev,
      { id: Date.now(), text: currentNote, type: noteType },
    ]);
    setCurrentNote("");
  };

  const removeGrammarNote = (id) => {
    setGrammarNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const copyGrammarReport = () => {
    const wordInfo = `Word of the Day usage count: ${wordUses} times.\n\n`;
    const goods = grammarNotes
      .filter((n) => n.type === "good")
      .map((n) => `+ ${n.text}`)
      .join("\n");
    const slips = grammarNotes
      .filter((n) => n.type === "correction")
      .map((n) => `- ${n.text}`)
      .join("\n");

    const finalReport = `Grammarian Report:\n${wordInfo}Excellent Language:\n${goods || "None logged"}\n\nSuggestions for Improvement:\n${slips || "None logged"}`;

    navigator.clipboard.writeText(finalReport).then(() => {
      alert("Grammarian report copied to clipboard!");
    });
  };

  // Now perform the early return check if the active role doesn't exist
  if (!activeRole) return null;

  return (
    <div className="script-workspace animate-fade-in">
      {/* Workspace Header */}
      <div className="workspace-header">
        <div className="header-nav">
          <button className="back-btn" onClick={() => navigateTo("scripts")}>
            ← Back to Roles
          </button>
          <div className="font-adjuster">
            <span>Font Size:</span>
            <button onClick={() => setFontSize(Math.max(12, fontSize - 2))}>A-</button>
            <span className="size-indicator">{fontSize}px</span>
            <button onClick={() => setFontSize(Math.min(26, fontSize + 2))}>A+</button>
          </div>
        </div>
        <div className="role-title-section">
          <span className="role-emoji">{role.icon}</span>
          <div>
            <h1>{role.title}</h1>
            <span className="category-tag" style={{ color: role.color, borderColor: role.color }}>
              {role.category}
            </span>
          </div>
        </div>
      </div>

      <div className="workspace-layout">
        {/* Left Side: Controls & Widgets */}
        <aside className="workspace-sidebar">
          {/* Custom Tools Section */}
          {role.id === "timer" && (
            <div className="custom-widget-card timer-widget">
              <h3>⏱️ Live Timing Board</h3>
              <p className="widget-desc">Time speakers and trigger colored background cues in real-time.</p>

              <div className="preset-selector">
                <label>Speech Target Preset:</label>
                <select value={timerPreset} onChange={(e) => setTimerPreset(e.target.value)}>
                  <option value="prepared">Prepared Speech (5-7 min)</option>
                  <option value="topics">Table Topics (1-2 min)</option>
                  <option value="evaluation">Speech Evaluation (2-3 min)</option>
                  <option value="demo">Demo Mode (Fast: 5s/10s/15s)</option>
                </select>
              </div>

              <div className={`timer-display ${getTimerColorClass()}`}>
                <div className="clock-time">{formatTime(timerSeconds)}</div>
                <div className="color-indicator-label">
                  {getTimerColorClass() === "timer-green" && "GREEN LIGHT (Qualifies)"}
                  {getTimerColorClass() === "timer-yellow" && "YELLOW LIGHT (Warning)"}
                  {getTimerColorClass() === "timer-red" && "RED LIGHT (Wrap up)"}
                  {getTimerColorClass() === "timer-normal" && "Speech Running"}
                </div>
              </div>

              <div className="timer-controls">
                <button
                  className={`timer-btn-main ${timerIsRunning ? "stop" : "start"}`}
                  onClick={handleTimerStartStop}
                >
                  {timerIsRunning ? "Pause" : "Start"}
                </button>
                <button className="timer-btn-sub" onClick={handleTimerReset}>
                  Reset
                </button>
              </div>
            </div>
          )}

          {role.id === "ah_counter" && (
            <div className="custom-widget-card tally-widget">
              <h3>📊 Filler Word Tally Counter</h3>
              <p className="widget-desc">Keep count of vocal hesitations. Generates a summary for your report.</p>

              <div className="tally-grid">
                {Object.keys(ahTally).map((word) => (
                  <div key={word} className="tally-item">
                    <span className="tally-word">{word}</span>
                    <div className="tally-counter">
                      <button onClick={() => updateTally(word, -1)}>-</button>
                      <span className="tally-count">{ahTally[word]}</span>
                      <button onClick={() => updateTally(word, 1)}>+</button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="tally-actions">
                <button className="widget-action-btn copy" onClick={copyTallyReport}>
                  Copy Report
                </button>
                <button className="widget-action-btn reset" onClick={resetTally}>
                  Reset Counts
                </button>
              </div>
            </div>
          )}

          {role.id === "grammarian" && (
            <div className="custom-widget-card grammarian-widget">
              <h3>✍️ Grammarian Log Book</h3>
              <p className="widget-desc">Track vocabulary and log grammatical strengths/suggestions.</p>

              <div className="word-day-tracker">
                <div className="word-day-header">
                  <strong>Word of the Day Use Tracker</strong>
                  <span>({inputValues.word || "Word"})</span>
                </div>
                <div className="word-use-counter">
                  <button onClick={() => setWordUses(Math.max(0, wordUses - 1))}>-</button>
                  <span className="word-count-num">{wordUses} Uses</span>
                  <button onClick={() => setWordUses(wordUses + 1)}>+</button>
                </div>
              </div>

              <div className="note-logger">
                <label>Add Observation Note:</label>
                <div className="note-type-toggle">
                  <button
                    className={`toggle-btn good ${noteType === "good" ? "active" : ""}`}
                    onClick={() => setNoteType("good")}
                  >
                    Good Grammar
                  </button>
                  <button
                    className={`toggle-btn bad ${noteType === "correction" ? "active" : ""}`}
                    onClick={() => setNoteType("correction")}
                  >
                    Slip/Correction
                  </button>
                </div>
                <div className="note-input-container">
                  <input
                    type="text"
                    placeholder={noteType === "good" ? "E.g. Speaker 1 used beautiful imagery..." : "E.g. 'I did gone to' should be 'I went to'..."}
                    value={currentNote}
                    onChange={(e) => setCurrentNote(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addGrammarNote()}
                  />
                  <button onClick={addGrammarNote}>Add</button>
                </div>
              </div>

              {grammarNotes.length > 0 && (
                <div className="logged-notes-container">
                  <h4>Logged Observations:</h4>
                  <ul className="logged-notes-list">
                    {grammarNotes.map((note) => (
                      <li key={note.id} className={`logged-note-item ${note.type}`}>
                        <span className="bullet">{note.type === "good" ? "✔" : "✘"}</span>
                        <span className="note-text">{note.text}</span>
                        <button className="del-note-btn" onClick={() => removeGrammarNote(note.id)}>×</button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button className="widget-action-btn copy block-btn" onClick={copyGrammarReport}>
                Copy Full Grammarian Report
              </button>
            </div>
          )}

          {/* Form Placeholders Inputs */}
          <div className="placeholders-card">
            <h3>⚙️ Customize Script Fields</h3>
            <p className="card-desc">Type below to dynamically update terms, names, and information in the script.</p>
            <div className="placeholder-inputs-grid">
              {role.placeholders.map((p) => (
                <div key={p.key} className="placeholder-field">
                  <label>{p.label}:</label>
                  <input
                    type={p.type}
                    value={inputValues[p.key] || ""}
                    onChange={(e) => handleInputChange(p.key, e.target.value)}
                    placeholder={p.placeholder}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Role Guidelines */}
          <div className="guidelines-card">
            <h3>💡 Quick Guidelines</h3>
            <ul className="guidelines-list">
              {role.responsibilities.map((r, idx) => (
                <li key={idx}>{r}</li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Right Side: Script Reader & Copy Operations */}
        <section className="workspace-main-panel">
          <div className="panel-header">
            <h2>📜 Script Reader</h2>
            <div className="panel-actions">
              <button
                className={`panel-action-btn copy ${copySuccess ? "success" : ""}`}
                onClick={handleCopyScript}
              >
                {copySuccess ? "Copied! ✓" : "Copy Script"}
              </button>
              <button className="panel-action-btn print" onClick={handlePrintScript}>
                Print Mode
              </button>
            </div>
          </div>

          <div className="script-content-card">
            <div className="script-reader-paper">
              {renderFormattedScript(getCompiledScript())}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Script;
