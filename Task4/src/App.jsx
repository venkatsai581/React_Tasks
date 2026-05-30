import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={darkTheme ? "app dark" : "app light"}>
      <div className="container">
        <h1>Counter App</h1>

        <h2 className="counter">{count}</h2>

        <div className="button-group">
          <button className="btn increment" onClick={increment}>
            Increment
          </button>

          <button className="btn decrement" onClick={decrement}>
            Decrement
          </button>

          <button className="btn reset" onClick={reset}>
            Reset
          </button>
        </div>

        <button className="theme-btn" onClick={toggleTheme}>
          Switch to {darkTheme ? "Light" : "Dark"} Theme
        </button>
      </div>
    </div>
  );
}

export default App;