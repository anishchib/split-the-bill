import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./Header.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="body-div">
        <div className="body-sub-div">
          <h2>Welcome to Split-The-Bill App</h2>
          <p>
            This is a simple React application to help you split bills among
            friends easily and fairly.
          </p>
        </div>
        <div className="body-sub-div">
          <h3>Get Started</h3>
          <p>
            To get started, add the expenses and the app will calculate how much
            each person owes.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
