import { useState } from "react";
import "../styles/ChatInput.css";

function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim() === "") return;

    onSend(text);

    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        placeholder="Ask Nexora AI anything..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default ChatInput;