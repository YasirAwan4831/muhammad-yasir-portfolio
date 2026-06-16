import React, { useState, useRef, useEffect } from "react";
import "../styles/Chatbot.css";

/* ── Knowledge base ─────────────────────────────────────────── */
const getResponse = (message) => {
  const msg = message.toLowerCase().trim();

  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey"))
    return { text: "Hello! Great to meet you. What would you like to know about Yasir?", type: "text" };

  if (msg.includes("who made you") || msg.includes("who created you") || msg.includes("developer"))
    return { text: "I was built by Muhammad Yasir — a Full-Stack Developer passionate about modern web experiences.", type: "text" };

  if (msg.includes("skill"))
    return {
      text: "Yasir's core skills include:",
      list: ["React & Vite", "JavaScript (ES6+)", "Node.js & Express", "MongoDB & Firebase", "Python & AI Automation"],
      type: "list"
    };

  if (msg.includes("project"))
    return {
      text: "Here are some of Yasir's projects:",
      list: ["Portfolio Website", "AI Resume Screener", "Custom Chatbots", "Admin Dashboards", "Automation Tools"],
      type: "list"
    };

  if (msg.includes("experience"))
    return { text: "Yasir has hands-on experience in Full-Stack Development, Frontend Engineering, and AI Automation through multiple internships.", type: "text" };

  if (msg.includes("service"))
    return {
      text: "Yasir offers these services:",
      list: ["Full-Stack Web Development", "Frontend Development", "Social Media Management"],
      type: "list"
    };

  if (msg.includes("github"))
    return { text: "You can explore Yasir's work on GitHub:", link: { label: "github.com/YasirAwan4831", url: "https://github.com/YasirAwan4831" }, type: "link" };

  if (msg.includes("linkedin"))
    return { text: "Connect with Yasir on LinkedIn:", link: { label: "linkedin.com/in/yasirawan4831", url: "https://www.linkedin.com/in/yasirawan4831/" }, type: "link" };

  if (msg.includes("whatsapp"))
    return { text: "Reach Yasir on WhatsApp:", link: { label: "+92 315 4831409", url: "https://wa.me/923154831409" }, type: "link" };

  if (msg.includes("contact") || msg.includes("email"))
    return {
      text: "Here's how to reach Yasir:",
      list: ["📧 my3154831409@gmail.com", "📱 WhatsApp: +92 315 4831409"],
      type: "list"
    };

  return { text: "I'm not sure about that. Try asking about skills, projects, services, GitHub, LinkedIn, or contact info.", type: "text" };
};

/* ── Timestamp helper ───────────────────────────────────────── */
const now = () =>
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

/* ── Typing bubble ──────────────────────────────────────────── */
const TypingBubble = () => (
  <div className="cb-msg cb-bot cb-typing-msg">
    <div className="cb-avatar">Y</div>
    <div className="cb-bubble cb-typing-bubble">
      <span /><span /><span />
    </div>
  </div>
);

/* ── Single message ─────────────────────────────────────────── */
const Message = ({ msg }) => {
  const isUser = msg.role === "user";
  return (
    <div className={`cb-msg ${isUser ? "cb-user" : "cb-bot"}`}>
      {!isUser && <div className="cb-avatar">Y</div>}
      <div className="cb-bubble-wrap">
        <div className={`cb-bubble ${isUser ? "cb-bubble-user" : "cb-bubble-bot"}`}>
          {msg.text && <p>{msg.text}</p>}
          {msg.list && (
            <ul className="cb-list">
              {msg.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
          {msg.link && (
            <a href={msg.link.url} target="_blank" rel="noopener noreferrer" className="cb-link">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              {msg.link.label}
            </a>
          )}
        </div>
        <span className="cb-time">{msg.time}</span>
      </div>
      {isUser && <div className="cb-avatar cb-avatar-user">U</div>}
    </div>
  );
};

/* ── Quick reply chips ──────────────────────────────────────── */
const QUICK = ["Skills", "Projects", "Services", "GitHub", "Contact"];

/* ── Main component ─────────────────────────────────────────── */
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi! I'm Yasir's Assistant. Ask me about his skills, projects, services, or how to get in touch.",
      time: now()
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unread, setUnread] = useState(0);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  /* Scroll to bottom on new messages */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  /* Focus input when chat opens */
  useEffect(() => {
    if (isOpen) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const sendMessage = (text) => {
    const value = (text || input).trim();
    if (!value) return;

    const userMsg = { role: "user", text: value, time: now() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getResponse(value);
      const botMsg = { role: "bot", ...response, time: now() };
      setIsTyping(false);
      setMessages((prev) => [...prev, botMsg]);
      if (!isOpen) setUnread((n) => n + 1);
    }, 900 + Math.random() * 400);
  };

  const toggle = () => setIsOpen((o) => !o);

  return (
    <div className="cb-root">
      {/* ── Chat window ── */}
      <div className={`cb-window ${isOpen ? "cb-open" : ""}`} role="dialog" aria-label="Yasir Assistant chat">

        {/* Header */}
        <div className="cb-header">
          <div className="cb-header-info">
            <div className="cb-header-avatar">
              Y
              <span className="cb-online-dot" />
            </div>
            <div>
              <p className="cb-header-name">Yasir Assistant</p>
              <p className="cb-header-status">Online · Usually replies instantly</p>
            </div>
          </div>
          <button className="cb-close-btn" onClick={toggle} aria-label="Close chat">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="cb-messages" role="log" aria-live="polite">
          {messages.map((msg, i) => (
            <Message key={i} msg={msg} />
          ))}
          {isTyping && <TypingBubble />}
          <div ref={bottomRef} />
        </div>

        {/* Quick replies */}
        <div className="cb-quick-replies">
          {QUICK.map((q) => (
            <button key={q} className="cb-chip" onClick={() => sendMessage(q)}>
              {q}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="cb-input-row">
          <input
            ref={inputRef}
            type="text"
            className="cb-input"
            value={input}
            placeholder="Ask anything…"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            aria-label="Chat input"
          />
          <button
            className="cb-send-btn"
            onClick={() => sendMessage()}
            disabled={!input.trim()}
            aria-label="Send message"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>

      </div>

      {/* ── Floating toggle button ── */}
      <button className={`cb-fab ${isOpen ? "cb-fab-open" : ""}`} onClick={toggle} aria-label="Toggle chat">
        <span className="cb-fab-icon cb-fab-chat">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </span>
        <span className="cb-fab-icon cb-fab-close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </span>
        {unread > 0 && !isOpen && (
          <span className="cb-badge">{unread}</span>
        )}
      </button>
    </div>
  );
};

export default Chatbot;