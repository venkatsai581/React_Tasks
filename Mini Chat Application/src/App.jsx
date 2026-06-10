import { useState } from "react";
import "./App.css";

function App() {
  // State to store current input value
  const [message, setMessage] = useState("");

  // State to store all messages
  const [messages, setMessages] = useState([]);

  // Function to send a message
  const handleSend = () => {
    // Prevent empty messages
    if (message.trim() === "") return;

    // Add new message to messages array
    setMessages([...messages, message]);

    // Clear input field after sending
    setMessage("");
  };

  return (
    <div className="app">
      <div className="chat-container">
        <h2>Mini Chat Application</h2>

        <div className="input-section">
          {/* Controlled Input */}
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {/* Event Handling */}
          <button onClick={handleSend}>Send Message</button>
        </div>

        <div className="message-list">
          <h3>Messages</h3>

          {/* Conditional Rendering */}
          {messages.length === 0 ? (
            <p>No messages yet</p>
          ) : (
            /* Dynamic Rendering using map() */
            messages.map((msg, index) => (
              <div key={index} className="message">
                {msg}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;