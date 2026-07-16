import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";
import "../styles/Home.css";

function Home() {
  const [messages, setMessages] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const sendMessage = (text) => {
    if (!text.trim()) return;

    const userMessage = { sender: "user", text };
    setMessages((prev) => [...prev, userMessage]);

    if (messages.length === 0) {
      const title = text.length > 20 ? text.slice(0, 20) + "..." : text;
      setChatHistory((prev) => [title, ...prev]);
    }

    setIsTyping(true);

    setTimeout(() => {
      const aiMessage = {
        sender: "ai",
        text: `I received your question: "${text}". Soon I will answer using AI, Google Search and Wikipedia.`,
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const newChat = () => {
    setMessages([]);
    setIsTyping(false);
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="layout">
        <Sidebar
          onNewChat={newChat}
          chatHistory={chatHistory}
          darkMode={darkMode}
        />

        <div className="main-content">
          <ChatWindow messages={messages} isTyping={isTyping} />
          <ChatInput onSend={sendMessage} darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
}

export default Home;