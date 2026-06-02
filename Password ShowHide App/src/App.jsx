import { useState } from "react";
import "./App.css";

function App() {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => {
    // lexical scope example
    const currentState = showPassword;

    setShowPassword(!currentState);
  };

  return (
    <div className="container">
      <div className="login-card">
        <h1>Login</h1>

        <input
          type="text"
          placeholder="Enter Username"
          className="input-field"
        />

        <div className="password-box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            className="input-field"
          />

          <button className="toggle-btn" onClick={handleToggle}>
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <button className="login-btn">Login</button>
      </div>
    </div>
  );
}

export default App;