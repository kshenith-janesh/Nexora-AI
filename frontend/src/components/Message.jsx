import "./../styles/Message.css";

function Message({ sender, text }) {
  return (
    <div className={`message ${sender}`}>
      <div className="message-content">
        <strong>{sender === "user" ? "👤 You" : "🤖 Nexora AI"}</strong>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Message;