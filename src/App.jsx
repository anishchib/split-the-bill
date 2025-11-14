import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";
import { Button } from "./Button.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="body-div">
        <div className="body-sub-div">
          <h2>Welcome to Split-The-Bill App by Anish</h2>
          <Button>Add User</Button>
        </div>
        <div className="body-sub-div">
          <h2>Get Started Here fpr App Working</h2>
          <Button> Submit </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
