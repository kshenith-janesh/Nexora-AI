import "../styles/Sidebar.css";

function Sidebar({ onNewChat, chatHistory, darkMode }) {
  return (
    <aside className={darkMode ? "sidebar dark" : "sidebar"}>
      <button className="new-chat" onClick={onNewChat}>
        + New Chat
      </button>

      <h3>Recent Chats</h3>

      <ul>
        {chatHistory.length === 0 ? (
          <li>No chats yet</li>
        ) : (
          chatHistory.map((chat, index) => (
            <li key={index}>{chat}</li>
          ))
        )}
      </ul>

      <div className="bottom-menu">
        <p>⚙ Settings</p>
        <p>ℹ About</p>
      </div>
    </aside>
  );
}

export default Sidebar;