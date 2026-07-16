import "../styles/Header.css";

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="header">
      <div>
        <h2>Nexora AI</h2>
        <span>Your Intelligent Research Assistant</span>
      </div>

      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀ Light" : "🌙 Dark"}
      </button>
    </header>
  );
}

export default Header;