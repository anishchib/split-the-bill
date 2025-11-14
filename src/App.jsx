import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="body-div">
        <div className="body-sub-div">
          <h2>Welcome to Split-The-Bill App</h2>
        </div>
        <div className="body-sub-div">
          <h3>Get Started</h3>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
