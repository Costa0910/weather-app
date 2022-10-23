import Sidebar from "./components/sidebar/Sidebar";
import Body from "./components/main/Body";
import "./App.css";
import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <header className="sidebar">
        <Sidebar />
      </header>
      <section className="main">
        <Body />
      </section>
    </div>
  );
}

export default App;
