import { useEffect, useRef } from "react";
import "../styles/ChatWindow.css";
import Message from "./Message";

function ChatWindow({ messages, isTyping }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="chat-window">
      {messages.length === 0 ? (
        <div className="welcome-box">
          <h1>👋 Welcome to Nexora AI</h1>
          <p>Ask anything. Search Wikipedia. Discover knowledge instantly.</p>
        </div>
      ) : (
        <div className="messages">
          {messages.map((message, index) => (
            <Message
              key={index}
              sender={message.sender}
              text={message.text}
            />
          ))}

          {isTyping && (
            <div className="typing">
              🤖 Nexora AI is typing...
            </div>
          )}

          <div ref={bottomRef}></div>
        </div>
      )}
    </div>
  );
}

export default ChatWindow;